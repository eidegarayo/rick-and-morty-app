const User = require('../models/user');

const getUser = (req, res) => {
  const id = req.userId;
  User.findById(id).exec((err, user) => {
    if (err) {
      res.status(500).send({ error: true, message: err });
      return;
    }

    if (!user) {
      res.status(404).send({ error: true, message: 'User not found' });
    }

    res.status(200).send({ success: true, user });
  });
};

const saveUser = (req, res) => {
  const { id, ...rest } = req.body;
  try {
    User.findOneAndUpdate({ id }, { ...rest }, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send({ error: true, message: err });
        return;
      }
      res.status(200).send({ success: true, data });
    });
  } catch (error) {
    res.status(500).send({ error: true, message: error });
  }
};

const userController = {
  getUser,
  saveUser,
};

module.exports = userController;
