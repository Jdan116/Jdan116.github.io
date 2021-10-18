const { request } = require('express');
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({
    extended: false
}));
const PORT = 3000;

let cart = [];

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
    const prod = req.body.quantity;
    console.log("body: ", req.body)
    const product_id = req.query.id;

    products.forEach(element => {
        if (product_id == element.id) {

            let quantity = req.body.quantity;
            let isAdded = false;
            cart.forEach(c => {
                if (c.name == element.name) {
                    if (c.quantity) {
                        quantity = c.quantity
                    } else {
                        quantity = 1;
                    }
                    quantity = parseInt(quantity) + 1;
                    c.quantity = quantity;
                    isAdded = true;
                }
            });

            if (!isAdded) {
                quantity = quantity ? quantity : 1;
                const add2Cart = {
                    name: element.name,
                    price: element.price,
                    quantity
                };
                cart.push(add2Cart);
            }

        }
    });

    res.render("shoppingcart.ejs", {
        cart
    });
});


app.listen(PORT);