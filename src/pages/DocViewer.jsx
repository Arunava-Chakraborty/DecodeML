import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './DocViewer.css';

// Import your documentation files
import pythonDoc from '../data/docs/python.jsx';
import dataStructuresDoc from '../data/docs/data-structures.jsx';
// Import other docs as needed...

const DocViewer = () => {
  const { slug } = useParams();
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  // Map slugs to documentation objects
  const docMap = {
    'python': pythonDoc,
    'data-structures': dataStructuresDoc,
    // Add other mappings...
  };

  const currentDoc = docMap[slug];

  if (!currentDoc) {
    return (
      <div className="doc-not-found">
        <h1>Documentation not found</h1>
        <p>The documentation for "{slug}" doesn't exist yet.</p>
      </div>
    );
  }

  return (
    <div className="doc-viewer">
      <aside className="doc-sidebar">
        <h2>{currentDoc.title}</h2>
        <nav className="doc-nav">
          {currentDoc.subtopics.map((subtopic, index) => (
            <button
              key={subtopic.id}
              className={`nav-item ${index === activeSubtopic ? 'active' : ''}`}
              onClick={() => setActiveSubtopic(index)}
            >
              {subtopic.title}
            </button>
          ))}
        </nav>
      </aside>

      <main className="doc-content">
        <h1>{currentDoc.subtopics[activeSubtopic].title}</h1>
        <div className="content">
          {currentDoc.subtopics[activeSubtopic].content}
        </div>
      </main>
    </div>
  );
};

export default DocViewer;