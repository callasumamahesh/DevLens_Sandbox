import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // Go to homepage
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-card">
            <div className="error-boundary-header">
              <span className="error-icon">⚠️</span>
              <h2>Render Error Captured</h2>
            </div>
            <p className="error-description">
              This error was intentionally triggered during component rendering to test DevLens detection.
            </p>
            <div className="error-details">
              <div className="error-message">
                <strong>Type/Message:</strong> {this.state.error?.toString()}
              </div>
              {this.state.errorInfo && (
                <details className="error-stack-details">
                  <summary>View Component Stack Trace</summary>
                  <pre className="error-stack">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
            <button className="error-reset-btn" onClick={this.handleReset}>
              Return to Safety (Home)
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
