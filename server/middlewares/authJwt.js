const jwt = require('jsonwebtoken');
const config = require('../config/authConfig');

const verifyToken = (req, res, next) => {
console.log("🚀 ~ file: authJwt.js ~ line 5 ~ verifyToken ~ req", req)
  const { token } = req.session;

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' });
    }
    req.userId = decoded.id;

    next();
  });
};

module.exports = verifyToken;
