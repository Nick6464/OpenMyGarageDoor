import json
from flask import Flask, make_response, jsonify
from random import seed
from random import random


app = Flask(__name__)


@app.route("/openDoor")
def openDoor():
    print("/openDoor Started")
    return make_response(jsonify({"complete": randomBool()}))


@app.route("/closeDoor")
def closeDoor():
    print("/closeDoor Started")
    return make_response(jsonify({"complete": randomBool()}))


@app.route("/position")
def position():
    print("/postion Started")
    status = int(random() * 100)
    print(status)
    return make_response(jsonify({"position": status}))


# Utility Functions
def randomBool():
    rand = round(random(), 0)
    if rand == 1:
        return True
    else:
        return False


if __name__ == "__main__":
    app.run()
