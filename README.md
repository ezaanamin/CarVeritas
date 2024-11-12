# **CarVeritas: Car Price and Performance Prediction**

**CarVeritas** is a full-stack machine learning project that predicts car prices and performance based on historical data. This project includes a backend built with **Flask** to serve the model’s predictions via an API and a frontend created with **React.js** and **Redux** to provide a user-friendly interface. The machine learning model was developed and trained in a Jupyter Notebook and saved as a `.pkl` file for deployment.

## **Project Overview**

This project aims to predict car prices (or other performance metrics) by training machine learning models on a dataset consisting of various car attributes. After comparing different models, **Random Forest** was selected as the final model due to its accuracy and robustness.

## **Technologies Used**

### **Frontend**
- **React.js**: For building the user interface.
- **Redux**: For managing application state.

### **Backend**
- **Flask**: For handling API requests and serving model predictions.

### **Machine Learning**
- **Python**: For data analysis and model building.
- **Pandas**: For data manipulation.
- **Scikit-learn**: For machine learning models and evaluation.
- **Matplotlib/Seaborn**: For data visualization.
- **Jupyter Notebook**: For development, analysis, and model training.

## **Repository Structure**

The repository is organized as follows:

```plaintext
CarVeritas
│
├── README.md
│
├── frontend
│   └── (React app files)
│
├── backend
│   └── (Flask app files)
│
├── model
│   ├── model_training.ipynb  # Jupyter Notebook with training steps
│   └── saved_models
│       └── car_price_model.pkl  # Pickled final model
│
└── dataset
    └── car_data.csv  # or include dataset description in README if not public
```

- **model_training.ipynb**: Contains data preprocessing, model training, evaluation, and selection steps. This notebook shows the entire process used to build the model, demonstrating that it was developed from scratch.
- **car_price_model.pkl**: The trained Random Forest model saved as a pickle file for efficient deployment with Flask.

## **Model Comparison**

| Model                 | Accuracy  |
|-----------------------|-----------|
| Logistic Regression (LR) | 0.76      |
| Random Forest (RF)      | 0.80      |

The **Random Forest** model was chosen as the final model due to its higher accuracy of **0.80**.

## **Dataset Description**

The dataset used in this project consists of various attributes related to used cars. Key features include:

- **Company**: The manufacturer or brand of the car (e.g., Hyundai, Mahindra, Maruti).
- **Year**: The manufacturing year of the car.
- **Price**: The price of the car (target variable).
- **kms_driven**: Total kilometers driven, indicating usage.
- **Fuel Type**: Type of fuel used (e.g., Petrol, Diesel).

## **Key Features**

- **Data Preprocessing**: Handling missing values, feature encoding, and scaling.
- **Exploratory Data Analysis (EDA)**: Visualizing car attributes and identifying patterns.
- **Model Evaluation**: Comparing multiple algorithms and selecting the best-performing model.
- **Random Forest Model**: The final model chosen for its accuracy and reliability.

## **Installation**

To set up the project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ezaanamin/CarVeritas.git
   cd CarVeritas
   ```

2. Install the necessary dependencies:
   ```bash
   pip install -r requirements.txt  # for backend
   cd frontend && npm install       # for frontend
   ```

3. Start the backend Flask server:
   ```bash
   python app.py
   ```

4. Start the frontend React server:
   ```bash
   cd frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the app.

## **Usage**

1. **Load the Data**: The backend Flask API handles data loading and preprocessing.
2. **Train the Model**: Model training is detailed in `model/model_training.ipynb`. This notebook shows data loading, preprocessing, model training, and selection.
3. **Use the Model in App**: The trained model (`car_price_model.pkl`) is loaded in the Flask app to provide predictions based on user input from the frontend.
4. **User Interface**: The React app lets users input car attributes and receive price predictions in real-time.
5. **State Management**: Redux keeps frontend state synchronized with backend data and user interactions.

## **Evaluation Metrics**

- **Logistic Regression Accuracy**: 0.76
- **Random Forest Accuracy**: 0.80

Other metrics, like **precision**, **recall**, and **F1-score**, can be computed for further evaluation.

## **Future Work**

- **UI Enhancements**: Add more interactive features to the frontend.
- **Model Improvements**: Experiment with advanced algorithms like **Gradient Boosting** or **XGBoost** for better accuracy.
- **Dockerize the Application**: For easier deployment and scalability.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


