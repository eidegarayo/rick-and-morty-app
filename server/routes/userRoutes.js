const express = require('express');

const { authJwt } = require('../middlewares');
const controller = require('../controllers/userControllers');

const router = express.Router();

router.get('/userbyid', authJwt, controller.getUser);
router.post('/save-user', authJwt, controller.saveUser);

module.exports = router;
