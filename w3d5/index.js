const express = require('express');
const app = express();
app.get('/', (req, res) => {
    let name = req.query.name;
    if (!name) {
        name = "person";
    }
    res.send(`Welcome ${name}`);
});
app.listen(3000);
