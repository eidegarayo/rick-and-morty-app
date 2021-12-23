const express = require('express');

const controller = require('../controllers/dataContollers');

const router = express.Router();

router.get('/home-images', controller.getHomeImages);
router.get('/character-list', controller.getCharacterList);
router.get('/character/:id', controller.getCharacter);

module.exports = router;
