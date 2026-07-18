import React from 'react';

function DomMutations() {
  const handleAddElement = () => {
    const target = document.getElementById('mutation-target-area');
    if (target) {
      const newDiv = document.createElement('div');
      newDiv.className = 'mutated-child';
      newDiv.innerText = `➕ Dynamically Added: ${new Date().toLocaleTimeString()}`;
      newDiv.style.backgroundColor = 'rgba(6, 182, 212, 0.1)';
      newDiv.style.border = '1px solid var(--color-primary)';
      newDiv.style.padding = '8px 12px';
      newDiv.style.borderRadius = '6px';
      newDiv.style.marginTop = '8px';
      newDiv.style.fontSize = '13px';
      target.appendChild(newDiv);
      console.log('DOM Mutation: Added a new element to target.');
    }
  };

  const handleRemoveElement = () => {
    const target = document.getElementById('mutation-target-area');
    if (target && target.lastElementChild) {
      target.removeChild(target.lastElementChild);
      console.log('DOM Mutation: Removed last element from target.');
    }
  };

  const handleModifyAttribute = () => {
    const target = document.getElementById('mutation-target-area');
    if (target) {
      const colors = ['#06b6d4', '#8b5cf6', '#f43f5e', '#f59e0b', '#10b981'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Update element attributes directly
      target.setAttribute('data-last-mutation', new Date().toISOString());
      target.style.borderColor = randomColor;
      target.style.boxShadow = `0 0 15px ${randomColor}33`;
      console.log(`DOM Mutation: Modified target attributes. Border color set to: ${randomColor}`);
    }
  };

  const handleUpdateText = () => {
    const textNode = document.getElementById('mutation-text-element');
    if (textNode) {
      const words = ['Simulated', 'Mutated', 'Transformed', 'Replaced', 'Updated'];
      const randomWord = words[Math.floor(Math.random() * words.length)];
      textNode.innerText = `Current Text Status: ${randomWord} (${Math.floor(Math.random() * 1000)})`;
      console.log('DOM Mutation: Updated inner text content.');
    }
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>MutationObserver & DOM Mutations</h1>
        <div className="demo-badge-row">
          <span className="tag-badge dom">DOM Changes</span>
          <span className="tag-badge js">MutationObserver</span>
        </div>
        <p>
          This page bypasses React's virtual DOM to perform direct DOM mutations using standard web browser APIs.
          It tests whether the DevLens Extension's `MutationObserver` code successfully detects and logs updates
          when nodes are added, removed, attributes are changed, or text nodes are updated.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🧬 Mutation Controller</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the buttons below to fire direct DOM mutations. Watch the mutation area change!
        </p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px' }}>
          <button className="btn btn-primary" onClick={handleAddElement}>
            Add Child Element
          </button>
          <button className="btn btn-danger" onClick={handleRemoveElement}>
            Remove Child Element
          </button>
          <button className="btn btn-secondary" onClick={handleModifyAttribute}>
            Modify Border/Data Attribute
          </button>
          <button className="btn btn-warning" onClick={handleUpdateText}>
            Modify Text Content
          </button>
        </div>

        {/* Mutation Target Area */}
        <div 
          id="mutation-target-area"
          data-last-mutation="none"
          style={{
            border: '2px solid var(--border-color)',
            borderRadius: '12px',
            padding: '24px',
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            minHeight: '150px',
            transition: 'border-color 0.3s, box-shadow 0.3s'
          }}
        >
          <h4 id="mutation-text-element" style={{ marginBottom: '10px', color: 'var(--text-main)' }}>
            Current Text Status: Standard
          </h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            Mutation log will appear above. Elements added via button will render below:
          </p>
          {/* Dynamic nodes will load here */}
        </div>
      </div>
    </div>
  );
}

export default DomMutations;
