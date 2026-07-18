import React from 'react';

function EventErrors() {
  const triggerCustomError = () => {
    throw new Error("Intentional crash: Button click event handler threw this exception!");
  };

  const triggerReferenceError = () => {
    // Calling an undefined function
    // eslint-disable-next-line no-undef
    nonExistentFunctionCall();
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>JavaScript Event Errors</h1>
        <div className="demo-badge-row">
          <span className="tag-badge js">JS Error</span>
          <span className="tag-badge network">Runtime Error</span>
        </div>
        <p>
          This page demonstrates JavaScript errors triggered inside event handlers (e.g. `onClick`).
          Unlike render-time crashes, React catches event errors internally and they propagate straight
          to the browser window's error listener (`window.onerror`), leaving the React UI running.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">💥 Trigger Runtime Exceptions</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the buttons below to throw uncaught exceptions inside event handlers. Check your developer console!
        </p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <button className="btn btn-danger" onClick={triggerCustomError}>
            Throw Custom Error
          </button>
          <button className="btn btn-warning" onClick={triggerReferenceError}>
            Trigger ReferenceError
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventErrors;
