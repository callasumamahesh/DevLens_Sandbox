/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';

// Import Pages
import Home from './pages/Home';
import MapNotFunction from './pages/MapNotFunction';
import UndefinedProperty from './pages/UndefinedProperty';
import EventErrors from './pages/EventErrors';
import ReactKey from './pages/ReactKey';
import InfiniteUseEffect from './pages/InfiniteUseEffect';
import MemoryLeak from './pages/MemoryLeak';
import CssOverflow from './pages/CssOverflow';
import CssZIndex from './pages/CssZIndex';
import CssFlexbox from './pages/CssFlexbox';
import CssGrid from './pages/CssGrid';
import Accessibility from './pages/Accessibility';
import DomMutations from './pages/DomMutations';
import DynamicRendering from './pages/DynamicRendering';
import ConsoleDemo from './pages/ConsoleDemo';
import Api404 from './pages/Api404';
import NetworkError from './pages/NetworkError';
import PromiseError from './pages/PromiseError';

// Wrapper helper to supply page isolation using ErrorBoundary
const wrapWithBoundary = (Component) => (
  <ErrorBoundary>
    <Component />
  </ErrorBoundary>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={wrapWithBoundary(Home)} />
          
          {/* JavaScript Errors */}
          <Route path="/errors/map-not-function" element={wrapWithBoundary(MapNotFunction)} />
          <Route path="/errors/undefined-property" element={wrapWithBoundary(UndefinedProperty)} />
          <Route path="/event-errors" element={wrapWithBoundary(EventErrors)} />
          
          {/* React Issues */}
          <Route path="/errors/react-key" element={wrapWithBoundary(ReactKey)} />
          <Route path="/errors/infinite-useeffect" element={wrapWithBoundary(InfiniteUseEffect)} />
          <Route path="/errors/memory-leak" element={wrapWithBoundary(MemoryLeak)} />
          
          {/* CSS Issues */}
          {/* <Route path="/css/overflow" element={wrapWithBoundary(CssOverflow)} />
          <Route path="/css/z-index" element={wrapWithBoundary(CssZIndex)} />
          <Route path="/css/flexbox" element={wrapWithBoundary(CssFlexbox)} />
          <Route path="/css/grid" element={wrapWithBoundary(CssGrid)} /> */}
          
          {/* Network & Promise Errors */}
          <Route path="/errors/api-404" element={wrapWithBoundary(Api404)} />
          <Route path="/errors/network-error" element={wrapWithBoundary(NetworkError)} />
          <Route path="/promise-error" element={wrapWithBoundary(PromiseError)} />
          
          {/* DOM & Console Tracker */}
          {/* <Route path="/dom/mutations" element={wrapWithBoundary(DomMutations)} />
          <Route path="/dynamic-rendering" element={wrapWithBoundary(DynamicRendering)} />
          <Route path="/console" element={wrapWithBoundary(ConsoleDemo)} />
          <Route path="/accessibility" element={wrapWithBoundary(Accessibility)} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
