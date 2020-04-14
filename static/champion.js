

import myArr from './championdata.js'
import champdata from './champlist.js'
var listc =  ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Senna", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"]   
window.onload = showtable
// Creating the champion table contents 
function showtable(){
    let x = document.getElementById("champlist")
    // Populating the WR, PR and champ name in each row
    for (var champion of listc) {
        var row = x.insertRow(-1)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(-1)
        var wr = row.insertCell(-1)
        var pr = row.insertCell(-1)
        // Putting in champion portrait (the way the url works is a bit stupid so i have to wrok around it)
        var champion1 = champion
        // Special cases (MonkeyKing, KogMaw, RekSai, Leblanc, Nunu)
        if(champion == "Wukong") {
            champion1 = "MonkeyKing"
        }
        if(champion == "Kog'Maw") {
            champion1 = "KogMaw"
        }
        if(champion == "Rek'Sai") {
            champion1 = "RekSai"
        }
        if(champion == "LeBlanc") {
            champion1 = "Leblanc"
        }
        if(champion == "Nunu & Willump") {
            champion1 = "Nunu"
        }
        // if the champion name has a "'" in it (ie for void champions)
        if(champion1.indexOf('\'') >= 0) {
            champion1 = champion1.replace("\'", '')
            champion1 = champion1.charAt(0).toUpperCase() + champion1.slice(1).toLowerCase();
        }
        // If champion has a space in it (theres a dumb case for drmundo)
        if(champion1.indexOf(' ') >= 0) {
            champion1 = champion1.replace(" ", '')
            champion1 = champion1.replace(".", '')
        }
        var img = document.createElement('img')
        img.src = "http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/" + champion1 + ".png"
        img.height = 35;
        img.width = 35;
        cell2.appendChild(img)
        // Putting in champion name 
        var text = document.createTextNode(champion)
        cell1.append(text)
        // Putting in WR and PR for the champion
        for (var champ  of champdata) {
            
            if (champ['champion'] == champion) {
                
                wr.innerHTML = champ['wr']
                pr.innerHTML = champ['pr']
                break;
            }           
        }
        row.id = champion
        row.className = 'champs'
    }
    // Creates a modal window for each champion
    for (var champion of listc) {
        let champrow = document.getElementById(champion)
        champrow.addEventListener('click', () => {
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            modal.style.display = "block";
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                  modal.style.display = "none";
                }
            }
            
        });
    }
    // fills out the modal window
    var last = ''
    document.querySelectorAll('.champs').forEach(item => {
        item.addEventListener('click', () => {
            var name = document.getElementById('champname')
            
            name.innerText = item.id
            if (name.innerText == 'undefined'){
                name.innerText = last
            }
            
            last = name.innerText
            for (item of myArr) {
                if (item['champion'] == name.innerText) {
                    document.getElementById('spell1').src = item['spell1']
                    document.getElementById('spell2').src = item['spell2']
                    document.getElementById('spellwr').innerText = item['spellwr']
                    document.getElementById('spellpr').innerText = item['spellpr']
                    document.getElementById('start1').src = item['strtitem1']
                    document.getElementById('start2').src = item['strtitem2']
                    document.getElementById('starter itemspr').innerText = item['strtpr']
                    document.getElementById('starter itemswr').innerText = item['strtwr']
                    document.getElementById('corbuild1').src = item['corbuild1']
                    document.getElementById('corbuild2').src = item['corbuild2']
                    document.getElementById('corbuild3').src = item['corbuild3']
                    document.getElementById('corbldpr').innerText = item['corbldpr']
                    document.getElementById('corbldwr').innerText = item['corbldwr']
                    document.getElementById('keystone').src = item['keystone']
                    document.getElementById('prim1').src = item['prim1']
                    document.getElementById('prim2').src = item['prim2']
                    document.getElementById('prim3').src = item['prim3']
                    document.getElementById('sec1').src = item['sec1']
                    document.getElementById('sec2').src = item['sec2']
                    document.getElementById('runepr').innerText = item['runewr']
                    document.getElementById('runewr').innerText = item['runepr']
                
                }
            }
        })          
    })
   
}


