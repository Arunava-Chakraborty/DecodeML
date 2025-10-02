// src/data/algorithms.js
export const algorithms = {
    "Linear Regression": [
      {
        code: `from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()`,
        description: "Creates a Linear Regression model instance.",
      },
      {
        code: `model.fit(X_train, y_train)`,
        description: "Fits the model on training data.",
      },
      {
        code: `predictions = model.predict(X_test)`,
        description: "Generates predictions for test data.",
      },
      {
        code: `plt.scatter(X_test, y_test)\nplt.plot(X_test, predictions, color='red')\nplt.show()`,
        description: "Visualizes predicted vs actual values.",
      },
    ],
    "K-Nearest Neighbors": [/* similar structure */],
  };
  