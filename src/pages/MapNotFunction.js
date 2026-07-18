import React, { useState } from 'react';

function MapNotFunction() {
  const [triggerError, setTriggerError] = useState(false);

  // Intentionally define items as an object instead of an array
  const badItems = { name: "John", age: 30 };

  if (triggerError) {
    // This will throw: "badItems.map is not a function" during render
    return (
      <div>
        {badItems.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>TypeError: map is not a function</h1>
        <div className="demo-badge-row">
          <span className="tag-badge js">JS Error</span>
          <span className="tag-badge react">Render Crash</span>
        </div>
        <p>
          This page demonstrates a render-time JavaScript error. Clicking the trigger button below will set the state to render
          an object using the `.map()` method (which only exists on arrays). This causes a React render crash, which will
          be intercepted by the page-level Error Boundary and reported to DevLens.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🔴 Trigger Render Crash</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the button below to force a React render-time type error.
        </p>
        <button 
          className="btn btn-danger" 
          onClick={() => setTriggerError(true)}
        >
          Execute badItems.map()
        </button>
      </div>
    </div>
  );
}

export default MapNotFunction;
