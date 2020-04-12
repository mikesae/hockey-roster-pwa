const tabletojson = require('tabletojson').Tabletojson;
const url = 'https://www.section2hockey.com/teams/default.asp?s=hockey&u=CDHSHL&p=profile&sportsHQ=SEC2PLAINSMEN';

exports.handler = async event => {
    const playerId = event.queryStringParameters.playerId;
    const season = event.queryStringParameters.season || 'Winter_2019%2F2020';

    return await new Promise(resolve => {
        tabletojson.convertUrl(
            `${url}&viewseas=${season}&playerId=${playerId}`,
            tablesAsJson => {
                const rows = tablesAsJson[9].slice(1);
                let result = [];
                rows.forEach(row => {
                    result.push(
                    {
                        GameDate: row["0"],
                        Opponent: row["2"],
                        Result: parseInt(row["3"]),
                        Goals: parseInt(row["5"]),
                        Assists: parseInt(row["6"]),
                        Points: parseInt(row["7"]),
                        PPG: parseInt(row["8"]),
                        GWG: parseInt(row["9"]),
                        GTG: parseInt(row["10"]),
                        PlusMinus: parseInt(row["11"])
                    });
                });

                resolve({
                    statusCode: 200,
                    body: JSON.stringify(result)
                })
            });
    });
};