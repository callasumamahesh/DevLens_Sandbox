import React, { useState } from 'react';

function CssOverflow() {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>CSS Horizontal Overflow</h1>
        <div className="demo-badge-row">
          <span className="tag-badge css">CSS Issue</span>
          <span className="tag-badge js">Visual Bug</span>
        </div>
        <p>
          This page demonstrates a horizontal layout overflow issue. Horizontal scrollbars are generally undesirable
          on modern responsive websites. Clicking the trigger button below will apply an excessively wide element style
          causing the layout to overflow the viewport width, testing DevLens's layout analysis capabilities.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">↕️ Toggle Layout Overflow State</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Toggle the button to break the layout and inspect the resulting horizontal scroll.
        </p>

        <button 
          className={`btn ${isBroken ? 'btn-success' : 'btn-danger'}`} 
          onClick={() => setIsBroken(!isBroken)}
          style={{ marginBottom: '20px' }}
        >
          {isBroken ? 'Reset Layout to Normal' : 'Trigger Horizontal Overflow'}
        </button>

        <div className="overflow-demo-box" style={{ border: '2px dashed var(--border-color)', padding: '20px', borderRadius: '12px', position: 'relative' }}>
          <h4>Demo Container</h4>
          <p>This container has a normal responsive width.</p>
          
          {/* Unresponsive overflowing element */}
          {isBroken && (
            <div 
              style={{
                width: '160vw',
                height: '100px',
                background: 'linear-gradient(90deg, var(--color-danger), var(--color-secondary))',
                borderRadius: '8px',
                marginTop: '15px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
                position: 'relative',
                left: '20px',
                zIndex: 10
              }}
            >
              ⚠️ I am 160vw wide! I will break the viewport and create a horizontal scrollbar.
            </div>
          )}

          <div style={{ marginTop: '15px', color: 'var(--text-muted)', fontSize: '13px' }}>
            {isBroken 
              ? '🔴 The page layout now overflows horizontally. Check the bottom of the window!' 
              : '🟢 Layout is clean. No horizontal scrollbar should be visible.'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssOverflow;
