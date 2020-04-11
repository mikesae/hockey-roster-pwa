exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'Echo';
    return {
        statusCode: 200,
        body: `Echo ${subject}`
    }
}