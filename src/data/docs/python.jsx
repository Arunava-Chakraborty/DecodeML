export default {
  title: "Python",
  subtopics: [
    {
      id: "intro",
      title: "Introduction to Python",
      content: `
        <h2>Getting Started with Python</h2>
        <p>Python is a versatile, high-level programming language known for its simplicity and readability.</p>
        
        <div class="info-box">
          <p><strong>Key Features:</strong> Easy to learn, extensive libraries, cross-platform compatibility</p>
        </div>

        <h3>Why Python for Machine Learning?</h3>
        <ul>
          <li>Rich ecosystem of ML libraries (Scikit-learn, TensorFlow, PyTorch)</li>
          <li>Clean syntax that's easy to read and maintain</li>
          <li>Strong community support and extensive documentation</li>
          <li>Excellent for prototyping and production</li>
        </ul>

        <div class="code-block">
# Simple Python example
def calculate_stats(data):
    mean = sum(data) / len(data)
    variance = sum((x - mean) ** 2 for x in data) / len(data)
    return mean, variance

data = [1, 2, 3, 4, 5]
mean, var = calculate_stats(data)
print(f"Mean: {mean}, Variance: {var}")
        </div>
      `
    },
    {
      id: "basics",
      title: "Python Basics",
      content: `
        <h2>Fundamental Python Concepts</h2>
        <p>Learn the building blocks of Python programming.</p>
        
        <h3>Variables and Data Types</h3>
        <div class="code-block">
# Basic data types
name = "Alice"           # String
age = 25                 # Integer
height = 5.9             # Float
is_student = True        # Boolean
scores = [85, 92, 78]    # List
        </div>

        <h3>Control Structures</h3>
        <div class="code-block">
# If statements
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Loops
for score in scores:
    if score > 90:
        print("Excellent!")
        </div>
      `
    },
    {
      id: "functions",
      title: "Functions and Modules",
      content: `
        <h2>Organizing Code with Functions</h2>
        <p>Functions help you write reusable and maintainable code.</p>
        
        <div class="code-block">
def preprocess_data(raw_data, normalize=True):
    """
    Preprocess data for machine learning
    
    Args:
        raw_data: Input data array
        normalize: Whether to normalize data
    
    Returns:
        Processed data ready for ML models
    """
    # Data cleaning
    cleaned_data = [x for x in raw_data if x is not None]
    
    # Normalization
    if normalize:
        max_val = max(cleaned_data)
        cleaned_data = [x / max_val for x in cleaned_data]
    
    return cleaned_data
        </div>
      `
    }
  ]
};