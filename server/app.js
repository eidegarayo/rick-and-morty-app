const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const testAPIRouter = require('./routes/testAPI');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const dataRoutes = require('./routes/dataRoutes');

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
app.use('/api/data', dataRoutes);

// Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
