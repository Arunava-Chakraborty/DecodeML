import React from "react";

const VisualizerDropdown = ({ options, selected, onChange }) => {
  return (
    <div className="dropdown">
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        <option disabled>Select an Algorithm</option>
        {options.map((alg) => (
          <option key={alg} value={alg}>{alg}</option>
        ))}
      </select>
    </div>
  );
};

export default VisualizerDropdown;
