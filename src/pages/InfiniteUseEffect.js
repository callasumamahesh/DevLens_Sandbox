import React, { useState, useEffect } from 'react';

// Child component that triggers the infinite render loop when mounted
function LoopTrigger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Updating state on every render without a dependency array triggers an infinite loop
    setCount(c => c + 1);
  });

  return (
    <div style={{ padding: '15px', backgroundColor: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: '8px', marginTop: '15px' }}>
      <p>Render iterations: <strong>{count}</strong></p>
      <p style={{ fontSize: '12px', color: 'var(--color-danger)' }}>
        React should detect the loop and throw a "Maximum update depth exceeded" error.
      </p>
    </div>
  );
}

function InfiniteUseEffect() {
  const [runLoop, setRunLoop] = useState(false);

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Infinite useEffect Loop</h1>
        <div className="demo-badge-row">
          <span className="tag-badge react">React Issue</span>
          <span className="tag-badge js">Infinite Loop</span>
        </div>
        <p>
          This page demonstrates how an infinite rendering loop is caused by updating state inside a `useEffect`
          without a dependency array (meaning it runs after every render, triggering another state update and render).
          React will eventually throw an error: <strong>Maximum update depth exceeded</strong>.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🔄 Trigger React Re-render Loop</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the button below to mount the loop component. This will freeze rendering and force React to throw a maximum depth exceeded exception.
        </p>

        {runLoop ? (
          <div>
            <button className="btn btn-secondary" onClick={() => setRunLoop(false)}>
              Stop Loop Component (Unmount)
            </button>
            <LoopTrigger />
          </div>
        ) : (
          <button className="btn btn-danger" onClick={() => setRunLoop(true)}>
            Start Infinite Loop
          </button>
        )}
      </div>
    </div>
  );
}

export default InfiniteUseEffect;
