import React from "react";

const PlotVisualizer = ({ description }) => (
  <div className="plot-box">
    <p>{description}</p>
    <div className="plot-placeholder">[ Visualization Canvas ]</div>
  </div>
);

export default PlotVisualizer;
