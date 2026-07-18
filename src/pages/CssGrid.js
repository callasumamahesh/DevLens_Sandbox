import React, { useState } from 'react';

function CssGrid() {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Broken Grid Layout</h1>
        <div className="demo-badge-row">
          <span className="tag-badge css">CSS Issue</span>
          <span className="tag-badge js">Grid Bug</span>
        </div>
        <p>
          This page demonstrates a broken CSS Grid layout. Setting incorrect grid columns or rows can cause elements
          to overlap and cover each other within the same cell coordinates. Toggle the button below to view how
          misconfigured grid boundaries hide content.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🧮 Grid Container Controls</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Toggle the layout structure. When broken, multiple grid items are forced into the exact same column and row, overlapping completely.
        </p>

        <button 
          className={`btn ${isBroken ? 'btn-success' : 'btn-danger'}`} 
          onClick={() => setIsBroken(!isBroken)}
          style={{ marginBottom: '25px' }}
        >
          {isBroken ? 'Reset Grid to Correct' : 'Trigger Grid Overlap'}
        </button>

        <div style={{ border: '2px dashed var(--border-color)', padding: '20px', borderRadius: '12px' }}>
          <h4>CSS Grid Container</h4>
          
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridGap: '15px',
              marginTop: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '15px',
              borderRadius: '8px',
              position: 'relative'
            }}
          >
            {/* Grid Item 1 */}
            <div 
              style={{
                gridColumn: isBroken ? '1 / 2' : '1 / 2',
                gridRow: isBroken ? '1 / 2' : '1 / 2',
                backgroundColor: 'rgba(6, 182, 212, 0.3)',
                border: '2px solid var(--color-primary)',
                padding: '20px',
                borderRadius: '6px',
                zIndex: isBroken ? 2 : 1
              }}
            >
              <h5>📦 Grid Card A</h5>
              <p style={{ fontSize: '12px', marginTop: '10px' }}>
                This is card A. In broken mode, Card B overlaps this card completely.
              </p>
            </div>

            {/* Grid Item 2 */}
            <div 
              style={{
                // Overlapping coordinates in broken mode
                gridColumn: isBroken ? '1 / 2' : '2 / 3',
                gridRow: isBroken ? '1 / 2' : '1 / 2',
                backgroundColor: 'rgba(139, 92, 246, 0.3)',
                border: '2px solid var(--color-secondary)',
                padding: '20px',
                borderRadius: '6px',
                opacity: isBroken ? 0.85 : 1, // Slightly transparent so you see the overlap
                zIndex: 1
              }}
            >
              <h5>📦 Grid Card B</h5>
              <p style={{ fontSize: '12px', marginTop: '10px' }}>
                This is card B. In broken mode, it shares Row 1 / Col 1 with Card A.
              </p>
            </div>

            {/* Grid Item 3 (Always regular) */}
            {!isBroken && (
              <div 
                style={{
                  gridColumn: '1 / 3',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  padding: '15px',
                  borderRadius: '6px',
                  textAlign: 'center'
                }}
              >
                <h5>Grid Card C (Full Width)</h5>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '13px' }}>
          {isBroken 
            ? '🔴 Grid is BROKEN. Card B is sitting directly on top of Card A inside column 1, cell 1.' 
            : '🟢 Grid is CORRECT. Card A is on the left, Card B is on the right, and Card C spans the bottom.'}
        </div>
      </div>
    </div>
  );
}

export default CssGrid;
