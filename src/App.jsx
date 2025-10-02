import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Docs from "./pages/Docs";
import DocsTopicPage from "./pages/DocsTopicPage";
import Playground from "./pages/Playground";
import Visualizer from "./pages/Visualizer";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import BackgroundLayer from "./components/BackgroundLayer";
import { useEffect, useState } from "react";
import "./styles/index.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  

  return (
    <Router>
      <BackgroundLayer darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="container" style={{ padding: "1.5rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/:topicId" element={<DocDetail/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
