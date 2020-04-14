const tabletojson = require('tabletojson').Tabletojson;
const url = 'https://www.section2hockey.com/teams/default.asp?s=hockey&u=CDHSHL&p=profile&sportsHQ=SEC2PLAINSMEN';

exports.handler = async event => {
    const playerId = event.queryStringParameters.playerId;
    const season = event.queryStringParameters.season || 'Winter_2019%2F2020';

    return await new Promise(resolve => {
        tabletojson.convertUrl(
            `${url}&viewseas=${season}&playerId=${playerId}`,
            {useFirstRowForHeadings: true},
            tablesAsJson => {
                const rows = tablesAsJson[9].slice(1);
                let result = [];
                rows.forEach(row => {
                    result.push(
                        {
                            GameDate: row["Date"],
                            Opponent: row["Opponent"],
                            Result: row["Result"],
                            Minutes: parseInt(row["MIN"] || 0),
                            GoalsAgainst: parseInt(row["GA"] || 0),
                            Saves: parseInt(row["Saves"] || 0),
                            Percentage: parseFloat(row["Pct"]),
                        });
                });

                resolve({
                    statusCode: 200,
                    body: JSON.stringify(result)
                })
            });
    });
};