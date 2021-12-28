const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../server/app');
const User = require('../server/models/user');

const api = supertest(app);

describe('Account test', () => {
  test('Test api', async () => {
    const response = await api.get('/testAPI');
    expect(response.body === 'Hello world!');
  });

  test('Add user', async () => {
    const user = new User({
      name: 'pedro',
      password: '123456',
    });

    const response = await api
      .post('/api/auth/signup')
      .send(user)
      .expect(200)
      .expect('Content-Type', /application\/json/);
    console.log(response);
  });
});
