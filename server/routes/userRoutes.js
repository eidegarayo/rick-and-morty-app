const express = require('express');

const { authJwt } = require('../middlewares');
const controller = require('../controllers/userControllers');

const router = express.Router();

router.get('/userbyid', authJwt, controller);

module.exports = router;
