import players from './data/players.json';

exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'Players';
    return {
        statusCode: 200,
        body: players
    }
};