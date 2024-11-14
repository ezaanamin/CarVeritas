import pickle
import numpy as np
import pandas as pd
from flask import Flask,jsonify,request 
from flask_cors import CORS 

# print(pipe.predict(test_input2))


app = Flask(__name__)
CORS(app) 
@app.route("/", methods=['POST'])
def hello():
    data = request.get_json()
    print(data)
    values = data.get('values', {})
    company = values.get('company')
    name = values.get('name')
    year = int(values.get('year'))
    kms_driven = float(values.get('kms_driven'))
    fuel_type=values.get(('fuel_type'))
    print(f"Company: {company}, Name: {name}, Year: {year}, Kms Driven: {kms_driven}")
    pipe = pickle.load(open('/home/ezaan-amin/Documents/PortFolio/CarVeritas/backend/model/predict_car_pipeline.pkl','rb'))
    test_input2 = pd.DataFrame([[company, name,year,kms_driven,fuel_type]],columns=['name','company','year','kms_driven','fuel_type'])
    y_pred = pipe.predict(test_input2)
    prediction = float(y_pred[0]) if isinstance(y_pred, (list, np.ndarray)) else float(y_pred)
    return jsonify({'prediction': prediction}), 200

  
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
