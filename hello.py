from flask import Flask, render_template
import sys
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/champions')
def champion():
    return render_template('champion.html')

@app.route('/summoner')
def summoner():
    return render_template('summoner.html')
@app.route('/leaderboard')
def leaderboard():
    return render_template('leaderboard.html')
@app.route('/livegame')
def livegame():
    return render_template('livegame.html')


if __name__ == '__main__':
    #users.clear()
    #messages.clear()
    #channels.clear()
    app.run(port=(sys.argv[1] if len(sys.argv) > 1 else 5000), debug=True)