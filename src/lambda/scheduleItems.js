exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            [
                {
                    "day": "Fri",
                    "date": "2/12/21",
                    "time": "3:45 PM",
                    "opponent": "BHBL/BS",
                    "logoUrl": "/images/team-logos/bhbl-bs.png",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Sat",
                    "date": "2/13/21",
                    "time": "3:45 PM",
                    "opponent": "BHBL/BS",
                    "logoUrl": "/images/team-logos/bhbl-bs.png",
                    "type": "Away",
                    "home": false,
                    "section": "II",
                    "result": "",
                    "location": "Schenectady County Rec Facility",
                    "locationUrl": "https://maps.apple.com/?q=SCRF"
                }
            ]
        )
    }
};