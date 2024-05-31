const request = require('supertest'); // Use supertest to make HTTP requests.
const express = require('express');
const router = require('./group.router'); // Import the router to be tested.

// Create an express app for testing purposes.
const app = express();
app.use(express.json()); // Needed to parse JSON requests.
app.use(router); // Register the router with the express app.

describe('Group Router', () => {
  it('should respond with status 200 when POST /createGroup', async () => {
    // Make a request to POST /createGroup.
    const response = await request(app)
      .post('/createGroup')
      .send({ groupName: 'Test Group', groupInfo: 'Test Group Info' });

    // Check if the response status code is 200.
    expect(response.status).toBe(200);
  });
});
