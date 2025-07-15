import React, { useState, useEffect } from "react";
import "../styles/Playground.css";

const Playground = () => {
  const [code, setCode] = useState(`# Write your Python code here...
import pandas as pd
df = pd.read_csv("uploaded.csv")
print(df.head())`);
  const [output, setOutput] = useState("⏳ Bribing the browser to pretend it’s a Python interpreter.....");
  const [pyodide, setPyodide] = useState(null);
  const [plotSrc, setPlotSrc] = useState(null);
  const [uploadedCSV, setUploadedCSV] = useState(null);

  useEffect(() => {
    const loadPy = async () => {
      const pyodideInstance = await window.loadPyodide();
      setPyodide(pyodideInstance);
      setOutput("✅Python loaded. Let's break some data!");
    };
    loadPy();
  }, []);

  const handleCSVUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    setUploadedCSV(text);
    setOutput("📂 Uploading CSV... Let’s see what secrets your data holds!");
  };

  const handleRun = async () => {
    if (!pyodide) return setOutput("⏳ Pyodide is still loading...");
    try {
      setOutput("Compiling caffeine-powered Python…");
      setPlotSrc(null);

      await pyodide.loadPackage(["pandas", "numpy", "matplotlib"]);

      if (uploadedCSV) {
        pyodide.FS.writeFile("uploaded.csv", new TextEncoder().encode(uploadedCSV));
      }

      await pyodide.runPythonAsync(`
import sys, io
sys.stdout = io.StringIO()
`);

await pyodide.runPythonAsync(`
  import matplotlib.pyplot as plt
  from io import BytesIO
  import base64
  
  # Safe exec area
  locals_dict = {}
  exec(${JSON.stringify(code)}, {}, locals_dict)
  
  buf = BytesIO()
  plt.savefig(buf, format='png')
  plt.close()
  buf.seek(0)
  __plot_base64__ = base64.b64encode(buf.read()).decode('utf-8')
  `);

  const base64 = await pyodide.runPythonAsync("__plot_base64__ if '__plot_base64__' in locals() else ''");

      if (base64 && base64.length > 10) {
        setPlotSrc(`data:image/png;base64,${base64}`);
      }

      const result = await pyodide.runPythonAsync("sys.stdout.getvalue()");
      setOutput(result || "✅ Your code ran. Somewhere, a bug just cried.");
    } catch (err) {
      setOutput(`❌ Error:\n${err}`);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && e.key === "Enter") {
        e.preventDefault();
        handleRun();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [code, uploadedCSV, pyodide]);

  return (
    <div className="playground-container">
      <h2 className="playground-title">Break Things Here — We Made It Crash-Proof (Hopefully)</h2>
      <p className="playground-subtitle">Experiment with Python. Crash responsibly.</p>

      <div className="upload-section">
        <label>📂 Upload CSV:</label>
        <label>You can access the csv using "uploaded.csv"</label>
        <input type="file" accept=".csv" onChange={handleCSVUpload} />
      </div>

      <div className="editor-output-wrapper">
        {/* Code Editor */}
        <div className="editor-panel">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor"
          />
          <button className="run-button" onClick={handleRun}>
            ▶ Run
          </button>
        </div>

        {/* Output Side */}
        <div className="output-panel">
        {/* Plot Output (only shown when there's a graph) */}
        {plotSrc && (
        <div className="plot-box">
          
          <img src={plotSrc} alt="Generated Plot" />
          <a href={plotSrc} download="plot.png" className="download-link">Download</a>
        </div>
  )}

  {/* Console/Text Output (always shown) */}
        <div className="text-output">
        
            <pre className="code-output">{output}</pre>
        </div>
</div>
      </div>
    </div>
  );
};

export default Playground;
