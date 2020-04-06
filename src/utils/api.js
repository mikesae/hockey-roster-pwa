const getPlayers = () => {
    return fetch('/.netlify/functions/players').then((response) => {
        return response.json()
    })
};

const getScheduleItems = () => {
    return fetch('/.netlify/functions/scheduleitems').then((response) => {
        return response.json()
    })
};

export default {
    getPlayers: getPlayers,
    getScheduleItems: getScheduleItems
}