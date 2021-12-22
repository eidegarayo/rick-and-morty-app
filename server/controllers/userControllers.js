const db = require('../models/user');

const User = db.user;

const getUser = (req, res) => {
console.log("🚀 ~ file: userControllers.js ~ line 6 ~ getUser ~ req", req)
  const { id } = req.body;
  User.findById(id).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      res.status(404).send({ message: 'User not found' });
    }

    res.status(200).send({ user });
  });
};

module.exports = getUser;
