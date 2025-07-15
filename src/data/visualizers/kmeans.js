const kmeans = [
    {
      title: "1. Import Libraries",
      code: `import numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.cluster import KMeans`,
      explanation: "We import the necessary libraries for data manipulation, visualization, and clustering."
    },
    {
      title: "2. Generate Data",
      code: `from sklearn.datasets import make_blobs\nX, y = make_blobs(n_samples=300, centers=4, random_state=42)\nplt.scatter(X[:, 0], X[:, 1])\nplt.title("Raw Data")\nplt.show()`,
      explanation: "We create a synthetic dataset with 4 clusters and visualize it.",
      showPlot: true
    },
    {
      title: "3. Train KMeans Model",
      code: `kmeans = KMeans(n_clusters=4)\nkmeans.fit(X)\ny_kmeans = kmeans.predict(X)`,
      explanation: "We initialize the KMeans model, fit it to the data, and get cluster predictions."
    },
    {
      title: "4. Visualize Clusters",
      code: `plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, cmap='viridis')\nplt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], s=200, c='red')\nplt.title("Clustered Data")\nplt.show()`,
      explanation: "We visualize the clustered data and highlight the cluster centers.",
      showPlot: true
    }
  ];
  
  export default kmeans;
  