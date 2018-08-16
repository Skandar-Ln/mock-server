const request = require('supertest');
const server = require('../');

it('should send back data', done => {
    request(server)
      .get('/user')
      .expect(200, done)
});
