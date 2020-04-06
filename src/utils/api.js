const getPlayers = () => {
    return fetch('/.netlify/functions/players').then((response) => {
        return response.json()
    })
};

const getScheduleItems = () => {
    return fetch('/.netlify/functions/scheduleItems').then((response) => {
        return response.json()
    })
};

export default {
    getPlayers: getPlayers,
    getScheduleItems: getScheduleItems
}