const tabletojson = require('tabletojson').Tabletojson;
const standingsUrl = 'https://www.section2hockey.com/teams/default.asp?u=CDHSHL&s=hockey';

//https://www.section2hockey.com/teams/default.asp?u=CDHSHL&s=hockey&p=standings&viewseas=Winter_2020/2021

exports.handler = async event => {
    const season = event.queryStringParameters.season || 'Winter_2020%2F2021';

    const streak = (value) =>
        value.replace("Won ", "W").replace("Lost ", "L");

    return await new Promise(resolve => {
        tabletojson.convertUrl(
            `${standingsUrl}&p=standings&viewseas=${season}`,
            tablesAsJson => {
                // Standings table is now the 15th one on the page. This can change when they re-do the page.
                const rows = tablesAsJson[14].slice(3);
                let result = [];
                rows.forEach(row => {
                    if (Object.keys(row).length >= 11) {
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
                                streak: streak(row["9"]),
                                winPercentage: row["10"]
                            });
                    }
                });

                resolve({
                    statusCode: 200,
                    body: JSON.stringify(result)
                })
            });
    });
};