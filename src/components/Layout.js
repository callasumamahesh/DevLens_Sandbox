import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigationGroups = [
  {
    title: "Dashboard",
    items: [
      { path: "/", label: "🏠 Home Overview" }
    ]
  },
  {
    title: "JavaScript Errors",
    items: [
      { path: "/errors/map-not-function", label: "❌ map() is not a function" },
      { path: "/errors/undefined-property", label: "❌ Property of Undefined" },
      { path: "/event-errors", label: "💥 Event Handler Crash" }
    ]
  },
  {
    title: "React Issues",
    items: [
      { path: "/errors/react-key", label: "⚠️ Missing Key Warning" },
      { path: "/errors/infinite-useeffect", label: "🔄 Infinite useEffect Loop" },
      // { path: "/errors/memory-leak", label: "💧 Memory Leak" }
    ]
  },
  // {
  //   title: "CSS Layout Issues",
  //   items: [
  //     { path: "/css/overflow", label: "↔️ CSS Horizontal Overflow" },
  //     { path: "/css/z-index", label: "🥞 Z-Index Overlay Conflict" },
  //     { path: "/css/flexbox", label: "📦 Broken Flexbox Layout" },
  //     { path: "/css/grid", label: "🧮 Broken Grid Layout" }
  //   ]
  // },
  {
    title: "Network & Promise Errors",
    items: [
      // { path: "/errors/api-404", label: "🌐 API 404 Failure" },
      { path: "/errors/network-error", label: "🔌 Broken Network Request" },
      { path: "/promise-error", label: "🤝 Unhandled Promise Rejection" }
    ]
  },
  // {
  //   title: "DOM & Console Tracker",
  //   items: [
  //     { path: "/dom/mutations", label: "🧬 DOM Mutation Observer" },
  //     { path: "/dynamic-rendering", label: "⏳ Dynamic DOM Rendering" },
  //     { path: "/console", label: "📟 Console Methods Output" },
  //     { path: "/accessibility", label: "♿ Accessibility Violations" }
  //   ]
  // }
];

function Layout({ children }) {
  const location = useLocation();

  // Find the active item for displaying in the breadcrumbs / title
  let activeItem = null;
  for (const group of navigationGroups) {
    const item = group.items.find(i => i.path === location.pathname);
    if (item) {
      activeItem = item;
      break;
    }
  }

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">🔍</div>
          <div className="brand-text">
            <h2>DevLens</h2>
            <span>Error Playground</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navigationGroups.map((group, idx) => (
            <div key={idx} className="nav-group">
              <h4 className="nav-group-title">{group.title}</h4>
              <ul className="nav-group-list">
                {group.items.map((item, itemIdx) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <li key={itemIdx} className="nav-item-wrapper">
                      <Link
                        to={item.path}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="main-wrapper">
        <header className="main-header">
          <div className="header-breadcrumbs">
            <span className="crumb">Playground</span>
            <span className="crumb-separator">/</span>
            <span className="crumb active">
              {activeItem ? activeItem.label.replace(/^[^\s]+\s+/, '') : 'Page'}
            </span>
          </div>
          <div className="header-actions">
            <span className="playground-badge">Testing Environment</span>
          </div>
        </header>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
