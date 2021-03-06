const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const { SECRET } = process.env;

const signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user
    .save()
    .then(() => {
      res.status(200).send({ success: true });
    })
    .catch((err) => {
      res.status(500).send({ error: true, message: err });
    });
};

const signin = async (req, res) => {
  try {
    const data = await User.findOne({ username: req.body.username }).exec();
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

    const token = jwt.sign({ id: data.id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      success: true,
      user: data,
      accessToken: token,
    });
  } catch (err) {
    console.error('🚀 ~ file: authControllers.js ~ line 55 ~ signin ~ err', err);
    res.status(500).send({ error: true, message: err });
  }
};

module.exports = {
  signup,
  signin,
};
