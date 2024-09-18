// Create a npm project and install Express.js

// Create an Express.js app which funnels the request 
// through 2 middleware functions that log something 
// to the console and return one response.

// Handle requests to '/' and '/users' such that each 
// request only has one handler/middleware that does something with it

const express = require('express');
const app = express();

app.use("/users", (req, res, next) => {
  console.log('Users page');
  res.send('<h1>This is users page.</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Home page.');
  res.send('<h1>This is home page.</h1>');
});

app.listen(3000);