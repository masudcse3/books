require('dotenv').config('../.env');
const express = require('express');
const app = express();
const {notFoundHandler, errotHandler} = require('./error');

app.use(require('./middleware'));
app.use(require('./routes'));
app.use(notFoundHandler);
app.use(errotHandler);

module.exports = app;