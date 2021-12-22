const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const testAPIRouter = require('./routes/testAPI');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

const { URL_CLIENT } = process.env;
const corsOptions = {
  origin: URL_CLIENT,
};

app.use(cors(corsOptions));

app.use(bodyParser.json()); // for parsing application/json

app.use('/testAPI', testAPIRouter);
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
