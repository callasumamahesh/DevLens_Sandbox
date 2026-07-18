import React, { useState } from 'react';

function Accessibility() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Accessibility (a11y) Violations</h1>
        <div className="demo-badge-row">
          <span className="tag-badge a11y">Accessibility</span>
          <span className="tag-badge css">Visual Contrast</span>
        </div>
        <p>
          This page hosts multiple intentional accessibility violations. Automated checkers (and DevLens) should flag
          issues like missing image alt attributes, label-less form inputs, poor color contrast, and custom interactive
          widgets missing ARIA roles or keyboard accessibility.
        </p>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        {/* Violation 1: Missing Alt Attribute */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">🖼️ Missing Alt Attributes</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            The image below has no alt attribute, making it invisible to screen readers.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000', padding: '10px', borderRadius: '8px' }}>
            {/* INTENTIONAL VIOLATION: no alt attribute */}
            <img 
              src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=150&fit=crop" 
              width="300"
              height="150"
              style={{ borderRadius: '4px' }}
            />
          </div>
        </div>

        {/* Violation 2: Label-less Button (Icon Only) */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">🔘 Button without Text/Aria-Label</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            This icon button has no descriptive text, aria-label, or title attribute.
          </p>
          {/* INTENTIONAL VIOLATION: Button with only an icon and no descriptive label */}
          <button 
            className="btn btn-secondary" 
            style={{ width: '50px', height: '50px', borderRadius: '50%', padding: 0 }}
            onClick={() => alert("Trash deleted")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>

        {/* Violation 3: Low Color Contrast */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">👁️ Low Color Contrast</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            The paragraph below uses light gray text on a slightly lighter background, violating contrast guidelines.
          </p>
          {/* INTENTIONAL VIOLATION: Poor contrast text */}
          <div style={{ backgroundColor: '#2d3748', padding: '15px', borderRadius: '8px' }}>
            <p style={{ color: '#4a5568', fontSize: '14px', fontWeight: 'bold' }}>
              CRITICAL NOTICE: Please read this extremely important information regarding your subscription.
            </p>
          </div>
        </div>

        {/* Violation 4: Missing Form Labels */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">📝 Inputs Missing Labels</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            These input elements rely solely on placeholder text and have no labels or aria labels.
          </p>
          {/* INTENTIONAL VIOLATION: input elements with no labels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
              type="text" 
              placeholder="Username" 
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '10px', borderRadius: '6px', color: 'white' }}
            />
            <input 
              type="password" 
              placeholder="Password" 
              style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '10px', borderRadius: '6px', color: 'white' }}
            />
          </div>
        </div>

        {/* Violation 5: Custom Widget without Semantic ARIA */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">🔌 Bad custom widget (No ARIA)</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            A custom switch component built using a div, missing roles, tabIndex, and state representation.
          </p>
          {/* INTENTIONAL VIOLATION: Div functioning as interactive button with no role or tabIndex */}
          <div 
            onClick={() => setSwitchOn(!switchOn)}
            style={{
              width: '60px',
              height: '30px',
              backgroundColor: switchOn ? 'var(--color-success)' : '#4a5568',
              borderRadius: '15px',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            <div 
              style={{
                width: '26px',
                height: '26px',
                backgroundColor: 'white',
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: switchOn ? '32px' : '2px',
                transition: 'left 0.2s'
              }}
            />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px', display: 'inline-block' }}>
            Switch state: {switchOn ? 'ON' : 'OFF'}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Accessibility;
