it('should refresh an expired token', async function() {
  const res = await request(app)
    .post('/refresh-token') // Replace with your actual token refresh endpoint
    .set('Authorization', `Bearer ${refreshToken}`) // Include the expired token 
    .send(); 

  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty('newToken'); // Expect a new token to be returned
});