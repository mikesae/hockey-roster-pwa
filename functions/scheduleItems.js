import scheduleItems from './data/scheduleItems.json';

exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'ScheduleItems';
    return {
        statusCode: 200,
        body: scheduleItems
    }
};