function gameObject () {
    gameObject = {
        "home": {
           "teamName":"Brooklyn Nets",
           "colors":"Black,White",
           "players":{
            "Alan Anderson":{
            "Number":"0",
            "Shoe":"16",
            "Points":"22",
            "Rebounds":"12",
            "Assists":"12",
            "Steals" :"3",
            "Blocks" :"1",
            "slam Dunks":"1",
            }
            
            }
           },
           "away": {
            "teamName":"Charlotte Hornets",
            "colors":"Turquoise,Purple",
            "Players":{
            "Jeff Adrien": {
               "number": 4,
               "shoe": 18,
               "points": 10,
               "rebounds": 1,
               "assists": 1,
               "steals": 2,
               "blocks": 7,
                "slamDunks": 2 
                }
                
                }
            },
            "Bismak Biyombo": {
                "number": 0,
                "shoe": 16,
                "points": 12,
                "rebounds": 4,
                "assists": 7,
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0


            }
           }
        }
    function homeTeamName() {
        let object = gameObject()
        return object['home']['teamName']
    }

    console.log(homeTeamName())
    
