const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;
 
app.use(express.urlencoded({extended:false}));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    const current_css = hour > 6 && hour < 18 ? 'day.css' : 'night.css'; 
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/${current_css}">
        <title>form-day-night</title>
    </head>
    
    <body>
        <form id="sub_id" action="/result" method="post">
            <label>Name: <input id="name" name="name" type="text"></label>
            <label>Age: <input id="age" name="age" type="text"></label>
            <input type="submit" value="Submit Query">
        </form>
    </body>
    
    </html>
    `);
});

app.post('/result', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const age = req.body.age;
    
    res.send(`<h1>Hi, ${name}! Your age is ${age}</h1>`);
});


app.listen(PORT);