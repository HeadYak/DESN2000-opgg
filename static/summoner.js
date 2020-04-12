
export default summoner
const apikey = 'RGAPI-098d1c31-f601-45f7-96f5-20887a7b5255'

let summonerimg = document.createElement('img')
document.getElementById('searchbtn').addEventListener('click', () => {
    if ( document.getElementById('search').value == '') {
      window.alert('Please enter summoner name')
    }
    else {
      summoner(apikey, summonerimg)
    }
});
function summoner(apikey, summonerimg) {
    
    let content = document.getElementById('content')
    
    var ranked = {
        'RANKED_SOLO_5x5':'Ranked Solo'
    }
    const options = {
        method: 'GET'
    }
    const summoner = document.getElementById('search').value 
    
    document.getElementById('search').value = ''
    //console.log('hello')
    fetch(`https://cors-anywhere.herokuapp.com/https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apikey}`, options)
    .then(res => (res.json()))
    .then(data => {
        let summonername = document.getElementById('summonername')
        summonername.innerText = data.name + ' ' + 'Level: ' + data.summonerLevel
        content.insertBefore(summonerimg, content.children[1])
        let acctid = data.accountId
        if (summonerimg == null) {
            alert(null)
        }
        summonerimg.src = `https://opgg-static.akamaized.net/images/profile_icons/profileIcon${data.profileIconId}.jpg?image=q_auto&v=1518361200`
        let summonerid = data.id
        fetch(`https://cors-anywhere.herokuapp.com/https://oc1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerid}?api_key=${apikey}`)
        .then(res => (res.json()))
        .then(league => {
            //console.log(league)
            let queue = document.getElementById('queue')
            queue.innerText = ranked[league[0].queueType] 
            document.getElementById('rank').innerText =  league[0].tier + ' ' + league[0].rank + ' ' + league[0].leaguePoints + ' LP'
            document.getElementById('WL').innerText = 'Wins: ' + league[0].wins + ' Losses: ' + league[0].losses 
 
        })
        fetch(`https://cors-anywhere.herokuapp.com/https://oc1.api.riotgames.com/lol/match/v4/matchlists/by-account/${acctid}?endIndex=5&beginIndex=0&api_key=${apikey}`)
        .then(res => res.json())
        .then(matchhist => {
            for (const match of matchhist['matches']) {
                fetch(`https://cors-anywhere.herokuapp.com/https://oc1.api.riotgames.com/lol/match/v4/matches/${match['gameId']}?api_key=${apikey}`)
                .then( res => res.json())
                .then(matchinfo => {
                    let x = document.getElementById("matchhist")
                    var row = x.insertRow(-1)
                    var time = row.insertCell(0)
                    var mode = row.insertCell(-1)
                    var pr = row.insertCell(-1)
                    const date = new Date(parseInt(matchinfo['gameCreation']))
                    const year = date.getFullYear();
                    const month = date.getMonth();
                    const day = date.getDate();
                    const hour = date.getHours()
                    const minute =  "0" + date.getMinutes()
                    let timestamp = year + "-" + month + "-" + day + " " + hour + ":" + minute.substr(-2)
                    time.innerText = timestamp 
                    
                    console.log(matchinfo)
                })
            }
        })
    })
}