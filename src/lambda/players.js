const players = require('../data/players.json');
exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(players)
    }
};