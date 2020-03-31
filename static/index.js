const apikey = 'RGAPI-098d1c31-f601-45f7-96f5-20887a7b5255'
document.getElementById('searchbtn').addEventListener('click', () => {
    const options = {
        method: 'GET'
    }
    console.log('hello')
    fetch(`https://oc1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Skillfullism?api_key=${apikey}`, options)
    .then(res => console.log(res.json()))
    
  });