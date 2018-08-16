const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const mockup = require('../mockup');

const app = express();
// app.use(bodyParser.json());

// app.get('/user', function(req, res) {
//     res.status(200).json({ name: 'john' });
// });

app.all('*', (req, res, next) => {
    const mockPath = process.env.mockPath || path.resolve(process.cwd(), 'mock');

    const data = mockup.load(mockPath, req.path);
    res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
    res.write(JSON.stringify(data));
    res.end();
});

module.exports = app;
