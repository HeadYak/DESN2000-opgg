import summoner from './summoner.js';



const apikey = 'RGAPI-098d1c31-f601-45f7-96f5-20887a7b5255'
document.getElementById('searchbtn').addEventListener('click', () => {
    summoner(apikey)
    
  });