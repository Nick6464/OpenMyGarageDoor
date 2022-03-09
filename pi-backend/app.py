from flask import Flask
from random import seed
from random import random


app = Flask(__name__)


@app.route("/openDoor")
def openDoor():
    return randomBool()


@app.route("/closeDoor")
def closeDoor():
    return randomBool()


@app.route("/position")
def position():
    status = int(random() * 100)
    return status


# Utility Functions
def randomBool():
    rand = round(random(), 0)
    if rand == 1:
        return True
    else:
        return False


if __name__ == "__main__":
    app.run()
