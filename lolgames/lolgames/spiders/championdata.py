# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request

from ..items import Game
from ..constants import XPATHS_LADDER, XPATHS_GAME
class OpggChampSpider(scrapy.Spider):
    name = "championdata"
    champions = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "AurelionSol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Sejuani", "Senna", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "TwistedFate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"]
    start_urls = [
        'https://oce.op.gg/champion/' + champion + '/statistics' for champion in champions
        
    ]
   
    
    def parse(self, response):
       
            yield {
                'champion': response.css('h1.champion-stats-header-info__name::text').get(),
                'spell1': response.css('li.champion-stats__list__item img::attr(src)').get(),
                'spell2': response.css('li.champion-stats__list__item img::attr(src)')[1].get(),
                'strtitem1': response.css('img[src*=item]::attr(src)').get(),
                'strtitem2': response.css('img[src*=item]::attr(src)')[1].get()
                
                

                
            }
            