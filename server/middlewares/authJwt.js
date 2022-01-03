const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;

    next();
  });
};

module.exports = verifyToken;
