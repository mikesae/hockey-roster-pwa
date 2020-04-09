const tabletojson = require('tabletojson').Tabletojson;
const standingsUrl = 'https://www.section2hockey.com/teams/default.asp?u=CDHSHL&s=hockey'

exports.handler = async event => {
    const season = event.queryStringParameters.season;
    await tabletojson.convertUrl(
        `${standingsUrl}&p=standings&viewseas=${season}`,
        (tablesAsJson) => {
            return {
                statusCode: 200,
                body: tablesAsJson[1]
            }
        }
    );
}