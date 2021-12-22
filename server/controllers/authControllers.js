const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const config = require('../config/authConfig');
const User = require('../models/user');

const signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: 'User was registered successfully' });
  });
};

const signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        res.status(404).send({ message: 'User not found' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password,
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: 'Invalid Password' });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      req.session.token = token;

      req.status(200).send({
        id: user._id,
        username: user.username,
      });
    });
};

const signout = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: 'You\'ve been signet out!' });
  } catch (err) {
    this.next(err);
  }
};

module.exports = {
  signup,
  signin,
  signout,
};
