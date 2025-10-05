const request = require('supertest');
const express = require('express');
const app = express();

app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

test('GET /api/greeting returns greeting', async () => {
  const res = await request(app).get('/api/greeting');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello from backend!');
});
