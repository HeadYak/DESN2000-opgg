export default summoner
function summoner(apikey) {
    const options = {
        method: 'GET'
    }
    const summoner = document.getElementById('search').value 
    
    document.getElementById('search').value = ''
    console.log('hello')
    fetch(`https://cors-anywhere.herokuapp.com/https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=${apikey}`, options)
    .then(res => (res.json()))
    .then(data => {
        let summonername = document.getElementById('summonername')
        summonername.innerHTML = data.name + ' ' + 'Level: ' + data.summonerLevel
        let summonerimg = document.createElement('img')
        document.getElementById('content').append(summonerimg)
        summonerimg.src = `https://ddragon.leagueoflegends.com/cdn/9.2.1/img/profileicon/${data.profileIconId}.png`
    })
}