const linearRegression = [
    {
      title: "1. Import Libraries",
      code: `import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression`,
      explanation: "We import NumPy, Matplotlib, and Scikit-learn's Linear Regression model."
    },
    {
      title: "2. Create Dataset",
      code: `X = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 5, 4, 5])\nplt.scatter(X, y)\nplt.title("Original Data")\nplt.show()`,
      explanation: "We create a simple dataset and visualize the relationship between X and y.",
      showPlot: true
    },
    {
      title: "3. Train Model",
      code: `model = LinearRegression()\nmodel.fit(X, y)`,
      explanation: "We train the Linear Regression model on the data."
    },
    {
      title: "4. Predict & Plot",
      code: `y_pred = model.predict(X)\nplt.scatter(X, y)\nplt.plot(X, y_pred, color='red')\nplt.title("Regression Line")\nplt.show()`,
      explanation: "We predict using the model and plot the regression line against the original data.",
      showPlot: true
    }
  ];
  
  export default linearRegression;
  