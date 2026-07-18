import React, { useState } from 'react';

function UndefinedProperty() {
  const [triggerError, setTriggerError] = useState(false);

  // Deep object where profile is undefined
  const user = {
    id: 1,
    name: "Alice Smith"
  };

  if (triggerError) {
    // This will throw: "Cannot read properties of undefined (reading 'street')"
    return (
      <div>
        <p>User City: {user.profile.address.street}</p>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>TypeError: Cannot read properties of undefined</h1>
        <div className="demo-badge-row">
          <span className="tag-badge js">JS Error</span>
          <span className="tag-badge react">Render Crash</span>
        </div>
        <p>
          This page demonstrates a render-time reference exception. When the trigger button is clicked,
          the component tries to evaluate `user.profile.address.street` on a user object that has no `profile` field.
          This will trigger a standard crash captured by the browser's global handlers and DevLens.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🔴 Trigger Render Crash</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the button below to force a deep reference TypeError.
        </p>
        <button 
          className="btn btn-danger" 
          onClick={() => setTriggerError(true)}
        >
          Access user.profile.address.street
        </button>
      </div>
    </div>
  );
}

export default UndefinedProperty;
