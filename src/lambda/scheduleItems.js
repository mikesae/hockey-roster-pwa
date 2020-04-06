exports.handler = async event => {
    //const date = event.queryStringParameters.name || 'date';
    return {
        statusCode: 200,
        body: JSON.stringify(
            [
                {
                    "day": "W",
                    "date": "11/20/19",
                    "time": "3:30 PM",
                    "opponent": "G/M/S/S/V Storm",
                    "type": "Scrimmage",
                    "home": true,
                    "section": "II",
                    "result": "N/A",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Fri",
                    "date": "11/22/19",
                    "time": "3:30 PM",
                    "opponent": "N/S/A Mohawks",
                    "type": "Scrimmage",
                    "home": true,
                    "section": "II",
                    "result": "N/A",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Sa",
                    "date": "11/23/19",
                    "time": "7:35 PM",
                    "opponent": "Saratoga Blue Streaks",
                    "type": "Jamboree",
                    "home": false,
                    "section": "II",
                    "result": "N/A",
                    "location": "Union College",
                    "locationUrl": "https://maps.apple.com/?q=Frank+L+Messa+Rink"
                },
                {
                    "day": "Sa",
                    "date": "11/23/19",
                    "time": "8:55 PM",
                    "opponent": "CBA Brothers",
                    "type": "Jamboree",
                    "home": false,
                    "section": "II",
                    "result": "N/A",
                    "location": "Union College",
                    "locationUrl": "https://maps.apple.com/?q=Frank+L+Messa+Rink"
                },
                {
                    "day": "Sa",
                    "date": "11/23/19",
                    "time": "9:30 PM",
                    "opponent": "BHBL/BS Spartans",
                    "type": "Jamboree",
                    "home": false,
                    "section": "II",
                    "result": "N/A",
                    "location": "Union College",
                    "locationUrl": "https://maps.apple.com/?q=Frank+L+Messa+Rink"
                },
                {
                    "day": "W",
                    "date": "11/27/19",
                    "time": "12:15 PM",
                    "opponent": "Albany Academy Cadets",
                    "type": "Scrimmage",
                    "home": false,
                    "section": "II",
                    "result": "",
                    "location": "Picotte Field House",
                    "locationUrl": "https://maps.apple.com/?q=Picotte+Field+House&address=135+Academy+Road+12208"
                },
                {
                    "day": "Fri",
                    "date": "12/6/19",
                    "time": "8:00 PM",
                    "opponent": "Mamaroneck Tigers",
                    "type": "Tournament",
                    "home": true,
                    "section": "I",
                    "result": "W 5-1",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Sa",
                    "date": "12/7/19",
                    "time": "12:45 PM",
                    "opponent": "Williamsville North Spartans",
                    "type": "Tournament",
                    "home": false,
                    "section": "VI",
                    "result": "L 5-2",
                    "location": "Vernon Ice Rink",
                    "locationUrl": "https://maps.apple.com/?q=Vernon+Ice+Rink&address=30+Weibel+Ave+12866"
                },
                {
                    "day": "W",
                    "date": "12/11/19",
                    "time": "5:15 PM",
                    "opponent": "Queensbury Spartans",
                    "type": "Game",
                    "home": false,
                    "section": "D2",
                    "result": "L 4-2",
                    "location": "Glens Falls Recreation Ice Center",
                    "locationUrl": "https://maps.apple.com/?q=Glens+Falls+Recreational+Ice+Center&address=Fire+Rd+12801"
                },
                {
                    "day": "Fri",
                    "date": "12/13/19",
                    "time": "8:00 PM",
                    "opponent": "Adirondack Rivermen",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "L 4-2",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "W",
                    "date": "12/18/19",
                    "time": "7:30 PM",
                    "opponent": "Saratoga Blue Streaks",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "L 6-1",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Fri",
                    "date": "12/20/19",
                    "time": "8:00 PM",
                    "opponent": "Fayetteville-Manlius Hornets",
                    "type": "Game",
                    "home": true,
                    "section": "III",
                    "result": "L 4-3",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Fri",
                    "date": "12/27/19",
                    "time": "2:30 PM",
                    "opponent": "Cazenovia Lakers",
                    "type": "Tournament",
                    "home": false,
                    "section": "III",
                    "result": "W 4-1",
                    "location": "JM McDonald Sports Complex",
                    "locationUrl": "https://maps.apple.com/?q=JM+McDonald+Sports+Complex"
                },
                {
                    "day": "Sa",
                    "date": "12/28/19",
                    "time": "1:00 PM",
                    "opponent": "Cortland Homer Golden Eagles",
                    "type": "Tournament",
                    "home": false,
                    "section": "III",
                    "result": "W 6-3",
                    "location": "JM McDonald Sports Complex",
                    "locationUrl": "https://maps.apple.com/?q=JM+McDonald+Sports+Complex"
                },
                {
                    "day": "Fri",
                    "date": "1/3/20",
                    "time": "6:15 PM",
                    "opponent": "Capital District Jets",
                    "type": "Game",
                    "home": false,
                    "section": "II",
                    "result": "W 6-0",
                    "location": "Albany County Hockey Facility",
                    "locationUrl": "https://maps.apple.com/?q=Albany+County+Hockey+Facility"
                },
                {
                    "day": "Sa",
                    "date": "1/4/20",
                    "time": "5:45 PM",
                    "opponent": "N/S/A Mohawks",
                    "type": "Game",
                    "home": false,
                    "section": "II",
                    "result": "W 5-1",
                    "location": "Union College"
                },
                {
                    "day": "W",
                    "date": "1/8/20",
                    "time": "7:30 PM",
                    "opponent": "G/M/S/S/V Storm",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "L 2-1",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Fri",
                    "date": "1/10/20",
                    "time": "8:00 PM",
                    "opponent": "BHBL/BS Spartans",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "W 4-0",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Fri",
                    "date": "1/17/20",
                    "time": "8:30 PM",
                    "opponent": "Bethlehem Eagles",
                    "type": "Game",
                    "home": false,
                    "section": "II",
                    "result": "L 5-2",
                    "location": "Bethlehem Area YMCA",
                    "locationUrl": "https://maps.apple.com/?q=Bethlehem+YMCA&address=900+Delaware+Ave+12054"
                },
                {
                    "day": "Sa",
                    "date": "1/18/20",
                    "time": "3:45 PM",
                    "opponent": "Ithaca Lil' Red",
                    "type": "Game",
                    "home": true,
                    "section": "IV",
                    "result": "T 3-3",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Sa",
                    "date": "1/25/20",
                    "time": "4:10 PM",
                    "opponent": "CBA Brothers",
                    "type": "Game",
                    "home": false,
                    "section": "II",
                    "result": "L 3-1",
                    "location": "Albany County Hockey Facility",
                    "locationUrl": "https://maps.apple.com/?q=Albany+County+Hockey+Facility"
                },
                {
                    "day": "W",
                    "date": "1/29/20",
                    "time": "7:30 PM",
                    "opponent": "Albany Academy Cadets",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "L 5-4",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Fri",
                    "date": "1/31/20",
                    "time": "8:00 PM",
                    "opponent": "La Salle Cadets",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "W 4-1",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "W",
                    "date": "2/5/20",
                    "time": "7:40 PM",
                    "opponent": "Adirondack Rivermen",
                    "type": "Game",
                    "home": false,
                    "section": "II",
                    "result": "W 2-1",
                    "location": "Glens Falls Recreation Ice Center",
                    "locationUrl": "https://maps.apple.com/?q=Glens+Falls+Recreational+Ice+Center&address=Fire+Rd+12801"
                },
                {
                    "day": "Sa",
                    "date": "2/8/20",
                    "time": "7:00 PM",
                    "opponent": "Saratoga Blue Streaks",
                    "type": "Game",
                    "home": false,
                    "section": "II",
                    "result": "L 4-0",
                    "location": "Vernon Ice Rink",
                    "locationUrl": "https://maps.apple.com/?q=Vernon+Ice+Rink&address=30+Weibel+Ave+12866"
                },
                {
                    "day": "Fri",
                    "date": "2/14/20",
                    "time": "8:00 PM",
                    "opponent": "Queensbury Spartans",
                    "type": "Game",
                    "home": true,
                    "section": "D2",
                    "result": "T 2-2",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "Sa",
                    "date": "2/22/20",
                    "time": "7:15 PM",
                    "opponent": "Capital District Jets",
                    "type": "Game",
                    "home": true,
                    "section": "II",
                    "result": "W 8-2",
                    "location": "Clifton Park Arena",
                    "locationUrl": "https://maps.apple.com/?q=Capital+Arena"
                },
                {
                    "day": "W",
                    "date": "2/26/20",
                    "time": "6:45 PM",
                    "opponent": "Saratoga Blue Streaks",
                    "type": "Sectional",
                    "home": false,
                    "section": "II",
                    "result": "L 3-0",
                    "location": "Vernon Ice Rink",
                    "locationUrl": "https://maps.apple.com/?q=Vernon+Ice+Rink&address=30+Weibel+Ave+12866"
                }
            ]
        )
    }
};