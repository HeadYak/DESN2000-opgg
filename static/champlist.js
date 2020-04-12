const champdata = [
    {"champion": "Maokai", "wr": "52.49%", "pr": "10.08%"},
    {"champion": "Darius", "wr": "50.58%", "pr": "8.70%"},
    {"champion": "Wukong", "wr": "51.53%", "pr": "5.09%"},
    {"champion": "Garen", "wr": "50.73%", "pr": "8.13%"},
    {"champion": "Fiora", "wr": "50.90%", "pr": "6.57%"},
    {"champion": "Mordekaiser", "wr": "49.91%", "pr": "10.85%"},
    {"champion": "Sett", "wr": "49.89%", "pr": "10.09%"},
    {"champion": "Renekton", "wr": "49.71%", "pr": "12.05%"},
    {"champion": "Vladimir", "wr": "50.75%", "pr": "4.90%"},
    {"champion": "Kled", "wr": "51.52%", "pr": "3.47%"},
    {"champion": "Olaf", "wr": "52.80%", "pr": "1.14%"},
    {"champion": "Aatrox", "wr": "49.18%", "pr": "13.13%"},
    {"champion": "Poppy", "wr": "51.26%", "pr": "3.82%"},
    {"champion": "Ornn", "wr": "49.50%", "pr": "8.56%"},
    {"champion": "Jax", "wr": "50.09%", "pr": "6.11%"},
    {"champion": "Nasus", "wr": "51.08%", "pr": "3.62%"},
    {"champion": "Volibear", "wr": "52.18%", "pr": "2.31%"},
    {"champion": "Teemo", "wr": "51.25%", "pr": "2.12%"},
    {"champion": "Rengar", "wr": "51.25%", "pr": "2.40%"},
    {"champion": "Gangplank", "wr": "50.02%", "pr": "3.50%"},
    {"champion": "Pantheon", "wr": "50.63%", "pr": "1.49%"},
    {"champion": "Singed", "wr": "51.47%", "pr": "1.98%"},
    {"champion": "Illaoi", "wr": "50.16%", "pr": "2.28%"},
    {"champion": "Shyvana", "wr": "50.92%", "pr": "1.58%"},
    {"champion": "Shen", "wr": "50.86%", "pr": "3.24%"},
    {"champion": "Riven", "wr": "51.50%", "pr": "2.25%"},
    {"champion": "Irelia", "wr": "47.32%", "pr": "8.78%"},
    {"champion": "Sylas", "wr": "47.94%", "pr": "5.58%"},
    {"champion": "Kayle", "wr": "50.50%", "pr": "2.14%"},
    {"champion": "Hecarim", "wr": "52.27%", "pr": "0.93%"},
    {"champion": "Quinn", "wr": "50.08%", "pr": "1.05%"},
    {"champion": "Sion", "wr": "52.46%", "pr": "0.93%"},
    {"champion": "Camille", "wr": "50.33%", "pr": "2.44%"},
    {"champion": "Zac", "wr": "49.07%", "pr": "1.28%"},
    {"champion": "Malphite", "wr": "48.98%", "pr": "3.23%"},
    {"champion": "Heimerdinger", "wr": "50.65%", "pr": "0.86%"},
    {"champion": "Tryndamere", "wr": "49.38%", "pr": "1.88%"},
    {"champion": "Vayne", "wr": "48.80%", "pr": "1.84%"},
    {"champion": "Yasuo", "wr": "47.66%", "pr": "1.47%"},
    {"champion": "Akali", "wr": "46.81%", "pr": "4.15%"},
    {"champion": "Jayce", "wr": "48.40%", "pr": "2.77%"},
    {"champion": "Yorick", "wr": "49.61%", "pr": "1.07%"},
    {"champion": "Rumble", "wr": "49.19%", "pr": "1.40%"},
    {"champion": "Kennen", "wr": "48.55%", "pr": "1.54%"},
    {"champion": "Lucian", "wr": "48.48%", "pr": "1.96%"},
    {"champion": "Cho'Gath", "wr": "50.85%", "pr": "0.63%"},
    {"champion": "Trundle", "wr": "50.18%", "pr": "0.54%"},
    {"champion": "Gnar", "wr": "48.74%", "pr": "1.06%"},
    {"champion": "Dr. Mundo", "wr": "49.10%", "pr": "0.82%"},
    {"champion": "Urgot", "wr": "47.80%", "pr": "0.97%"},
    {"champion": "Ryze", "wr": "45.68%", "pr": "1.06%"},
    {"champion": "Kalista", "wr": "45.02%", "pr": "0.99%"},
    {"champion": "Elise", "wr": "50.91%", "pr": "14.38%"},
    {"champion": "Zac", "wr": "51.43%", "pr": "10.45%"},
    {"champion": "Wukong", "wr": "52.45%", "pr": "5.10%"},
    {"champion": "Graves", "wr": "51.48%", "pr": "12.59%"},
    {"champion": "Karthus", "wr": "52.56%", "pr": "4.40%"},
    {"champion": "Shyvana", "wr": "52.48%", "pr": "6.04%"},
    {"champion": "Ekko", "wr": "50.75%", "pr": "12.20%"},
    {"champion": "Rek'Sai", "wr": "50.57%", "pr": "8.47%"},
    {"champion": "Lee Sin", "wr": "48.37%", "pr": "30.34%"},
    {"champion": "Olaf", "wr": "51.37%", "pr": "4.69%"},
    {"champion": "Shaco", "wr": "51.68%", "pr": "3.36%"},
    {"champion": "Master Yi", "wr": "50.60%", "pr": "4.13%"},
    {"champion": "Jarvan IV", "wr": "49.02%", "pr": "16.06%"},
    {"champion": "Warwick", "wr": "52.01%", "pr": "2.60%"},
    {"champion": "Rammus", "wr": "50.59%", "pr": "2.91%"},
    {"champion": "Nunu & Willump", "wr": "51.45%", "pr": "2.90%"},
    {"champion": "Kindred", "wr": "50.93%", "pr": "2.85%"},
    {"champion": "Fiddlesticks", "wr": "48.84%", "pr": "3.39%"},
    {"champion": "Nidalee", "wr": "48.80%", "pr": "6.47%"},
    {"champion": "Rengar", "wr": "52.62%", "pr": "0.79%"},
    {"champion": "Xin Zhao", "wr": "50.41%", "pr": "3.19%"},
    {"champion": "Ivern", "wr": "51.87%", "pr": "1.03%"},
    {"champion": "Evelynn", "wr": "49.32%", "pr": "2.47%"},
    {"champion": "Trundle", "wr": "50.42%", "pr": "2.96%"},
    {"champion": "Poppy", "wr": "50.47%", "pr": "1.51%"},
    {"champion": "Hecarim", "wr": "50.65%", "pr": "1.94%"},
    {"champion": "Jax", "wr": "50.22%", "pr": "1.43%"},
    {"champion": "Gragas", "wr": "48.24%", "pr": "5.39%"},
    {"champion": "Dr. Mundo", "wr": "51.37%", "pr": "0.77%"},
    {"champion": "Volibear", "wr": "50.85%", "pr": "0.70%"},
    {"champion": "Kayn", "wr": "48.58%", "pr": "3.07%"},
    {"champion": "Sejuani", "wr": "48.58%", "pr": "3.15%"},
    {"champion": "Kha'Zix", "wr": "49.35%", "pr": "1.89%"},
    {"champion": "Taliyah", "wr": "49.41%", "pr": "1.44%"},
    {"champion": "Amumu", "wr": "49.52%", "pr": "1.68%"},
    {"champion": "Sylas", "wr": "46.19%", "pr": "3.25%"},
    {"champion": "Vi", "wr": "49.46%", "pr": "1.62%"},
    {"champion": "Nocturne", "wr": "47.05%", "pr": "1.61%"},
    {"champion": "Talon", "wr": "53.14%", "pr": "4.98%"},
    {"champion": "Fizz", "wr": "51.91%", "pr": "6.53%"},
    {"champion": "Galio", "wr": "52.32%", "pr": "8.57%"},
    {"champion": "Cassiopeia", "wr": "52.80%", "pr": "4.46%"},
    {"champion": "Katarina", "wr": "51.75%", "pr": "7.36%"},
    {"champion": "Kassadin", "wr": "51.71%", "pr": "5.50%"},
    {"champion": "Diana", "wr": "51.56%", "pr": "6.88%"},
    {"champion": "Ekko", "wr": "51.67%", "pr": "5.00%"},
    {"champion": "Nocturne", "wr": "52.26%", "pr": "3.33%"},
    {"champion": "Pantheon", "wr": "50.29%", "pr": "7.43%"},
    {"champion": "Zoe", "wr": "50.27%", "pr": "7.30%"},
    {"champion": "Yasuo", "wr": "49.26%", "pr": "8.89%"},
    {"champion": "Vladimir", "wr": "51.10%", "pr": "4.67%"},
    {"champion": "Pyke", "wr": "52.65%", "pr": "1.15%"},
    {"champion": "Ahri", "wr": "50.98%", "pr": "5.41%"},
    {"champion": "Garen", "wr": "51.55%", "pr": "1.64%"},
    {"champion": "Twisted Fate", "wr": "50.06%", "pr": "7.35%"},
    {"champion": "Zed", "wr": "49.28%", "pr": "6.40%"},
    {"champion": "Malzahar", "wr": "51.17%", "pr": "2.20%"},
    {"champion": "Sylas", "wr": "47.90%", "pr": "11.40%"},
    {"champion": "LeBlanc", "wr": "47.62%", "pr": "9.97%"},
    {"champion": "Kled", "wr": "52.22%", "pr": "1.09%"},
    {"champion": "Renekton", "wr": "51.07%", "pr": "1.79%"},
    {"champion": "Syndra", "wr": "49.61%", "pr": "5.51%"},
    {"champion": "Aurelion Sol", "wr": "53.15%", "pr": "1.08%"},
    {"champion": "Qiyana", "wr": "49.74%", "pr": "3.24%"},
    {"champion": "Mordekaiser", "wr": "51.37%", "pr": "1.07%"},
    {"champion": "Aatrox", "wr": "50.83%", "pr": "1.69%"},
    {"champion": "Anivia", "wr": "50.02%", "pr": "2.61%"},
    {"champion": "Annie", "wr": "53.04%", "pr": "0.62%"},
    {"champion": "Neeko", "wr": "51.97%", "pr": "0.98%"},
    {"champion": "Rumble", "wr": "49.71%", "pr": "2.98%"},
    {"champion": "Zilean", "wr": "50.80%", "pr": "1.04%"},
    {"champion": "Camille", "wr": "52.66%", "pr": "0.70%"},
    {"champion": "Jayce", "wr": "50.03%", "pr": "1.39%"},
    {"champion": "Orianna", "wr": "48.26%", "pr": "3.52%"},
    {"champion": "Xerath", "wr": "49.06%", "pr": "1.85%"},
    {"champion": "Malphite", "wr": "50.48%", "pr": "0.73%"},
    {"champion": "Ornn", "wr": "49.28%", "pr": "1.02%"},
    {"champion": "Cho'Gath", "wr": "50.85%", "pr": "0.88%"},
    {"champion": "Veigar", "wr": "50.08%", "pr": "1.12%"},
    {"champion": "Ryze", "wr": "48.00%", "pr": "2.14%"},
    {"champion": "Viktor", "wr": "49.01%", "pr": "1.66%"},
    {"champion": "Lucian", "wr": "46.96%", "pr": "3.76%"},
    {"champion": "Irelia", "wr": "44.95%", "pr": "6.00%"},
    {"champion": "Akali", "wr": "45.45%", "pr": "4.54%"},
    {"champion": "Lissandra", "wr": "47.55%", "pr": "1.68%"},
    {"champion": "Vel'Koz", "wr": "49.26%", "pr": "0.64%"},
    {"champion": "Azir", "wr": "46.32%", "pr": "2.55%"},
    {"champion": "Corki", "wr": "47.35%", "pr": "1.08%"},
    {"champion": "Lux", "wr": "47.06%", "pr": "0.90%"},
    {"champion": "Ziggs", "wr": "46.75%", "pr": "0.66%"},
    {"champion": "Miss Fortune", "wr": "52.31%", "pr": "20.47%"},
    {"champion": "Ezreal", "wr": "50.62%", "pr": "36.31%"},
    {"champion": "Varus", "wr": "50.26%", "pr": "18.26%"},
    {"champion": "Aphelios", "wr": "49.42%", "pr": "14.41%"},
    {"champion": "Cassiopeia", "wr": "54.29%", "pr": "1.29%"},
    {"champion": "Vayne", "wr": "50.60%", "pr": "9.21%"},
    {"champion": "Caitlyn", "wr": "50.46%", "pr": "11.06%"},
    {"champion": "Kalista", "wr": "49.64%", "pr": "11.91%"},
    {"champion": "Ashe", "wr": "51.20%", "pr": "8.58%"},
    {"champion": "Yasuo", "wr": "50.60%", "pr": "1.87%"},
    {"champion": "Lucian", "wr": "48.41%", "pr": "15.33%"},
    {"champion": "Draven", "wr": "51.07%", "pr": "2.05%"},
    {"champion": "Heimerdinger", "wr": "53.05%", "pr": "0.50%"},
    {"champion": "Kai'Sa", "wr": "47.27%", "pr": "23.93%"},
    {"champion": "Jinx", "wr": "50.29%", "pr": "5.49%"},
    {"champion": "Jhin", "wr": "50.25%", "pr": "5.61%"},
    {"champion": "Tahm Kench", "wr": "51.75%", "pr": "0.68%"},
    {"champion": "Sivir", "wr": "50.54%", "pr": "1.99%"},
    {"champion": "Kog'Maw", "wr": "51.30%", "pr": "0.76%"},
    {"champion": "Twitch", "wr": "50.48%", "pr": "1.03%"},
    {"champion": "Kindred", "wr": "50.55%", "pr": "0.61%"},
    {"champion": "Xayah", "wr": "46.98%", "pr": "2.73%"},
    {"champion": "Tristana", "wr": "47.11%", "pr": "1.76%"},
    {"champion": "Bard", "wr": "54.52%", "pr": "7.85%"},
    {"champion": "Blitzcrank", "wr": "50.89%", "pr": "12.36%"},
    {"champion": "Senna", "wr": "50.96%", "pr": "12.71%"},
    {"champion": "Leona", "wr": "50.87%", "pr": "10.67%"},
    {"champion": "Zilean", "wr": "52.82%", "pr": "6.48%"},
    {"champion": "Taric", "wr": "52.52%", "pr": "4.84%"},
    {"champion": "Thresh", "wr": "49.12%", "pr": "24.21%"},
    {"champion": "Shaco", "wr": "52.58%", "pr": "2.06%"},
    {"champion": "Maokai", "wr": "52.79%", "pr": "3.06%"},
    {"champion": "Morgana", "wr": "49.23%", "pr": "7.91%"},
    {"champion": "Nautilus", "wr": "48.72%", "pr": "11.45%"},
    {"champion": "Lulu", "wr": "51.40%", "pr": "6.36%"},
    {"champion": "Sona", "wr": "54.05%", "pr": "1.89%"},
    {"champion": "Galio", "wr": "52.46%", "pr": "1.86%"},
    {"champion": "Janna", "wr": "52.12%", "pr": "4.38%"},
    {"champion": "Nami", "wr": "51.71%", "pr": "4.93%"},
    {"champion": "Pyke", "wr": "48.34%", "pr": "9.93%"},
    {"champion": "Yuumi", "wr": "48.93%", "pr": "8.47%"},
    {"champion": "Sett", "wr": "48.04%", "pr": "8.62%"},
    {"champion": "Zyra", "wr": "51.57%", "pr": "2.06%"},
    {"champion": "Alistar", "wr": "49.90%", "pr": "4.80%"},
    {"champion": "Karma", "wr": "49.08%", "pr": "6.27%"},
    {"champion": "Vel'Koz", "wr": "50.60%", "pr": "1.80%"},
    {"champion": "Xerath", "wr": "48.66%", "pr": "3.85%"},
    {"champion": "Braum", "wr": "49.31%", "pr": "3.54%"},
    {"champion": "Rakan", "wr": "49.49%", "pr": "2.97%"},
    {"champion": "Soraka", "wr": "48.95%", "pr": "3.00%"},
    {"champion": "Swain", "wr": "48.68%", "pr": "2.21%"},
    {"champion": "Brand", "wr": "49.74%", "pr": "1.62%"},
    {"champion": "Pantheon", "wr": "48.30%", "pr": "0.79%"},
    {"champion": "Lux", "wr": "48.10%", "pr": "3.19%"},
    {"champion": "Fiddlesticks", "wr": "45.90%", "pr": "2.38%"},
    {"champion": "Neeko", "wr": "49.78%", "pr": "0.58%"},
    {"champion": "Volibear", "wr": "47.78%", "pr": "1.09%"},
    {"champion": "Tahm Kench", "wr": "46.56%", "pr": "1.09%"},
    {"champion": "Poppy", "wr": "47.50%", "pr": "0.67%"},
    {"champion": "Veigar", "wr": "48.60%", "pr": "0.55%"},
    {"champion": "Shen", "wr": "46.96%", "pr": "0.85%"},
    {"champion": "Malphite", "wr": "46.69%", "pr": "0.50%"},
    {"champion": "Rumble", "wr": "46.42%", "pr": "0.51%"}
    ]
    export default champdata