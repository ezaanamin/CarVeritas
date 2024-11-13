

# **CarVeritas: Car Price and Performance Prediction**

**CarVeritas** is a comprehensive machine learning project designed to predict car prices and performance based on historical data. This application combines a backend API built with **Flask** and a frontend interface developed with **React.js** and **Redux**. The machine learning model is trained in a Jupyter Notebook and saved as a `.pkl` file for easy deployment and efficient API response times.

## **Project Overview**

The objective of CarVeritas is to create a tool that estimates car prices or other performance metrics by analyzing a dataset with various car attributes. After evaluating different machine learning models, **Random Forest** was chosen as the final model due to its higher accuracy and robustness in handling complex data.

## **Technologies Used**

### **Frontend**
- **React.js**: For building dynamic, interactive UI components.
- **Redux**: For efficient state management across the application.

### **Backend**
- **Flask**: Serves as the API layer to handle requests and serve model predictions.

### **Machine Learning**
- **Python**: Core language for data processing and model training.
- **Pandas**: Facilitates data manipulation and preprocessing.
- **Scikit-learn**: Provides tools for building and evaluating machine learning models.
- **Matplotlib/Seaborn**: Used for data visualization and exploratory data analysis (EDA).
- **Jupyter Notebook**: A versatile tool for development, analysis, and model training.

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
    └── car_data.csv  # Data file or include dataset details in README if unavailable
```

- **model_training.ipynb**: Contains the entire data preprocessing, model training, and evaluation pipeline.
- **car_price_model.pkl**: The trained Random Forest model saved as a `.pkl` file for use with Flask.

## **Model Comparison**

The following models were evaluated, with Random Forest selected due to its superior performance:

| Model               | Accuracy  |
|---------------------|-----------|
| Linear Regression   | 0.76      |
| Random Forest       | 0.80      |

The **Random Forest** model achieved a higher accuracy of **0.80**, making it the final choice for deployment.

## **Dataset Description**

The dataset contains various features of used cars, including:

- **Company**: The brand or manufacturer of the car (e.g., Hyundai, Toyota).
- **Year**: The manufacturing year of the car.
- **Price**: The price of the car (target variable).
- **Kms Driven**: The total kilometers the car has been driven, representing usage.
- **Fuel Type**: The type of fuel used (e.g., Petrol, Diesel).

## **Key Features of the Project**

1. **Data Preprocessing**: Steps include handling missing values, encoding categorical features, and scaling numerical data.
2. **Exploratory Data Analysis (EDA)**: Identifies patterns and relationships in the dataset through visualizations.
3. **Model Evaluation**: Compares model accuracy and selects the best-performing algorithm.
4. **Random Forest Model**: Chosen for deployment based on its robustness and high accuracy.

## **Installation**

To run CarVeritas locally, follow these instructions:

1. Clone the repository:
   ```bash
   git clone https://github.com/ezaanamin/CarVeritas.git
   cd CarVeritas
   ```

2. Install the backend dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Start the backend Flask server:
   ```bash
   python backend/app.py
   ```

5. Start the frontend React server:
   ```bash
   cd frontend
   npm start
   ```

6. Open a browser and go to `http://localhost:3000` to interact with the app.

## **Usage**

1. **Data Loading**: The Flask API manages data loading and preprocessing for prediction.
2. **Model Training**: Model training steps are outlined in `model/model_training.ipynb`, which includes data processing, model training, and evaluation.
3. **Making Predictions**: The trained model (`car_price_model.pkl`) is loaded in the Flask API, which serves predictions based on user input.
4. **User Interface**: The React app provides an interactive interface where users can enter car details and receive price predictions.
5. **State Management**: Redux synchronizes the frontend state with the backend and user interactions.

## **Evaluation Metrics**

- **Linear Regression Accuracy**: 0.76
- **Random Forest Accuracy**: 0.80

Additional metrics such as **precision**, **recall**, and **F1-score** are also available for a more detailed evaluation of model performance.

## **Future Enhancements**

- **UI Improvements**: Enhance the frontend with additional interactive features.
- **Advanced Models**: Experiment with more complex algorithms like **Gradient Boosting** or **XGBoost** for potential accuracy improvements.
- **Docker Support**: Dockerize the application for easier deployment and scaling.

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


