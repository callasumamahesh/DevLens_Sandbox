import React, { useState } from 'react';

function NetworkError() {
  const [errorDetails, setErrorDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const triggerNetworkError = async () => {
    setIsLoading(true);
    setErrorDetails(null);
    try {
      // Fetching an invalid domain will fail to resolve DNS, throwing an uncaught TypeError in the browser network log
      await fetch('https://invalid-domain-does-not-exist-at-all-9999.com/data/feed');
    } catch (err) {
      console.error("[NetworkError] Caught fetch rejection:", err);
      setErrorDetails({
        message: err.message,
        name: err.name,
        stack: err.stack
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="demo-page">
      <div className="demo-page-intro">
        <h1>Broken Network Request</h1>
        <div className="demo-badge-row">
          <span className="tag-badge network">Network Failure</span>
          <span className="tag-badge js">Connection Error</span>
        </div>
        <p>
          This page demonstrates a failed network connection. Clicking the button attempts to fetch data from
          an unregistered domain (`https://invalid-domain-does-not-exist-at-all-9999.com`), causing the browser to
          fail at DNS resolution and throw a network error (`TypeError: Failed to fetch`).
        </p>
      </div>

      <div className="demo-card-container">
        <h3 className="demo-card-title">🔌 Connect to invalid domain</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
          Click the button below to force a network-level fetch failure.
        </p>

        <button 
          className="btn btn-danger" 
          onClick={triggerNetworkError}
          disabled={isLoading}
          style={{ marginBottom: '20px' }}
        >
          {isLoading ? 'Connecting...' : 'Request Invalid Domain (Will Fail)'}
        </button>

        {errorDetails && (
          <div style={{ backgroundColor: 'rgba(244, 63, 94, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--color-danger)' }}>
              Captured Exception: {errorDetails.name}
            </h4>
            <p style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', marginBottom: '8px' }}>
              <strong>Message:</strong> {errorDetails.message}
            </p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              Note: The browser also logs a severe net::ERR_NAME_NOT_RESOLVED system error to the console.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NetworkError;
