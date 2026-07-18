import React, { useState } from 'react';

function ReactKey() {
  const [items, setItems] = useState([]);

  const renderItems = () => {
    setItems(['Red Hat', 'Green Apple', 'Blue Jeans', 'Yellow Submarine']);
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Missing React Key Warning</h1>
        <div className="demo-badge-row">
          <span className="tag-badge react">React Issue</span>
          <span className="tag-badge js">Console Warning</span>
        </div>
        <p>
          This page demonstrates the classic React missing key warning. When rendering lists in React,
          each list element must have a unique `key` prop. If omitted, React will log a warning.
          Click the button below to render a list without keys and check the console.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">⚠️ Render Dynamic List Without Keys</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Clicking below will populate a list, mapping array elements to DOM nodes without assigning React keys.
        </p>

        <button className="btn btn-warning" onClick={renderItems} style={{ marginBottom: '20px' }}>
          Render Bad List
        </button>

        {items.length > 0 && (
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h4>Mapped Elements:</h4>
            <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
              {/* Intentionally omitting the key prop */}
              {items.map(item => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReactKey;
