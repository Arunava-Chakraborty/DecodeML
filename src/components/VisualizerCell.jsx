import React from "react";
import PlotVisualizer from "./PlotVisualizer";

const VisualizerCell = ({ code, description, index }) => {
  return (
    <div className="cell">
      <h4>Cell {index + 1}</h4>
      <pre className="code-block"><code>{code}</code></pre>
      <PlotVisualizer description={description} />
    </div>
  );
};

export default VisualizerCell;
