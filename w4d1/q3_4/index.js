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

app.get('/', (req, res) => {
    res.render("shop.ejs", {
        products
    });
});

app.get('/detail', (req, res) => {
    const product_id = req.query.id;
    let current_element;

    products.forEach(element => {
        if (product_id == element.id) {
            current_element = element;
        }
    });

    res.render("product.ejs", {
        current_element
    });
});

app.get('/cart', (req, res) => {
    res.render("shoppingcart.ejs");
});

app.post('/addToCart', (req, res) => {
    const product_id = req.query.id;
    products.forEach(element => {
        if (product_id == element.id) {

            let quantity = req.body.quantity;
            let isAdded = false;


            let elementKey = element.name + "#" + element.price;
            for (let key in req.session) {
                console.log("key: " + key + " name: " + req.session[key])

                if (key == elementKey) {
                    req.session[key] = req.session[key] ? parseInt(req.session[key]) + parseInt(quantity) : 1;
                    isAdded = true;
                }

            }

            if (!isAdded) {
                quantity = quantity ? quantity : 1;
                req.session[elementKey] = quantity;
            }

        }
    });

    let carts = [];
    for (let key in req.session) {
        if (key != "cookie") {

            const quantity = req.session[key];
            const parts = key.split("#")
            const name = parts[0];
            const price = parts[1];

            const cart = {
                name,
                price,
                quantity
            };
            carts.push(cart);
        }
    }
    console.log("carts: " + carts)

    res.render("shoppingcart.ejs", {
        carts
    });
});


app.listen(PORT);