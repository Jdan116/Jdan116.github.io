
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    const date = new Date();
    res.render("form.ejs");
});


app.post('/result', (req, res) => {
    console.log("Request body: ", req.body);
    res.render('output.ejs', {
        name: req.body.name,
        age: req.body.age
    });
});

app.listen(3000);