const tabletojson = require('tabletojson').Tabletojson;
const url = 'https://www.section2hockey.com/teams/default.asp?s=hockey&u=CDHSHL&p=profile&sportsHQ=SEC2PLAINSMEN';

exports.handler = async event => {
    const playerId = event.queryStringParameters.playerId;
    const season = event.queryStringParameters.season || 'Winter_2019%2F2020';

    return await new Promise(resolve => {
        tabletojson.convertUrl(
            `${url}&viewseas=${season}&playerId=${playerId}`,
            { useFirstRowForHeadings: true },
            tablesAsJson => {
                let result = [];
                if (tablesAsJson != null && tablesAsJson.length > 8) {
                    const rows = tablesAsJson[9].slice(1);

                    rows.forEach(row => {
                        result.push(
                            {
                                GameDate: row["Date"],
                                Opponent: row["Opponent"],
                                Result: row["Result"],
                                Goals: parseInt(row["G"] || 0),
                                Assists: parseInt(row["A"] || 0),
                                Points: parseInt(row["Pts"] || 0),
                                PPG: parseInt(row["PPG"]),
                                GWG: parseInt(row["GWG"]),
                                GTG: parseInt(row["GTG"]),
                                PlusMinus: parseInt(row["+/-"] || 0)
                            });
                    });
                }

                resolve({
                    statusCode: 200,
                    body: JSON.stringify(result)
                })
            });
    });
};