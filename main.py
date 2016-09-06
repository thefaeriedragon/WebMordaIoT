from flask import Flask, jsonify
from flask import render_template
from flask import send_from_directory

app = Flask(__name__)


# app.static_folder="/home/denisr/PycharProjects/WebMorda/static/"

@app.route('/')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('index.html', name=name)


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)


@app.route('/getData/<chart>')
def send_data(chart="chartX"):
    return jsonify({chart: "hello"})
