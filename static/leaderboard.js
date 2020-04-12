import leaderb from './leaderdata.js'
let x = document.getElementById("playerlist")
    let i = 1
    for (var summoner of leaderb) {
        
        var row = x.insertRow(-1)
        var cell1 = row.insertCell(0)
        var player = row.insertCell(-1)
        var rank = row.insertCell(-1)
        var lp = row.insertCell(-1)
        var wins = row.insertCell(-1)
        var losses = row.insertCell(-1)
        var winrate = row.insertCell(-1)
        cell1.innerHTML = i
        player.innerText = summoner['player']
        rank.innerText = summoner['rank']
        lp.innerText = summoner['lp']
        wins.innerText = summoner['wins']
        losses.innerText = summoner['losses']
        winrate.innerText =( Number(summoner['wins'] )/ (Number(summoner['wins']) + Number(summoner['losses']))  * 100).toFixed(2) + '%'
        
        
        i += 1
    }