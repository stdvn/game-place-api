const express = require('express');
const router = express.Router();
const GamePlace = require('../controllers/game-place.controller');

router.get(
	'/fcf/championship/:championshipId/season/:seasonId/gamePlaces',
	GamePlace.GamePlaceController.getFcfGamePlaces
);

module.exports = router;
