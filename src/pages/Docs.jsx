import { useNavigate } from 'react-router-dom';
import './Docs.css';
import DocViewer from './DocViewer';
import {
  FaPython, FaSearch, FaCog, FaReact, FaAlgolia, FaDocker,
  FaGithub, FaSnowflake, FaNetworkWired, FaProjectDiagram,
  FaTable, FaChartBar,
  FaBrain,
  FaSurprise,
  FaDatabase
} from 'react-icons/fa';
import { Fa42Group, FaChalkboard, FaFireFlameCurved, FaTengeSign } from 'react-icons/fa6';
import { LiaFanSolid } from 'react-icons/lia';

const docs = [
  { title: "Python", slug: "python", icon: <FaPython size={40} />, tags: ["Language", "Basics", "Scripting"] },
  { title: "Data Structures", slug: "data-structures", icon: <FaSearch size={40} />, tags: ["DSA", "Arrays", "Linked Lists"] },
  { title: "Algorithms", slug: "algorithms", icon: <FaProjectDiagram size={40} />, tags: ["Search", "Sort", "Greedy"] },
  { title: "DataBase", slug: "database", icon: <FaDatabase size={40} />, tags: ["SQL/NOSql", "ETL", "Storage"] },
  { title: "Machine Learning", slug: "machine-learning", icon: <FaBrain size={40} />, tags: ["AI", "Models", "Training"] },
  { title: "Supervised Learning", slug: "supervised-learning", icon: <FaProjectDiagram size={40} />, tags: ["Regression", "Classification", "Algorithms"] },
  { title: "Unsupervised Learning", slug: "unsupervised-learning", icon: <FaCog size={40} />, tags: ["Clustering", "Algorithms", "PCA"] },
  { title: "Deep Learning", slug: "deep-learning", icon: <FaNetworkWired size={40} />, tags: ["NeuralNet", "ANN", "CNN"] },
  { title: "Pandas", slug: "pandas", icon: <FaTable size={40} />, tags: ["DataFrame", "Wrangling", "Visualization"] },
  { title: "Data Visualization", slug: "data-visualization", icon: <FaChartBar size={40} />, tags: ["Charts", "Plots", "Graphs"] },
  { title: "Scikit-Learn", slug: "scikit-learn", icon: <Fa42Group size={40} />, tags: ["ML", "Library", "Tools"] },
  { title: "TensorFlow", slug: "tensorflow", icon: <FaTengeSign size={40} />, tags: ["DL", "AI", "Keras"] },
  { title: "PyTorch", slug: "pytorch", icon: <FaFireFlameCurved size={40} />, tags: ["DL", "Training", "Optimization"] },
  { title: "Data Pipelines", slug: "data-pipelines", icon: <FaCog size={40} />, tags: ["ETL", "Automation", "Batch"] },
  { title: "Git-Github", slug: "git-github", icon: <FaGithub size={40} />, tags: ["Version Control", "Collaboration"] },
  { title: "ML-Ops", slug: "ml-ops", icon: <FaDocker size={40} />, tags: ["Deployment", "Monitoring", "CI/CD"] },
  { title: "Data-Ops", slug: "data-ops", icon: <FaSnowflake size={40} />, tags: ["Data Pipeline", "ETL", "Automation"] },
  { title: "Other Topics", slug: "other-topics", icon: <FaPython size={40} />, tags: ["Misc", "Advanced", "Uncommon"] },
];

const Docs = () => {
  const navigate = useNavigate();

  return (
    <section className="docs-wrapper">
      <div className="docs-container">
        <h3 className="docs-heading">“Everything You Need To Understand Our Madness — Organized, Explained, and Hopefully Typo-Free.”</h3>
        
        <div className="docs-grid">
          {docs.map(doc => (
            <div
              key={doc.slug}
              onClick={() => navigate(`/docs/${doc.slug}`)}
              className="doc-card"
            >
              <div className="doc-icon">{doc.icon}</div>
              <h2 className="doc-title">{doc.title}</h2>
              <p className="doc-desc">View documentation</p>
              <div className="doc-tags">
                {doc.tags.map((tag, idx) => (
                  <span key={idx} className="doc-tag">{tag}</span>
                ))}
              </div>
              <div className="doc-tooltip">{doc.title} Documentation</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Docs;

docs.jsx