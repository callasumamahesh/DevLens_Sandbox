import React, { useState } from 'react';

function Api404() {
  const [responseDetails, setResponseDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMissingEndpoint = async () => {
    setIsLoading(true);
    setResponseDetails(null);
    try {
      // Fetching a relative path that doesn't exist will return 404 (handled by dev server index.html or 404)
      const res = await fetch('/api/v1/missing-endpoint-details-999');
      
      setResponseDetails({
        status: res.status,
        statusText: res.statusText || (res.status === 404 ? 'Not Found' : ''),
        url: res.url,
        ok: res.ok
      });
      
      if (!res.ok) {
        console.error(`[Api404] API returned non-OK response: ${res.status} ${res.statusText}`);
      }
    } catch (err) {
      console.error("[Api404] Fetch failed:", err);
      setResponseDetails({ error: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>API 404 Response Failure</h1>
        <div className="demo-badge-row">
          <span className="tag-badge network">Network Failure</span>
          <span className="tag-badge js">Fetch 404</span>
        </div>
        <p>
          This page demonstrates how a application handles missing API endpoint responses. Clicking the button triggers a
          `fetch()` request to `/api/v1/missing-endpoint-details-999`, returning a `404 Not Found` response status.
          DevLens catches network activity and highlights failed HTTP response codes.
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🌐 Request missing endpoint</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the button below to initiate the fetch call.
        </p>

        <button 
          className="btn btn-danger" 
          onClick={fetchMissingEndpoint}
          disabled={isLoading}
          style={{ marginBottom: '20px' }}
        >
          {isLoading ? 'Fetching...' : 'Fetch /api/... (Will 404)'}
        </button>

        {responseDetails && (
          <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h4 style={{ marginBottom: '10px', color: responseDetails.ok ? 'var(--color-success)' : 'var(--color-danger)' }}>
              Response Status: {responseDetails.status} {responseDetails.statusText}
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '8px', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
              <span style={{ color: 'var(--text-muted)' }}>URL:</span>
              <span style={{ color: 'var(--text-main)', wordBreak: 'break-all' }}>{responseDetails.url}</span>
              <span style={{ color: 'var(--text-muted)' }}>Is OK:</span>
              <span style={{ color: responseDetails.ok ? 'var(--color-success)' : 'var(--color-danger)' }}>{String(responseDetails.ok)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Api404;
