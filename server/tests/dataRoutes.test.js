require('dotenv').config({ path: '../../.env' });
const mongoose = require('mongoose');
const supertest = require('supertest');
const bcrypt = require('bcryptjs');

const app = require('../app');
const User = require('../models/user');

const api = supertest(app);


const testUserId = new mongoose.Types.ObjectId();
const testUser = {
  _id: testUserId,
  username: 'test',
  password: '123456',
};

beforeAll(async () => {
  await mongoose.connect(
    process.env.URL_DB_TEST,
    { useNewUrlParser: true, useUnifiedTopology: true },
  );
});

const auth = {};

beforeEach(async () => {
  await User.deleteMany();
  const user = new User({ ...testUser, password: bcrypt.hashSync(testUser.password, 8) });
  await user.save();
  const response = await api
    .post('/api/auth/signin')
    .send({
      username: testUser.username,
      password: testUser.password,
    });
  auth.token = response.body.accessToken;
});

afterAll(async () => {
  await mongoose.connection.dropCollection('users');
  await mongoose.connection.close();
});

describe('Data routes test', () => {
  test('home-images', async () => {
    const response = await api.get('/api/data/home-images');
    expect(response.body.success).toBe(true);
    expect(response.body.images).toHaveLength(20);
  });

  test('character-list with no token', async () => {
    await api.get('/api/data/character-list')
      .expect(403);
  });

  test('character-list with unauthorized token', async () => {
    await api.get('/api/data/character-list')
      .set('x-access-token', 'qwerty')
      .expect(401);
  });

  test('character-list with authorized token', async () => {
    const response = await api.get('/api/data/character-list')
      .set('x-access-token', auth.token);
    expect(response.statusCode).toBe(200);
    expect(response.body.data.results.length).toBe(20);
  });

  test('character with unauthorized token', async () => {
    await api.get('/api/data/character/1')
      .set('x-access-token', 'qwerty')
      .expect(401);
  });

  test('character with authorized token', async () => {
    const response = await api.get('/api/data/character/1')
      .set('x-access-token', auth.token);
    expect(response.statusCode).toBe(200);
    expect(response.body.data.id).toBe(1);
  });
});
