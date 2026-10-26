// Luis Contreras
// ID: 1203750608
// Date: 10/25/26

const express = require('express');
const app = express();

const logger = require('./loggerMiddleware');

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});