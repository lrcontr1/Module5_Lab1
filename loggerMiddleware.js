// Luis Contreras
// ID: 1203750608
// Date: 10/25/26

function logger(req, res, next) {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next();
}

module.exports = logger;