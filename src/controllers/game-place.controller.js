const GamePlace = require('../services/game-place.service');

/**
 * Returns list of al game places for team FCF */
class GamePlaceController {
    static async getFcfGamePlaces(req, res) {
        try {
            const allFcfGamePlaces =
                await GamePlace.GamePlaceService.getGameDays(
                   'FCF',
                    req.params.championshipId,
                    req.params.seasonId
                );
            return res.status(200).json(allFcfGamePlaces);
        } catch (error) {
            return res.status(404).json({
                status: 404,
                message: 'No game places for FCF team found'
            });
        }
    }
}

module.exports = {
    GamePlaceController: GamePlaceController
};
