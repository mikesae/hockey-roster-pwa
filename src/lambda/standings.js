const tabletojson = require('tabletojson').Tabletojson;
const standingsUrl = 'https://www.section2hockey.com/teams/default.asp?u=CDHSHL&s=hockey';

exports.handler = async event => {
    const season = event.queryStringParameters.season;
    return await new Promise(resolve => {
        tabletojson.convertUrl(
            `${standingsUrl}&p=standings&viewseas=${season}`,
            tablesAsJson => {
                const rows = tablesAsJson[8].slice(3);
                let result = [];
                rows.forEach(row => {
                    result.push(
                    {
                        team: row["0"],
                        conferenceGamesPlayed: row["1"],
                        conferenceRecord: row["2"],
                        conferencePoints: row["3"],
                        overallGamesPlayed: row["4"],
                        overallRecord: row["5"],
                        goalsFor: row["6"],
                        goalsAgainst: row["7"],
                        lastSix: row["8"],
                        streak: row["9"],
                        winPercentage: row["10"]
                    });
                });

                resolve({
                    statusCode: 200,
                    body: JSON.stringify(result)
                })
            });
    });
};