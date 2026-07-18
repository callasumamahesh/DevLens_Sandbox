import React, { useState } from 'react';

function DynamicRendering() {
  const [timerLoaded, setTimerLoaded] = useState(false);
  const [isTimerLoading, setIsTimerLoading] = useState(false);
  const [hoverLoaded, setHoverLoaded] = useState(false);
  const [clickItems, setClickItems] = useState([]);

  const triggerTimeoutLoad = () => {
    setIsTimerLoading(true);
    setTimerLoaded(false);
    setTimeout(() => {
      setIsTimerLoading(false);
      setTimerLoaded(true);
    }, 3000);
  };

  const handleHoverEnter = () => {
    setHoverLoaded(true);
  };

  const handleHoverLeave = () => {
    setHoverLoaded(false);
  };

  const loadClickItems = () => {
    const newItems = [
      { id: 1, text: '⚡ Lazy Element 1 (Hydrated)' },
      { id: 2, text: '⚡ Lazy Element 2 (Hydrated)' },
      { id: 3, text: '⚡ Lazy Element 3 (Hydrated)' }
    ];
    setClickItems(newItems);
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Dynamic DOM Rendering</h1>
        <div className="demo-badge-row">
          <span className="tag-badge dom">DOM Changes</span>
          <span className="tag-badge react">Dynamic DOM</span>
        </div>
        <p>
          This page renders elements dynamically in response to timers, hover gestures, and button clicks.
          DevLens needs to adapt to DOM sub-tree changes and analyze dynamic additions on the fly.
        </p>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        
        {/* Dynamic Timed Rendering */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">⏳ 3s Timeout Renderer</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            Click to render a hidden sub-tree after a 3-second delay.
          </p>
          
          <button 
            className="btn btn-primary" 
            onClick={triggerTimeoutLoad}
            disabled={isTimerLoading}
            style={{ marginBottom: '15px' }}
          >
            {isTimerLoading ? 'Loading after 3s...' : 'Start Timer (3s)'}
          </button>

          {isTimerLoading && <div style={{ color: 'var(--color-primary)', fontSize: '14px', marginBottom: '10px' }}>⏱️ Timer active...</div>}
          
          {timerLoaded && (
            <div 
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid var(--color-success)',
                padding: '12px',
                borderRadius: '8px',
              }}
            >
              🚀 <strong>Dynamically Loaded Content!</strong> This appeared after a 3000ms delay.
            </div>
          )}
        </div>

        {/* Hover-based Lazy Component */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">🖱️ Hover-to-Mount Component</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            Hover inside the frame below to dynamically insert a detail box.
          </p>
          
          <div 
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
            style={{
              height: '100px',
              border: '2px dashed var(--border-color)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {hoverLoaded ? (
              <div 
                style={{
                  position: 'absolute',
                  inset: '5px',
                  backgroundColor: 'var(--color-secondary-glow)',
                  border: '1px solid var(--color-secondary)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                ✨ Lazy Detail Box Mounted!
              </div>
            ) : (
              <span>Hover Mouse Here</span>
            )}
          </div>
        </div>

        {/* User Interaction Lazy Loading */}
        <div className="demo-card-container" style={{ marginBottom: 0 }}>
          <h3 className="demo-card-title">🖱️ Interaction Hydration</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '15px' }}>
            Click the button to dynamically populate list components.
          </p>
          
          <button 
            className="btn btn-secondary" 
            onClick={loadClickItems}
            style={{ marginBottom: '15px' }}
          >
            Hydrate List Items
          </button>

          {clickItems.length > 0 && (
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none' }}>
              {clickItems.map(item => (
                <li 
                  key={item.id}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                    fontSize: '13px'
                  }}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

export default DynamicRendering;
