import React, { useState } from 'react';

function CssFlexbox() {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Broken Flexbox Layout</h1>
        <div className="demo-badge-row">
          <span className="tag-badge css">CSS Issue</span>
          <span className="tag-badge js">Layout Bug</span>
        </div>
        <p>
          This page demonstrates a broken flexbox layout. A common flexbox mistake is omitting wrapping rules
          (`flex-wrap: wrap`) on dynamic content lists or forcing conflicting item dimensions, which causes flex items
          to shrink beyond readability, squeeze content, or blow past their borders.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">📦 Flexbox Container Controls</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Toggle the layout structure. When broken, cards will be forced to fit horizontally in a tiny row without wrapping, squeezing all content.
        </p>

        <button 
          className={`btn ${isBroken ? 'btn-success' : 'btn-danger'}`} 
          onClick={() => setIsBroken(!isBroken)}
          style={{ marginBottom: '25px' }}
        >
          {isBroken ? 'Reset Flexbox to Correct' : 'Trigger Squeezed Flexbox'}
        </button>

        <div style={{ border: '2px dashed var(--border-color)', padding: '20px', borderRadius: '12px', overflow: 'hidden' }}>
          <h4>Flexbox Parent Container</h4>
          
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: isBroken ? 'nowrap' : 'wrap', // Broken: no wrap
              gap: '15px',
              marginTop: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '15px',
              borderRadius: '8px',
              width: '100%',
              maxWidth: '600px', // Restrict size to observe squeezing
            }}
          >
            {/* Flex Items */}
            {[1, 2, 3, 4, 5].map(num => (
              <div 
                key={num}
                style={{
                  background: 'linear-gradient(135deg, var(--color-secondary), rgba(139, 92, 246, 0.4))',
                  padding: '15px',
                  borderRadius: '6px',
                  // In broken mode, we don't allow shrink and force a wide min-width, OR let it shrink and squeeze the text
                  flex: isBroken ? '1 1 150px' : '1 1 calc(33.333% - 15px)',
                  minWidth: isBroken ? 'unset' : '150px', // letting it shrink completely if broken
                  color: 'white',
                  textAlign: 'center',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <h5>Card #{num}</h5>
                <p style={{ fontSize: '11px', marginTop: '5px', wordBreak: isBroken ? 'break-all' : 'normal' }}>
                  {isBroken ? "SqueezedTextNoSpace" : "This card wraps and reads correctly."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '20px', color: 'var(--text-muted)', fontSize: '13px' }}>
          {isBroken 
            ? '🔴 Flexbox is BROKEN. Notice how Cards are squashed inside the 600px container because they are not wrapping.' 
            : '🟢 Flexbox is CORRECT. Cards wrap automatically into multiple rows if space is insufficient.'}
        </div>
      </div>
    </div>
  );
}

export default CssFlexbox;
