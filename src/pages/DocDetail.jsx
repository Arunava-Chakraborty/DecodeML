import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DocDetail.css';

// Import all your documentation files
import pythonDoc from '../data/docs/python.jsx';
import dataStructuresDoc from '../data/docs/data-structures.jsx';
import algorithmsDoc from '../data/docs/algorithms.jsx';
import dataDoc from '../data/docs/data.jsx';
import mlDoc from '../data/docs/ml.jsx';
import supervisedDoc from '../data/docs/supervised.jsx';
import unsupervisedDoc from '../data/docs/unsupervised.jsx';
import deepLearningDoc from '../data/docs/deep-learning.jsx';
import pandasDoc from '../data/docs/pandas.jsx';
import dataVizDoc from '../data/docs/data-viz.jsx';
import scikitLearnDoc from '../data/docs/scikit-learn.jsx';
import tensorflowDoc from '../data/docs/tensorflow.jsx';
import pytorchDoc from '../data/docs/pytorch.jsx';
import dataPipelineDoc from '../data/docs/data-pipeline.jsx';
import gitGithubDoc from '../data/docs/git-github.jsx';
import mlOpsDoc from '../data/docs/ml-ops.jsx';
import dataOpsDoc from '../data/docs/data-ops.jsx';
import otherTopicsDoc from '../data/docs/other-topics.jsx';

const docMap = {
  'python': pythonDoc,
  'data-structures': dataStructuresDoc,
  'algorithms': algorithmsDoc,
  'data': dataDoc,
  'ml': mlDoc,
  'supervised': supervisedDoc,
  'unsupervised': unsupervisedDoc,
  'deep-learning': deepLearningDoc,
  'pandas': pandasDoc,
  'data-viz': dataVizDoc,
  'scikit-learn': scikitLearnDoc,
  'tensorflow': tensorflowDoc,
  'pytorch': pytorchDoc,
  'data-pipeline': dataPipelineDoc,
  'others': gitGithubDoc, // Using git-github for 'others' slug
  'handling-data': mlOpsDoc, // Using ml-ops for 'handling-data' slug
  // Note: You have duplicate slugs that need to be resolved
};

const DocDetail = () => {
  const { slug } = useParams();
  const [activeSubtopic, setActiveSubtopic] = useState(0);
  const [currentDoc, setCurrentDoc] = useState(null);

  useEffect(() => {
    // Set the current document based on slug
    const doc = docMap[slug];
    setCurrentDoc(doc);
    setActiveSubtopic(0); // Reset to first subtopic when doc changes
  }, [slug]);

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