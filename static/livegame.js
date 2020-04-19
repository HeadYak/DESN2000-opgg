
let x = document.getElementById('game')
const apikey = 'RGAPI-098d1c31-f601-45f7-96f5-20887a7b5255'
document.getElementById('searchbtn').addEventListener('click', () => {
    if ( document.getElementById('search').value == '') {
      window.alert('Please enter summoner name')
    }
    else {
        let table1 = document.getElementById("team1")
        for(var z = table1.rows.length - 1; z > 1; z--) {
            table1.deleteRow(z);
        }
        let table2 = document.getElementById("team2")
        for(var z = table2.rows.length - 1; z > 1; z--) {
            table2.deleteRow(z);
        }
        table1.style.display = 'flex'
        table2.style.display = 'flex'
        const options = {
            method: 'GET'
        }
        const summoner = document.getElementById('search').value 
        fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apikey}`, options)
        .then(res => (res.json()))
        .then(data => { 
            let summonerid = data.id
            fetch(`https://oc1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerid}?api_key=${apikey}`, options)
            .then(res => (res.json()))
            .then(game => {
                
                var cell2 = document.getElementById('meta')
                
                for (var queue of queueid) {
                    if (queue['queueId'] == game['gameQueueConfigId']) {
                        cell2.innerText = queue['description'].replace(' games', '') + '\t\t\t\t\t\t' + queue['map'] 
                    }
                }
                const date = new Date(parseInt(game['gameStartTime']))
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                const hour = date.getHours()
                var minute =  "0" + date.getMinutes()
                let timestamp = year + "-" + month + "-" + day + " " + hour + ":" + minute.substr(-2)
                
                console.log(game['gameLength'])
                
                let elapse =  parseInt(game['gameLength'] / 60 ) + ":" + parseInt(game['gameLength'] % 60 )

                document.getElementById('time').innerText = timestamp + ' ' + '|'  + ' ' + elapse

                for (var player of game['participants']) {
                    
                    let t2 = document.getElementById('team1')    
                    
                    if (player['teamId'] == 200) {
                        t2 = document.getElementById('team2')
                    }
                    var row = t2.insertRow(-1)
                    row.id = player['summonerName']
                    var champion = row.insertCell(0)
                    var img = document.createElement('img')
                    img.src = "http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/" + getChampName(player['championId']) + ".png"
                    img.height = 60;
                    img.width = 60;
                    champion.appendChild(img)
                    var playername = row.insertCell(-1)
                    playername.innerText = player['summonerName']
                    var rune1 = row.insertCell(-1)
                    var prune = document.createElement('img')
                    prune.src = `https://opgg-static.akamaized.net/images/lol/perk/${player['perks']['perkIds'][0]}.png?image=q_auto&v=1586932751`
                    prune.height = 60
                    prune.width = 60
                    rune1.appendChild(prune)
                    var rune2 = row.insertCell(-1)
                    var srune = document.createElement('img')
                    srune.src = `https://opgg-static.akamaized.net/images/lol/perkStyle/${player['perks']['perkSubStyle']}.png?image=q_auto&v=1586932751`
                    srune.height = 30
                    srune.width = 30
                    rune2.appendChild(srune)
                    
                    fetch(`https://oc1.api.riotgames.com/lol/league/v4/entries/by-summoner/${player['summonerId']}?api_key=${apikey}`)
                    .then(res => (res.json()))
                    .then(league => {
                        //console.log(league)
                        
                        var rank = document.getElementById(league[0]['summonerName']).insertCell(-1)
                        var wr = document.getElementById(league[0]['summonerName']).insertCell(-1)
                        var wp = document.getElementById(league[0]['summonerName']).insertCell(-1)
                        rank.innerText =  league[0].tier + ' ' + league[0].rank + ' ' + league[0].leaguePoints + ' LP'
                        wr.innerText = 'W: ' + league[0].wins + ' L: ' + league[0].losses 
                        wp.innerText = ( Number(league[0].wins )/ (Number(league[0].losses ) + Number(league[0].wins))  * 100).toFixed(2) + '%'
                        if (league[0].veteran == true) {
                            var hardstuck = document.getElementById(league[0]['summonerName']).insertCell(-1)
                            hardstuck.innerText = "Hardstuck"
                        }
                        if (league[0].hotstreak == true) {
                            var hot = document.getElementById(league[0]['summonerName']).insertCell(-1)
                            hot.innerText = "Winstreak"
                        }
            
                    })
                    
                }
                
                

            })
        })
    }
})




function getChampName(id) {
    switch(id){
        case 266: return "Aatrox"; break;
        case 412: return "Thresh"; break;
        case 23: return "Tryndamere"; break;
        case 79: return "Gragas"; break;
        case 69: return "Cassiopeia"; break;
        case 136: return "Aurelion Sol"; break;
        case 13: return "Ryze"; break;
        case 78: return "Poppy"; break;
        case 14: return "Sion"; break;
        case 1: return "Annie"; break;
        case 202: return "Jhin"; break;
        case 43: return "Karma"; break;
        case 111: return "Nautilus"; break;
        case 240: return "Kled"; break;
        case 99: return "Lux"; break;
        case 103: return "Ahri"; break;
        case 2: return "Olaf"; break;
        case 112: return "Viktor"; break;
        case 34: return "Anivia"; break;
        case 27: return "Singed"; break;
        case 86: return "Garen"; break;
        case 127: return "Lissandra"; break;
        case 57: return "Maokai"; break;
        case 25: return "Morgana"; break;
        case 28: return "Evelynn"; break;
        case 105: return "Fizz"; break;
        case 74: return "Heimerdinger"; break;
        case 238: return "Zed"; break;
        case 68: return "Rumble"; break;
        case 82: return "Mordekaiser"; break;
        case 37: return "Sona"; break;
        case 96: return "KogMaw"; break;
        case 55: return "Katarina"; break;
        case 117: return "Lulu"; break;
        case 22: return "Ashe"; break;
        case 30: return "Karthus"; break;
        case 12: return "Alistar"; break;
        case 122: return "Darius"; break;
        case 67: return "Vayne"; break;
        case 110: return "Varus"; break;
        case 77: return "Udyr"; break;
        case 89: return "Leona"; break;
        case 126: return "Jayce"; break;
        case 134: return "Syndra"; break;
        case 80: return "Pantheon"; break;
        case 92: return "Riven"; break;
        case 121: return "KhaZix"; break;
        case 42: return "Corki"; break;
        case 268: return "Azir"; break;
        case 51: return "Caitlyn"; break;
        case 76: return "Nidalee"; break;
        case 85: return "Kennen"; break;
        case 3: return "Galio"; break;
        case 45: return "Veigar"; break;
        case 432: return "Bard"; break;
        case 150: return "Gnar"; break;
        case 90: return "Malzahar"; break;
        case 104: return "Graves"; break;
        case 254: return "Vi"; break;
        case 10: return "Kayle"; break;
        case 39: return "Irelia"; break;
        case 64: return "LeeSin"; break;
        case 420: return "Illaoi"; break;
        case 60: return "Elise"; break;
        case 106: return "Volibear"; break;
        case 20: return "Nunu"; break;
        case 4: return "TwistedFate"; break;
        case 24: return "Jax"; break;
        case 102: return "Shyvana"; break;
        case 429: return "Kalista"; break;
        case 36: return "DrMundo"; break;
        case 427: return "Ivern"; break;
        case 131: return "Diana"; break;
        case 223: return "TahmKench"; break;
        case 63: return "Brand"; break;
        case 113: return "Sejuani"; break;
        case 8: return "Vladimir"; break;
        case 154: return "Zac"; break;
        case 421: return "RekSai"; break;
        case 133: return "Quinn"; break;
        case 84: return "Akali"; break;
        case 163: return "Taliyah"; break;
        case 18: return "Tristana"; break;
        case 120: return "Hecarim"; break;
        case 15: return "Sivir"; break;
        case 236: return "Lucian"; break;
        case 107: return "Rengar"; break;
        case 19: return "Warwick"; break;
        case 72: return "Skarner"; break;
        case 54: return "Malphite"; break;
        case 157: return "Yasuo"; break;
        case 101: return "Xerath"; break;
        case 17: return "Teemo"; break;
        case 75: return "Nasus"; break;
        case 58: return "Renekton"; break;
        case 119: return "Draven"; break;
        case 35: return "Shaco"; break;
        case 50: return "Swain"; break;
        case 91: return "Talon"; break;
        case 40: return "Janna"; break;
        case 115: return "Ziggs"; break;
        case 245: return "Ekko"; break;
        case 61: return "Orianna"; break;
        case 114: return "Fiora"; break;
        case 9: return "Fiddlesticks"; break;
        case 31: return "ChoGath"; break;
        case 33: return "Rammus"; break;
        case 7: return "Leblanc"; break;
        case 16: return "Soraka"; break;
        case 26: return "Zilean"; break;
        case 56: return "Nocturne"; break;
        case 222: return "Jinx"; break;
        case 83: return "Yorick"; break;
        case 6: return "Urgot"; break;
        case 203: return "Kindred"; break;
        case 21: return "MissFortune"; break;
        case 62: return "MonkeyKing"; break;
        case 53: return "Blitzcrank"; break;
        case 98: return "Shen"; break;
        case 201: return "Braum"; break;
        case 5: return "XinZhao"; break;
        case 29: return "Twitch"; break;
        case 11: return "MasterYi"; break;
        case 44: return "Taric"; break;
        case 32: return "Amumu"; break;
        case 41: return "Gangplank"; break;
        case 48: return "Trundle"; break;
        case 38: return "Kassadin"; break;
        case 161: return "Velkoz"; break;
        case 143: return "Zyra"; break;
        case 267: return "Nami"; break;
        case 59: return "JarvanIV"; break;
        case 81: return "Ezreal"; break;
        case 875: return "Sett"
        case 523: return "Aphelios"
        case 235: return "Senna"
        case 246: return "Qiyana"
        case 350: return "Yuumi"
        case 517: return "Sylas"
        case 518: return "Neeko"
        case 555: return "Pyke"
        case 145: return "Kaisa"
        case 142: return "Zoe"
        case 516: return "Ornn"
        case 141: return "Kayn"
        case 497: return "Rakan"
        case 498: return "Xayah"
        case 164: return "Camille"
        }

  
}
let queueid = [
    {
        "queueId": 0,
        "map": "Custom games",
        "description": null,
        "notes": null
    },
    {
        "queueId": 2,
        "map": "Summoner's Rift",
        "description": "5v5 Blind Pick games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 430"
    },
    {
        "queueId": 4,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Solo games",
        "notes": "Deprecated in favor of queueId 420"
    },
    {
        "queueId": 6,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Premade games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 7,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI games",
        "notes": "Deprecated in favor of queueId 32 and 33"
    },
    {
        "queueId": 8,
        "map": "Twisted Treeline",
        "description": "3v3 Normal games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 460"
    },
    {
        "queueId": 9,
        "map": "Twisted Treeline",
        "description": "3v3 Ranked Flex games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 470"
    },
    {
        "queueId": 14,
        "map": "Summoner's Rift",
        "description": "5v5 Draft Pick games",
        "notes": "Deprecated in favor of queueId 400"
    },
    {
        "queueId": 16,
        "map": "Crystal Scar",
        "description": "5v5 Dominion Blind Pick games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 17,
        "map": "Crystal Scar",
        "description": "5v5 Dominion Draft Pick games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 25,
        "map": "Crystal Scar",
        "description": "Dominion Co-op vs AI games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 31,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Intro Bot games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 830"
    },
    {
        "queueId": 32,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Beginner Bot games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 840"
    },
    {
        "queueId": 33,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Intermediate Bot games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 850"
    },
    {
        "queueId": 41,
        "map": "Twisted Treeline",
        "description": "3v3 Ranked Team games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 42,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Team games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 52,
        "map": "Twisted Treeline",
        "description": "Co-op vs AI games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 800"
    },
    {
        "queueId": 61,
        "map": "Summoner's Rift",
        "description": "5v5 Team Builder games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 65,
        "map": "Howling Abyss",
        "description": "5v5 ARAM games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 450"
    },
    {
        "queueId": 67,
        "map": "Howling Abyss",
        "description": "ARAM Co-op vs AI games",
        "notes": "Game mode deprecated"
    },
    {
        "queueId": 70,
        "map": "Summoner's Rift",
        "description": "One for All games",
        "notes": "Deprecated in patch 8.6 in favor of queueId 1020"
    },
    {
        "queueId": 72,
        "map": "Howling Abyss",
        "description": "1v1 Snowdown Showdown games",
        "notes": null
    },
    {
        "queueId": 73,
        "map": "Howling Abyss",
        "description": "2v2 Snowdown Showdown games",
        "notes": null
    },
    {
        "queueId": 75,
        "map": "Summoner's Rift",
        "description": "6v6 Hexakill games",
        "notes": null
    },
    {
        "queueId": 76,
        "map": "Summoner's Rift",
        "description": "Ultra Rapid Fire games",
        "notes": null
    },
    {
        "queueId": 78,
        "map": "Howling Abyss",
        "description": "One For All: Mirror Mode games",
        "notes": null
    },
    {
        "queueId": 83,
        "map": "Summoner's Rift",
        "description": "Co-op vs AI Ultra Rapid Fire games",
        "notes": null
    },
    {
        "queueId": 91,
        "map": "Summoner's Rift",
        "description": "Doom Bots Rank 1 games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 950"
    },
    {
        "queueId": 92,
        "map": "Summoner's Rift",
        "description": "Doom Bots Rank 2 games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 950"
    },
    {
        "queueId": 93,
        "map": "Summoner's Rift",
        "description": "Doom Bots Rank 5 games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 950"
    },
    {
        "queueId": 96,
        "map": "Crystal Scar",
        "description": "Ascension games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 910"
    },
    {
        "queueId": 98,
        "map": "Twisted Treeline",
        "description": "6v6 Hexakill games",
        "notes": null
    },
    {
        "queueId": 100,
        "map": "Butcher's Bridge",
        "description": "5v5 ARAM games",
        "notes": null        
    },
    {
        "queueId": 300,
        "map": "Howling Abyss",
        "description": "Legend of the Poro King games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 920"        
    },
    {
        "queueId": 310,
        "map": "Summoner's Rift",
        "description": "Nemesis games",
        "notes": null        
    },
    {
        "queueId": 313,
        "map": "Summoner's Rift",
        "description": "Black Market Brawlers games",
        "notes": null        
    },
    {
        "queueId": 315,
        "map": "Summoner's Rift",
        "description": "Nexus Siege games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 940"        
    },
    {
        "queueId": 317,
        "map": "Crystal Scar",
        "description": "Definitely Not Dominion games",
        "notes": null        
    },
    {
        "queueId": 318,
        "map": "Summoner's Rift",
        "description": "ARURF games",
        "notes": "Deprecated in patch 7.19 in favor of queueId 900"        
    },
    {
        "queueId": 325,
        "map": "Summoner's Rift",
        "description": "All Random games",
        "notes": null        
    },
    {
        "queueId": 400,
        "map": "Summoner's Rift",
        "description": "5v5 Draft Pick games",
        "notes": null
    },
    {
        "queueId": 410,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Dynamic games",
        "notes": "Game mode deprecated in patch 6.22"
    },
    {
        "queueId": 420,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Solo games",
        "notes": null
    },
    {
        "queueId": 430,
        "map": "Summoner's Rift",
        "description": "5v5 Blind Pick games",
        "notes": null
    },
    {
        "queueId": 440,
        "map": "Summoner's Rift",
        "description": "5v5 Ranked Flex games",
        "notes": null
    },
    {
        "queueId": 450,
        "map": "Howling Abyss",
        "description": "5v5 ARAM games",
        "notes": null
    },
    {
        "queueId": 460,
        "map": "Twisted Treeline",
        "description": "3v3 Blind Pick games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 470,
        "map": "Twisted Treeline",
        "description": "3v3 Ranked Flex games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 600,
        "map": "Summoner's Rift",
        "description": "Blood Hunt Assassin games",
        "notes": null
    },
    {
        "queueId": 610,
        "map": "Cosmic Ruins",
        "description": "Dark Star: Singularity games",
        "notes": null
    },
    {
        "queueId": 700,
        "map": "Summoner's Rift",
        "description": "Clash games",
        "notes": null
    },
    {
        "queueId": 800,
        "map": "Twisted Treeline",
        "description": "Co-op vs. AI Intermediate Bot games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 810,
        "map": "Twisted Treeline",
        "description": "Co-op vs. AI Intro Bot games",
        "notes": "Deprecated in patch 9.23"
    },
    {
        "queueId": 820,
        "map": "Twisted Treeline",
        "description": "Co-op vs. AI Beginner Bot games",
        "notes": null
    },
    {
        "queueId": 830,
        "map": "Summoner's Rift",
        "description": "Co-op vs. AI Intro Bot games",
        "notes": null
    },
    {
        "queueId": 840,
        "map": "Summoner's Rift",
        "description": "Co-op vs. AI Beginner Bot games",
        "notes": null
    },
    {
        "queueId": 850,
        "map": "Summoner's Rift",
        "description": "Co-op vs. AI Intermediate Bot games",
        "notes": null
    },
    {
        "queueId": 900,
        "map": "Summoner's Rift",
        "description": "URF games",
        "notes": null
    },
    {
        "queueId": 910,
        "map": "Crystal Scar",
        "description": "Ascension games",
        "notes": null
    },
    {
        "queueId": 920,
        "map": "Howling Abyss",
        "description": "Legend of the Poro King games",
        "notes": null
    },
    {
        "queueId": 940,
        "map": "Summoner's Rift",
        "description": "Nexus Siege games",
        "notes": null
    },
    {
        "queueId": 950,
        "map": "Summoner's Rift",
        "description": "Doom Bots Voting games",
        "notes": null
    },
    {
        "queueId": 960,
        "map": "Summoner's Rift",
        "description": "Doom Bots Standard games",
        "notes": null
    },
    {
        "queueId": 980,
        "map": "Valoran City Park",
        "description": "Star Guardian Invasion: Normal games",
        "notes": null
    },
    {
        "queueId": 990,
        "map": "Valoran City Park",
        "description": "Star Guardian Invasion: Onslaught games",
        "notes": null
    },
    {
        "queueId": 1000,
        "map": "Overcharge",
        "description": "PROJECT: Hunters games",
        "notes": null
    },
    {
        "queueId": 1010,
        "map": "Summoner's Rift",
        "description": "Snow ARURF games",
        "notes": null
    },
    {
        "queueId": 1020,
        "map": "Summoner's Rift",
        "description": "One for All games",
        "notes": null
    },
    {
        "queueId": 1030,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Intro games",
        "notes": null
    },
    {
        "queueId": 1040,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Cadet games",
        "notes": null
    },
    {
        "queueId": 1050,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Crewmember games",
        "notes": null
    },
    {
        "queueId": 1060,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Captain games",
        "notes": null
    },
    {
        "queueId": 1070,
        "map": "Crash Site",
        "description": "Odyssey Extraction: Onslaught games",
        "notes": null
    },
    {
        "queueId": 1090,
        "map": "Convergence",
        "description": "Teamfight Tactics games",
        "notes": null
    },
    {
        "queueId": 1100,
        "map": "Convergence",
        "description": "Ranked Teamfight Tactics games",
        "notes": null
    },
    {
        "queueId": 1110,
        "map": "Convergence",
        "description": "Teamfight Tactics Tutorial games",
        "notes": null
    },
    {
        "queueId": 1200,
        "map": "Nexus Blitz",
        "description": "Nexus Blitz games",
        "notes": "Deprecated in patch 9.2"
    },
    {
        "queueId": 2000,
        "map": "Summoner's Rift",
        "description": "Tutorial 1",
        "notes": null
    },
    {
        "queueId": 2010,
        "map": "Summoner's Rift",
        "description": "Tutorial 2",
        "notes": null
    },
    {
        "queueId": 2020,
        "map": "Summoner's Rift",
        "description": "Tutorial 3",
        "notes": null
    }
]
