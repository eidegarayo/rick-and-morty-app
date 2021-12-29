const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../server/app');
const User = require('../server/models/user');

const api = supertest(app);

beforeEach(async () => {
  await User.deleteMany({});
});

describe('Account test', () => {
  test('Test api', async () => {
    const response = await api.get('/testAPI');
    expect(response.body === 'Hello world!');
  });

  test('signin', async () => {
    await api
      .post('/api/auth/signin')
      .send({ username: 'Test', password: '123456' })
      .expect(200);
      // .expect('Content-Type', /application\/json);
  });

  afterAll(() => mongoose.connection.close());
});
