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
    res.status(200).send({ success: true });
  });
};

const signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .exec((err, data) => {
      if (err) {
        res.status(500).send({ error: true, message: err });
        return;
      }

      if (!data) {
        res.status(404).send({ error: true, message: 'User not found' });
        return;
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        data.password,
      );

      if (!passwordIsValid) {
        res.status(401).send({
          error: true,
          accessToken: null,
          message: 'Invalid Password',
        });
        return;
      }

      const token = jwt.sign({ id: data.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        success: true,
        user: {
          _id: data._id,
          username: data.username,
          favourites: data.favourites,
        },
        accessToken: token,
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
