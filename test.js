// Luis Contreras
// ID: 1203750608
// Date: 10/25/26

const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});