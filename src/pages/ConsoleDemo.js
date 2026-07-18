import React, { useState } from 'react';

function ConsoleDemo() {
  const [customMsg, setCustomMsg] = useState("Hello from DevLens Playground!");

  const handleLog = () => {
    console.log("[ConsoleDemo] Log:", customMsg);
  };

  const handleWarn = () => {
    console.warn("[ConsoleDemo] Warning:", customMsg);
  };

  const handleInfo = () => {
    console.info("[ConsoleDemo] Info:", customMsg);
  };

  const handleError = () => {
    console.error("[ConsoleDemo] Error:", customMsg);
  };

  const handleTable = () => {
    const mockData = [
      { id: 1, component: "Layout", status: "Rendered", durationMs: 14.5 },
      { id: 2, component: "Sidebar", status: "Mounted", durationMs: 5.2 },
      { id: 3, component: "ConsoleDemo", status: "Active", durationMs: 1.8 }
    ];
    console.log("[ConsoleDemo] Displaying table data:");
    console.table(mockData);
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Console Outputs Demo</h1>
        <div className="demo-badge-row">
          <span className="tag-badge dom">DOM Changes</span>
          <span className="tag-badge js">Console Outputs</span>
        </div>
        <p>
          This page allows you to fire different console calls using standard JavaScript web APIs.
          It tests whether DevLens hooks into the browser console context to capture and analyze
          `console.log`, `console.info`, `console.warn`, `console.error`, and `console.table` outputs.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">📟 Console Trigger Console</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Enter a custom message and execute any log action below. Open your browser developer console to see the output!
        </p>

        {/* Input */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>
            Custom Log Message
          </label>
          <input
            type="text"
            value={customMsg}
            onChange={(e) => setCustomMsg(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '500px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '12px',
              color: 'var(--text-main)',
              fontSize: '14px',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
          />
        </div>

        {/* Button row */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary" onClick={handleLog}>
            console.log()
          </button>
          <button className="btn btn-primary" onClick={handleInfo} style={{ background: '#0284c7' }}>
            console.info()
          </button>
          <button className="btn btn-warning" onClick={handleWarn}>
            console.warn()
          </button>
          <button className="btn btn-danger" onClick={handleError}>
            console.error()
          </button>
          <button className="btn btn-secondary" onClick={handleTable} style={{ border: '1px solid var(--color-secondary)' }}>
            console.table()
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsoleDemo;
