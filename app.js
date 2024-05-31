const express = require('express');
const body_parser = require('body-parser');
const userRoute = require('./routers/user.router');
const groupRoute = require('./routers/group.router');

const app = express();

app.use(body_parser.json());

app.use('/user', userRoute);
app.use('/', groupRoute);

module.exports = app;