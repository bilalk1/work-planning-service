const express = require('express');

const { routes } = require('./routes');

require('./configs');


const app = express();

const port = process.env.port || 3000;

app.listen(port);

console.log('Sever is running on the port ' + port);

app.get('/', function (req, res) {
    return res.json('Hello from the server! 🚀 🚀 🚀');
});

app.use(routes)

