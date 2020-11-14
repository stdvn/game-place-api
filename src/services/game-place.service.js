const meetings = require('../models/meeting.model');
const days = require('../models/days.model');
const gamePlaceUtils = require('../data/game-place.helpers');

class GamePlaceService {

    static async getGameDays(teamName, championshipId, seasonId) {
        const dayCount = await this.getDayCount(championshipId);
        let teamMeetings = [];
        for (let i = 1; i <= dayCount-1; i++) {
            let meeting = await this.getTeamMeeting(teamName, championshipId, i, seasonId);
            teamMeetings.push(gamePlaceUtils.formatGameDay(meeting, i, teamName));
        }
        return teamMeetings;
    }

    static async getTeamMeeting(teamName, championshipId, dayCount, seasonId) {
        return await new Promise((resolve, reject) => {
            meetings.MeetingModel.getMeetings(championshipId, dayCount, seasonId)
                .then(value =>
                    resolve(value.data.find(e => e.Equipedom === teamName || e.Equipeext === teamName)));
        });
    }

    static async getDayCount(championshipId) {
        return await new Promise((resolve, reject) => {
            days.DaysModel.getDays(championshipId)
                .then(value => resolve(value.data.length));
        });
    }

}

module.exports = {
    GamePlaceService: GamePlaceService
}
