
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')
const session = require('express-session');

const app = express();

app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: "S@lTMIU2021"
}));

app.set('view engine', 'ejs');
app.use(cookieParser())
app.use(express.urlencoded({
    extended: false
}));
app.use('/css', express.static(path.join(__dirname, 'css')));
const PORT = 3000;

app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const current_css = hour > 6 && hour < 18 ? 'day.css' : 'night.css'; 
    console.log(current_css)
    res.render("index", {current_css});
});

app.post('/result', (req, res) => {

    req.session["name"] = req.body.name;
    req.session["age"] = req.body.age;
    req.session["name1"] = req.body.name;
    req.session["age1"] = req.body.age;

    res.redirect(303, '/output');
});

app.get('/output', (req, res) => {

    for(let key in req.session) {
        console.log("key: " + key + " name: " + req.session[key])
    }

    let name = req.session["name"];
    let age = req.session["age"];

    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "unknown";
    }
    res.render("output", {name, age});
});


app.listen(PORT);