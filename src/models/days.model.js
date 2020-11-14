const axios = require('axios');

class DaysModel {
    static async getDays(championshipId) {
        return axios.post('http://www.football-loisir-amateur.com/Home/GetJournees/championnatId',
            {
                championnatId: championshipId
            });
    }
}


module.exports = {
    DaysModel: DaysModel
}
