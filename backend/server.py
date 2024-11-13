import pickle
import numpy as np
import pandas as pd
# from flask import Flask

pipe = pickle.load(open('/home/ezaan-amin/Documents/PortFolio/CarVeritas/backend/model/predict_car_pipeline.pkl','rb'))

test_input2 = pd.DataFrame([["Hyundai Santro Xing", 'Hyundai',2007,45000.0 ,"Petrol"]],columns=['name','company','year','kms_driven','fuel_type'])
print(pipe.predict(test_input2))
# app = Flask(__name__)

# @app.route("/")
# def hello():
#     return "<h1 style='color:blue'>Hello There!</h1>"

# if __name__ == "__main__":
#     app.run(host='0.0.0.0')
