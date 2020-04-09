# -*- coding: utf-8 -*-
import scrapy
from scrapy import Request

from ..items import Game
from ..constants import XPATHS_LADDER, XPATHS_GAME
class OpggChampSpider(scrapy.Spider):
    name = "champions"
    start_urls = [
        'https://oce.op.gg/champion/statistics',
        
    ]
    
    def parse(self, response):
        for champion in response.css('div.champion-index__champion-list'):
            yield {
                'champion': champion.css('div.champion-index__champion-item__name::text').getall(),
                
            }
           