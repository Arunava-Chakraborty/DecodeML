import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DocDetail.css';

const DocDetail = () => {
  const { topicId } = useParams(); // Using topicId to match your route parameter
  const navigate = useNavigate();
  const [activeSubtopic, setActiveSubtopic] = useState(0);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocumentation = async () => {
      try {
        setLoading(true);
        
        // Dynamically import the documentation file
        try {
          const docModule = await import(`../data/docs/${topicId}.jsx`);
          setCurrentDoc(docModule.default);
        } catch (importError) {
          console.log(`Documentation file for ${topicId} not found`);
          // Create a fallback document
          setCurrentDoc({
            title: topicId.charAt(0).toUpperCase() + topicId.slice(1).replace(/-/g, ' '),
            subtopics: [
              {
                id: 'coming-soon',
                title: 'Documentation Coming Soon',
                content: `
                  <div class="info-box">
                    <p>We're working on creating comprehensive documentation for <strong>${topicId}</strong>.</p>
                    <p>This content will be available soon. Check back later!</p>
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

    if (topicId) {
      loadDocumentation();
    }
  }, [topicId]);

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
        <p>The documentation for "{topicId}" doesn't exist.</p>
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