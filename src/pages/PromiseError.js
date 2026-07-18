import React from 'react';

function PromiseError() {
  const triggerDirectRejection = () => {
    // Intentionally reject a promise and do not attach a catch block
    Promise.reject(new Error("Intentional Rejection: Unhandled promise rejection triggered by button click!"));
  };

  const triggerAsyncRejection = () => {
    // Calling an async function that throws without catching the result
    const throwingAsyncFunc = async () => {
      throw new Error("Intentional Async Crash: Error thrown inside unawaited async function!");
    };
    throwingAsyncFunc();
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Unhandled Promise Rejection</h1>
        <div className="demo-badge-row">
          <span className="tag-badge network">Network Failure</span>
          <span className="tag-badge js">Rejection</span>
        </div>
        <p>
          This page demonstrates unhandled promise rejections. In JavaScript, when a Promise is rejected and no
          `.catch()` block or rejection handler is registered, the browser fires an `unhandledrejection` event
          on the global window object. DevLens captures these events to trace asynchronous failures.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🤝 Trigger Unhandled Rejections</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the buttons below to create rejected promises without catch handlers. Open your browser console to verify!
        </p>

        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <button className="btn btn-danger" onClick={triggerDirectRejection}>
            Promise.reject()
          </button>
          <button className="btn btn-warning" onClick={triggerAsyncRejection}>
            Throw in Async Function
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromiseError;
