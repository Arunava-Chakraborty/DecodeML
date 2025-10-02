import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DocDetail.css';

const DocDetail = () => {
  const { slug } = useParams();
  const [activeSubtopic, setActiveSubtopic] = useState(0);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  // Map of all available documentation slugs
  const availableDocs = {
    'python': 'Python',
    'data-structures': 'Data Structures', 
    'algorithms': 'Algorithms',
    'database': 'Database',
    'machine-learning': 'Machine Learning',
    'supervised-learning': 'Supervised Learning',
    'unsupervised-learning': 'Unsupervised Learning',
    'deep-learning': 'Deep Learning',
    'pandas': 'Pandas',
    'data-visualization': 'Data Visualization',
    'scikit-learn': 'Scikit-Learn',
    'tensorflow': 'TensorFlow',
    'pytorch': 'PyTorch',
    'data-pipelines': 'Data Pipelines',
    'git-github': 'Git & GitHub',
    'ml-ops': 'ML Ops',
    'data-ops': 'Data Ops',
    'other-topics': 'Other Topics'
  };

  useEffect(() => {
    const loadDocumentation = async () => {
      try {
        setLoading(true);
        
        // Check if the slug exists in our available docs
        if (!availableDocs[slug]) {
          setCurrentDoc(null);
          return;
        }

        // Try to dynamically import the documentation file
        try {
          const docModule = await import(`../data/docs/${slug}.jsx`);
          setCurrentDoc(docModule.default);
        } catch (importError) {
          // If file doesn't exist, create a fallback document
          console.warn(`Documentation file for ${slug} not found, using fallback`);
          setCurrentDoc({
            title: availableDocs[slug],
            subtopics: [
              {
                id: 'coming-soon',
                title: 'Documentation Coming Soon',
                content: `
                  <div class="info-box">
                    <p>We're working on creating comprehensive documentation for <strong>${availableDocs[slug]}</strong>.</p>
                    <p>This content will be available soon. Check back later or <a href="/contact">contact us</a> if you need immediate assistance.</p>
                  </div>
                  <p>In the meantime, you can explore our other documentation sections.</p>
                `
              }
            ]
          });
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
        <a href="/docs">← Back to Documentation</a>
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
            <a href="/docs">Docs</a>
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