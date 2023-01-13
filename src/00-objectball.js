
function gameObject() {
    let x

    x = {
        "home": {
            "teamName" : "Brooklyn Nets",
            "colors" : ["Black", "White"],
            "players" : {
                "Alan Anderson" : {
                    "number": 0,
                    "shoe" : 16, 
                    "points" : 22,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 1,
                },
                "Reggie Evans" : {
                    "number": 30,
                    "shoe" : 14, 
                    "points" : 12,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 12,
                    "blocks" : 12,
                    "slamDunks" : 7,
                },
                "Brook Lopez" : {
                    "number": 11,
                    "shoe" : 17, 
                    "points" : 17,
                    "rebounds" : 19,
                    "assists" : 10,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15,
                },
                "Mason Plumlee" : {
                    "number": 1,
                    "shoe" : 19, 
                    "points" : 26,
                    "rebounds" : 12,
                    "assists" : 6,
                    "steals" : 3,
                    "blocks" : 8,
                    "slamDunks" : 5,
                },
                "Jason Terry" : {
                    "number": 31,
                    "shoe" : 15, 
                    "points" : 19,
                    "rebounds" : 2,
                    "assists" : 2,
                    "steals" : 4,
                    "blocks" : 11,
                    "slamDunks" : 1,
                },
            },


        },
        
        "away" : {
            "teamName" : "Charlotte Hornets",
            "colors" : ["Turquoise", "Purple"],
            "players" : {
                "Jeff Adrien" : {
                    "number": 4,
                    "shoe" : 18, 
                    "points" : 10,
                    "rebounds" : 1,
                    "assists" : 1,
                    "steals" : 2,
                    "blocks" : 7,
                    "slamDunks" : 2,
                },
                "Bismak Biyombo" : {
                    "number": 0,
                    "shoe" : 16, 
                    "points" : 12,
                    "rebounds" : 4,
                    "assists" : 7,
                    "steals" : 7,
                    "blocks" : 15,
                    "slamDunks" : 10,
                },
                "DeSagna Diop" : {
                    "number": 2,
                    "shoe" : 14, 
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamDunks" : 5,
                },
                "Ben Gordon" : {
                    "number": 8,
                    "shoe" : 15, 
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamDunks" : 0,
                },
                "Brendan Heywood" : {
                    "number": 33,
                    "shoe" : 15, 
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12,
                },
        },
    }
}

return x
}

function homeTeamName () {
    let object = gameObject()
    return object['home']['teamName']
}

function numPointsScored (playerName) {
    let game = gameObject()
    let homeTeamObj = game.home.players
    let awayTeamObj = game.away.players
    for (let player in homeTeamObj) {

         if (player === playerName) {
            
            let value = homeTeamObj[player]
            for (let points in value) {
                            
                if (points === 'points') {
                let pointsScored = value[points]
                return pointsScored
                            }
                        }
                    }
                }

            
    for (let player in awayTeamObj) {
       
        if (player === playerName) {
            
            let value = awayTeamObj[player]
            for (let points in value) {
                            
                if (points === 'points') {
                let pointsScored = value[points]
                return pointsScored
                            }
                        }
                    }
                }
}
console.log(numPointsScored("Ben Gordon"))

// let oo = { foo: 42, bar: 83, "key w/ spaces": true};
// console.log(oo["foo"])
// console.log(oo["bar"])
// console.log(oo["key w/ spaces"])

// console.log(oo.foo)
// console.log(oo.bar)

// let oo = {foo: 42, bar: 83, baz: 79}
// for (let key in oo) {
//     let value = oo[key];
//     console.log("key", key, "value", value)
// }

// let oo = { foo: 42, bar: 83, baz: 79 };
// console.log("Object.keys(oo)  =>", Object.keys(oo));
// console.log("Object.values(oo) =>", Object.values(oo))
// console.log("Object.entries(oo) =>", Object.entries(oo))


