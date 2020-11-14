const axios = require('axios');

class MeetingModel {
    /**
     * Get meetings from given championship id, day and season id
     * @param {any} championshipId
     * @param {any} dayCount
     * @param {any} seasonId
     */
    static async getMeetings(championshipId, dayCount, seasonId) {
        return axios.post('http://www.football-loisir-amateur.com/Home/GetRencontres',
            {
                championnatId: championshipId,
                journeeId: dayCount,
                saisonId: seasonId
            });
    }
}


module.exports = {
    MeetingModel: MeetingModel
}
