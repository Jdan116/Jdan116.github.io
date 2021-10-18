const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;
 
app.use(express.urlencoded({extended:false}));

let bucket = ['WAP', 'MPP', 'EA', 'MWA']

app.get('/', (req, res) => {
    res.send(bucket);
});

app.get('/add', (req, res) => {
    res.send(`
    <form action="/add" method="post">
    <label>Name: <input id="item" name="item" type="text"></label>
    <input type="submit" value="Submit Query">
    </form>
    `);
});

app.post('/add', (req, res) => {
    const item = req.body.item;
    bucket.push(item)

    res.redirect(303, `/`);
});


app.listen(PORT);