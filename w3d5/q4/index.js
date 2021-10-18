const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;
 
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

let bucket = ['WAP', 'MPP', 'EA', 'MWA']

app.get('/', (req, res) => {
    res.send(bucket);
});

app.post('/result', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    res.redirect(303, `/output?name=${name}&age=${age}`);
});

app.get('/output', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = "unknown";
    }
    res.send(`Welcome ${name}! Your age is ${age}`);
});


app.listen(PORT);