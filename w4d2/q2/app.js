const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = {};

app.get("/", (req, res) => {
    res.render("form");
});

app.get("/8ball", (req, res) => {
    console.log(req.body);
    res.status(200);
    res.end();
});

app.get("/list", (req, res) => {
    res.render("list", { list: list });
});

app.listen(3000);