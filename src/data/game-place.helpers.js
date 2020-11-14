function formatGameDay(meeting, dayCount, teamName) {
    const isHome = meeting.Equipedom === teamName;
    const date = meeting.Date.split('/')[1].split('Date(')[1].split(')')[0];
    return {
        day: dayCount,
        date: new Date(parseInt(date, 10)),
        against: isHome ? meeting.Equipeext : meeting.Equipedom,
        home: isHome,
        field: meeting.Terrain
    };
}

module.exports = {
    formatGameDay
}
