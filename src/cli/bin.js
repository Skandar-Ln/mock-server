#!/usr/bin/env node

const server = require('../server');
require('./env').setMockPath();

const port = 3000;
server.listen(port, (err, result) => {
    if (err) {
        console.error('Server', 'ERROR', err);
    }

    console.log('Server', 'OK', `Mock Server start working. Listening at localhost:${port}`);
});
