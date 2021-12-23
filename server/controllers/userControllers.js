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

module.exports = getUser;
