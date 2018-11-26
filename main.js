'use strict'

// IMPORTS
const express = require('express');
const mainApi = require('./routes/index');
const middleware = require('./middleware/index');
const env = require('./env');

let app = express();

// ENDPOINTS

app.use('/',mainApi);

app.use('api/',mainApi);

app.listen(env.port);