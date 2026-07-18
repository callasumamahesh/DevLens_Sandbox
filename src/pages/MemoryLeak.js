import React, { useState, useEffect, useRef } from 'react';

// Create a global container for leaked memory references
window.leakedMemoryStore = window.leakedMemoryStore || [];
window.leakedListenersCount = window.leakedListenersCount || 0;

function MemoryLeak() {
  const [isRunning, setIsRunning] = useState(false);
  const [leakSize, setLeakSize] = useState(window.leakedMemoryStore.length);
  const [listenerCount, setListenerCount] = useState(window.leakedListenersCount);
  
  const intervalRef = useRef(null);

  const startLeak = () => {
    if (isRunning) return;
    setIsRunning(true);

    // 1. Leak via uncleared Interval
    intervalRef.current = setInterval(() => {
      const largeString = new Array(50000).fill('leak-payload-data').join('-');
      window.leakedMemoryStore.push({
        timestamp: new Date().toISOString(),
        data: largeString
      });
      setLeakSize(window.leakedMemoryStore.length);
      console.warn(`[MemoryLeak] Uncleared interval running. Total items: ${window.leakedMemoryStore.length}`);
    }, 500);

    // 2. Leak via event listeners on window
    const leakedResizeHandler = () => {
      console.warn(`[MemoryLeak] Leaked resize listener active. Items in store: ${window.leakedMemoryStore.length}`);
    };
    window.addEventListener('resize', leakedResizeHandler);
    window.leakedListenersCount += 1;
    setListenerCount(window.leakedListenersCount);
  };

  const stopLeak = () => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // INTENTIONAL BUG: Omit cleanup function in useEffect.
  // The component unmounts but we do NOT clear the intervalRef or the resize listeners!
  useEffect(() => {
    return () => {
      console.log("[MemoryLeak] Component unmounted. (Notice that intervals and resize listeners were NOT cleared!)");
    };
  }, []);

  const clearLeakMemory = () => {
    stopLeak();
    window.leakedMemoryStore = [];
    window.leakedListenersCount = 0;
    setLeakSize(0);
    setListenerCount(0);
    console.log("[MemoryLeak] Leaked resources cleared.");
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>JS Memory Leak Simulation</h1>
        <div className="demo-badge-row">
          <span className="tag-badge react">React Issue</span>
          <span className="tag-badge js">Memory Leak</span>
        </div>
        <p>
          This page demonstrates two common types of memory leaks:
          an <strong>uncleared setInterval</strong> and <strong>accumulated window event listeners</strong>. 
          You can start and stop the leak while on this page. However, if you navigate away (unmount the component) 
          without clicking stop, the background tasks continue running in the browser, leaking memory.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">💧 Leak Status</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Status:</span>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: isRunning ? 'var(--color-danger)' : 'var(--color-success)', marginTop: '4px' }}>
              {isRunning ? '🔴 ACTIVE LEAK' : '🟢 IDLE'}
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Leaked Objects:</span>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-main)', marginTop: '4px' }}>
              {leakSize} elements
            </div>
          </div>
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Leaked Listeners:</span>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text-main)', marginTop: '4px' }}>
              {listenerCount} active
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {isRunning ? (
            <button className="btn btn-secondary" onClick={stopLeak}>
              Stop Appending
            </button>
          ) : (
            <button className="btn btn-danger" onClick={startLeak}>
              Start Memory Leak
            </button>
          )}
          <button className="btn btn-primary" onClick={clearLeakMemory}>
            Reset & Clear Resources
          </button>
        </div>
        
        {isRunning && (
          <div style={{ marginTop: '20px', color: 'var(--color-warning)', fontSize: '14px' }}>
            ⚠️ <strong>Notice:</strong> Try starting the leak, then navigate to Home. You will see warning logs continue to print in your DevTools console, showing the background tasks are still running!
          </div>
        )}
      </div>
    </div>
  );
}

export default MemoryLeak;
