import React from "react";

const Sidebar = ({ algorithms, selected, onSelect }) => {
  return (
    <div className="sidebar">
      <h3>Algorithms</h3>
      <ul>
        {Object.keys(algorithms).map((alg) => (
          <li
            key={alg}
            className={alg === selected ? "active" : ""}
            onClick={() => onSelect(alg)}
          >
            {alg}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
