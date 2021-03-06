const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../app');
const User = require('../models/user');

const api = supertest(app);

describe('Test API route test', () => {
  test('Test api', async () => {
    const response = await api.get('/testAPI');
    expect(response.body === 'Hello world!');
  });
});
