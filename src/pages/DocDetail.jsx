import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DocDetail.css';

const DocDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeSubtopic, setActiveSubtopic] = useState(0);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample documentation data (fallback if files don't exist)
  const sampleDocs = {
    'python': {
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
          `
        }
      ]
    },
    'data-structures': {
      title: "Data Structures",
      subtopics: [
        {
          id: "intro",
          title: "Introduction to Data Structures",
          content: `
            <h2>Data Structures Overview</h2>
            <p>Data structures are fundamental building blocks for efficient programming.</p>
            <p>Content coming soon...</p>
          `
        }
      ]
    },
    'algorithms': {
      title: "Algorithms",
      subtopics: [
        {
          id: "intro",
          title: "Introduction to Algorithms",
          content: `
            <h2>Algorithms Overview</h2>
            <p>Algorithms are step-by-step procedures for solving problems.</p>
            <p>Content coming soon...</p>
          `
        }
      ]
    }
    // Add more documentation here as needed
  };

  useEffect(() => {
    const loadDocumentation = async () => {
      try {
        setLoading(true);
        
        // First try to dynamically import
        try {
          const docModule = await import(`../data/docs/${slug}.jsx`);
          setCurrentDoc(docModule.default);
        } catch (importError) {
          console.log(`File not found for ${slug}, using sample data`);
          // Use sample data if file doesn't exist
          if (sampleDocs[slug]) {
            setCurrentDoc(sampleDocs[slug]);
          } else {
            setCurrentDoc({
              title: slug.charAt(0).toUpperCase() + slug.slice(1),
              subtopics: [
                {
                  id: 'coming-soon',
                  title: 'Documentation Coming Soon',
                  content: `
                    <div class="info-box">
                      <p>We're working on creating comprehensive documentation for <strong>${slug}</strong>.</p>
                      <p>This content will be available soon. Check back later!</p>
                    </div>
                  `
                }
              ]
            });
          }
        }
      } catch (error) {
        console.error('Error loading documentation:', error);
        setCurrentDoc(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadDocumentation();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="doc-loading">
        <div className="loading-spinner"></div>
        <p>Loading documentation...</p>
      </div>
    );
  }

  if (!currentDoc) {
    return (
      <div className="doc-not-found">
        <h1>Documentation Not Found</h1>
        <p>The documentation for "{slug}" doesn't exist.</p>
        <button onClick={() => navigate('/docs')} className="back-button">
          ← Back to Documentation
        </button>
      </div>
    );
  }

  return (
    <div className="doc-detail">
      {/* Sidebar */}
      <aside className="doc-sidebar">
        <div className="sidebar-header">
          <h2>{currentDoc.title}</h2>
          <p>Explore the documentation</p>
        </div>
        
        <nav className="subtopic-nav">
          {currentDoc.subtopics.map((subtopic, index) => (
            <button
              key={subtopic.id}
              className={`subtopic-btn ${index === activeSubtopic ? 'active' : ''}`}
              onClick={() => setActiveSubtopic(index)}
            >
              <span className="subtopic-number">{index + 1}</span>
              <span className="subtopic-title">{subtopic.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="doc-main">
        <div className="content-header">
          <nav className="breadcrumb">
            <button onClick={() => navigate('/docs')} className="breadcrumb-link">
              Docs
            </button>
            <span> / </span>
            <span className="current">{currentDoc.title}</span>
          </nav>
          <h1>{currentDoc.subtopics[activeSubtopic].title}</h1>
        </div>

        <div 
          className="doc-content"
          dangerouslySetInnerHTML={{ __html: currentDoc.subtopics[activeSubtopic].content }}
        />
      </main>
    </div>
  );
};

export default DocDetail;