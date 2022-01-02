const supertest = require('supertest');

const app = require('../app');

const api = supertest(app);

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
      .set('Authorization', 'Bearer ' + token) 
      .expect(403);
  });

  // test get character list

  // test get character 
});
