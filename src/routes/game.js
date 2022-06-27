const express = require('express');
const router = express.Router();
const gamecontroller = require('../controllers/game');

router.get('/game/start/', gamecontroller.start);

module.exports = router;
