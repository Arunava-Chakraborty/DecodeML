import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Glob all topic files
const docs = import.meta.glob('../../data/docs/*.js');

const DocsTopicPage = () => {
  const { topicId } = useParams();
  const [topicData, setTopicData] = useState(null);

  useEffect(() => {
    const filePath = `../../data/docs/${topicId}.js`;

    if (docs[filePath]) {
      docs[filePath]().then((mod) => setTopicData(mod.default));
    } else {
      setTopicData({ title: "Not Found", subtopics: [] });
    }
  }, [topicId]);

  if (!topicData) return <div>Loading...</div>;

  return (
    <div className="docs-topic-page">
      <h1>{topicData.title}</h1>
      <div className="topic-content">
        {topicData.subtopics.map((sub) => (
          <section key={sub.id} id={sub.id}>
            <h2>{sub.title}</h2>
            <p>{sub.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default DocsTopicPage;
