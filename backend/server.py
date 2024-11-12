import pickle
import numpy as np
from flask import Flask

# pipe = pickle.load(open('/home/ezaan-amin/Documents/PortFolio/Car Predictor/backend/predict_car_pipeline.pkl','rb'))

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Hello There!</h1>"

if __name__ == "__main__":
    app.run(host='0.0.0.0')
