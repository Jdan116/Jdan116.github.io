const {
    request
} = require('express');
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({
    extended: false
}));

const session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "S@lTMIU2021"
}));

const PORT = 3000;

const products = [{
        id: 1,
        name: "Microsoft book laptop 2",
        year: 2020,
        description: 'Intel 8th Gen Core i5 8250U – 1.60GHz – 3.40GHz Quad Core Processor',
        image: 'https://m.media-amazon.com/images/I/61XyJRTVQZS._AC_SX679_.jpg',
        price: '$890'
    },
    {
        id: 2,
        name: "Newest HP",
        year: 2021,
        description: 'Intel Core i5-1035G1 1.0GHz (Up To 3.6GHz) 4 Core Processor 6MB Cache',
        image: 'https://m.media-amazon.com/images/I/71Cs0RfivYS._AC_SL1500_.jpg',
        price: '$790'
    },
    {
        id: 3,
        name: "MacBook Pro",
        year: 2020,
        description: 'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
        image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg',
        price: '$1200'
    }
]

app.get('/', (req, res, next) => {
  let products = []
  res.render('shop', {products})
})

app.get('/product/:id', (req, res, next) => {
  const item = app.locals.products.find(product => product.id === parseInt(req.params.id))
  res.render('product', {item : item})
})

app.post('/addToCart', (req, res, next) => {
  const name = req.body.name
  const price = req.body.price

  if (name in req.session) {
    req.session[name].quantity = parseInt(req.session[name].quantity) + 1
    req.session[name].price = parseInt(req.session[name].price) + parseInt(price)
  } else {
    req.session[name] = {
      name,
      price,
      quantity : 1
    } 
  }
  if (!req.session.count) {
    req.session.count = 0
  }
  req.session.count = parseInt(req.session.count) + 1
  res.status(200).send(`${req.session.count}`)
})

app.get('/shoppingcart', (req, res, next)=> {
  res.render('shoppingcart', {carts : req.session})
})

app.get('/cartNumber', (req, res) => {
  res.status(200).send(`${req.session.count ? req.session.count : 0}`)
})

app.listen(PORT);