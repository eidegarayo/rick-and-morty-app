const express = require('express');

const { authJwt } = require('../middlewares');
const controller = require('../controllers/dataContollers');

const router = express.Router();

router.get('/home-images', controller.getHomeImages);
router.get('/character-list', authJwt, controller.getCharacterList);
router.get('/character/:id', authJwt, controller.getCharacter);

module.exports = router;
