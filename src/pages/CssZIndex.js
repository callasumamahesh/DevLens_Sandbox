import React, { useState } from 'react';

function CssZIndex() {
  const [clickCount, setClickCount] = useState(0);
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Z-Index Overlay Conflict</h1>
        <div className="demo-badge-row">
          <span className="tag-badge css">CSS Issue</span>
          <span className="tag-badge js">Overlay Issue</span>
        </div>
        <p>
          This page demonstrates z-index overlaps where elements are visually positioned in one layout,
          but an invisible or transparent element with a higher `z-index` sits directly above them,
          blocking interaction. This makes buttons appear broken because mouse/pointer clicks are intercepted.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🥞 Toggle Layer Conflict</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Toggle between normal layers and broken layers. When broken, try clicking the "Increment Score" button.
        </p>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
          <button 
            className={`btn ${isBroken ? 'btn-success' : 'btn-danger'}`}
            onClick={() => setIsBroken(!isBroken)}
          >
            {isBroken ? 'Use Normal Layering' : 'Activate Z-Index Block'}
          </button>
        </div>

        <div 
          className="layer-box-demo" 
          style={{ 
            position: 'relative', 
            border: '2px dashed var(--border-color)', 
            padding: '40px 20px', 
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            overflow: 'hidden'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h4>Counter Value: <span style={{ fontSize: '24px', color: 'var(--color-primary)', fontWeight: 'bold' }}>{clickCount}</span></h4>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* The interactive button on low z-index */}
            <button 
              className="btn btn-primary"
              onClick={() => setClickCount(c => c + 1)}
              style={{ position: 'relative', zIndex: 1 }}
            >
              Increment Score
            </button>
          </div>

          {/* The blocking transparent overlay */}
          {isBroken && (
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(6, 182, 212, 0.08)', // Tinted slightly cyan so user can see the overlay boundaries
                border: '2px solid var(--color-primary)',
                zIndex: 99, // Placed on top of the button (zIndex 1)
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'not-allowed'
              }}
            >
              <div style={{ 
                backgroundColor: 'var(--bg-secondary)', 
                padding: '8px 16px', 
                borderRadius: '6px', 
                fontSize: '13px', 
                color: 'var(--color-danger)',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}>
                🔒 Invisible overlay blocking interaction (z-index: 99)
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '13px' }}>
          {isBroken 
            ? '🔴 Overlay is ACTIVE. Clicking the button should be blocked because the overlay intercepts mouse events.' 
            : '🟢 Overlay is INACTIVE. The button should click and increment the count normally.'}
        </div>
      </div>
    </div>
  );
}

export default CssZIndex;
