import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DocDetail.css';

const DocDetail = () => {
  const { slug } = useParams();
  const [activeSubtopic, setActiveSubtopic] = useState(0);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDocumentation = async () => {
      try {
        setLoading(true);
        
        // Dynamically import the documentation file
        const docModule = await import(`../data/docs/${slug}.jsx`);
        setCurrentDoc(docModule.default);
      } catch (error) {
        console.error(`Failed to load documentation for ${slug}:`, error);
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
        <p>The documentation for "{slug}" is not available yet.</p>
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