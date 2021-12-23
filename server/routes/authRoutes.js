const express = require('express');

const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/authControllers');

const router = express.Router();

router.post('/signup', verifySignUp, controller.signup);
router.post('/signin', controller.signin);

module.exports = router;
