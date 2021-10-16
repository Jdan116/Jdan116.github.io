const express = require('express');
const app = express();
const PORT = 3000;
 
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send(`
    <form action="/result" method="post">
    <label>Name: <input id="name" name="name" type="text"></label>
    <label>Age: <input id="age" name="age" type="text"></label>
    <input type="submit" value="Submit Query">
    </form>
    `);
});

app.post('/result', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    
    res.send(`<h1>Hi, ${name}! Your age is ${age}</h1>`);
});


app.listen(PORT);