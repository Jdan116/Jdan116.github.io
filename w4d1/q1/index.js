const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser')
app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.urlencoded({
    extended: false
}));
app.use('/css', express.static(path.join(__dirname, 'css')));
const PORT = 3000;

let key;
let value;
let cookie_list = [];

app.get('/', (req, res) => {
    res.render("cookies", {cookie_list});
});

app.post('/addCookies', (req, res) => {
    key = req.body.key;
    value = req.body.value;
    cookie_list.push({key, value})
    res.cookie(key, value, { maxAge: 1000 * 60 * 5})
    res.render("cookies.ejs", {cookie_list});
});


app.listen(PORT);