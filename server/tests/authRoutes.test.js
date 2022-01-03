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

beforeEach(async () => {
  await User.deleteMany();
  const user = new User({ ...testUser, password: bcrypt.hashSync(testUser.password, 8) });
  await user.save();
});

afterAll(async () => {
  await mongoose.connection.dropCollection('users');
  await mongoose.connection.close();
});

describe('Account routes test', () => {
  test('Singup: error when no user is send', async () => {
    await api
      .post('/api/auth/signup')
      .expect(500);
  });

  test('Singup: success when passed a username and password', async () => {
    await api
      .post('/api/auth/signup')
      .send({
        username: 'new_user',
        password: 'new_password',
      })
      .expect(200);
  });

  test('Singup: error when username is already in DB', async () => {
    const response = await api
      .post('/api/auth/signup')
      .send({
        username: testUser.username,
        password: 'password',
      })
      .expect(400);
    expect(response.body.message).toBe('Failed! Username is already in use!');
  });

  test('Signin: success when username and password are correct', async () => {
    await api
      .post('/api/auth/signin')
      .send({
        username: testUser.username,
        password: testUser.password,
      })
      .expect(200);
  });

  test('Signin: error when username does not exist', async () => {
    await api
      .post('/api/auth/signin')
      .send({
        username: 'fake',
        password: 'password',
      })
      .expect(404);
  });

  test('Signin: error when password is not correct', async () => {
    await api
      .post('/api/auth/signin')
      .send({
        username: testUser.username,
        password: 'fake',
      })
      .expect(401);
  });
});
