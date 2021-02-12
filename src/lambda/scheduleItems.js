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
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena",
                    "liveFeedUrl:": "https://www.livebarn.com/en/videon?mode=live&sid=409"
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
                    "locationUrl": "https://maps.apple.com/?q=SCRF",
                    "liveFeedUrl:": "https://www.livebarn.com/en/videon/?mode=live&sid=354"
                },
                {
                    "day": "Tue",
                    "date": "2/16/21",
                    "time": "3:45 PM",
                    "opponent": "Saratoga",
                    "logoUrl": "/images/team-logos/saratoga.png",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena",
                    "liveFeedUrl:": "https://www.livebarn.com/en/videon?mode=live&sid=409"
                },
                {
                    "day": "Wed",
                    "date": "2/17/21",
                    "time": "8?30 PM",
                    "opponent": "Saratoga",
                    "logoUrl": "/images/team-logos/saratoga.png",
                    "type": "Away",
                    "home": false,
                    "section": "II",
                    "result": "",
                    "location": "Weibel Ave. Rink",
                    "locationUrl": "https://maps.apple.com/?q=Weibel+Ave+Rink",
                    "liveFeedUrl:": ""
                },
                {
                    "day": "Fri",
                    "date": "2/19/21",
                    "time": "3:45 PM",
                    "opponent": "Mohawks",
                    "logoUrl": "/images/team-logos/mohawks.png",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena",
                    "liveFeedUrl:": "https://www.livebarn.com/en/videon?mode=live&sid=409"
                },
                {
                    "day": "Sat",
                    "date": "2/20/21",
                    "time": "3:45 PM",
                    "opponent": "Mohawks",
                    "logoUrl": "/images/team-logos/mohawks.png",
                    "type": "Away",
                    "home": false,
                    "section": "II",
                    "result": "",
                    "location": "Schenectady County Rec Facility",
                    "locationUrl": "https://maps.apple.com/?q=SCRF",
                    "liveFeedUrl:": "https://www.livebarn.com/en/videon/?mode=live&sid=354"
                }
            ]
        )
    }
};