//import summoner from './summoner.js'



const apikey = 'RGAPI-098d1c31-f601-45f7-96f5-20887a7b5255'

const home = document.location.href

document.getElementById('sumbtn').addEventListener('click', () => {
  document.location.href = `/summoner`
  });
document.getElementById('championbtn').addEventListener('click', () => {
  document.location.href = `/champions`
  
  });
document.getElementById('leaderbtn').addEventListener('click', () => {
  document.location.href = `/leaderboard`
  
  });
  

document.getElementById('homebtn').addEventListener('click', () => {
  document.location.href = '/'
  });
