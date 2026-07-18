import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "JavaScript Errors",
    icon: "🟡",
    cssClass: "js-card",
    items: [
      {
        title: "map() is not a function",
        path: "/errors/map-not-function",
        description: "Attempts to call the .map() array helper on an object, triggering a TypeError on render.",
        badge: "Render Crash"
      },
      {
        title: "Cannot read property of undefined",
        path: "/errors/undefined-property",
        description: "Attempts to read properties off of a nested undefined object during rendering, throwing an exception.",
        badge: "Render Crash"
      },
      {
        title: "Event Handler Crash",
        path: "/event-errors",
        description: "Throws a JavaScript error inside a button's onClick event handler. Caught by window.onerror.",
        badge: "Runtime Error"
      }
    ]
  },
  {
    name: "React Warnings & Loops",
    icon: "⚛️",
    cssClass: "react-card",
    items: [
      {
        title: "Missing Key Warning",
        path: "/errors/react-key",
        description: "Renders a dynamic list of items without React key attributes, producing a console warning.",
        badge: "Console Warning"
      },
      {
        title: "Infinite useEffect Loop",
        path: "/errors/infinite-useeffect",
        description: "Triggers an infinite render loop in React by modifying a state variable inside useEffect without dependencies.",
        badge: "Infinite Loop"
      },
      // {
      //   title: "Memory Leak",
      //   path: "/errors/memory-leak",
      //   description: "Spawns intervals and mounts listeners that continue running after component unmounts, leaking memory.",
      //   badge: "Memory Leak"
      // }
    ]
  },
  // {
  //   name: "CSS Layout & Layers",
  //   icon: "🎨",
  //   cssClass: "css-card",
  //   items: [
  //     {
  //       title: "CSS Horizontal Overflow",
  //       path: "/css/overflow",
  //       description: "Force elements to overflow horizontally off-screen, causing a broken viewport scroll layout.",
  //       badge: "Visual Bug"
  //     },
  //     {
  //       title: "Z-Index Layering Conflict",
  //       path: "/css/z-index",
  //       description: "Renders transparent elements positioned on top of interactive buttons, blocking user click events.",
  //       badge: "Overlay Issue"
  //     },
  //     {
  //       title: "Broken Flexbox Layout",
  //       path: "/css/flexbox",
  //       description: "Implements a broken CSS flex layout where text/items shrink, overlap or stretch incorrectly.",
  //       badge: "Layout Bug"
  //     },
  //     {
  //       title: "Broken Grid Layout",
  //       path: "/css/grid",
  //       description: "Implements an incorrect CSS grid setup where grid elements overlap or misalign.",
  //       badge: "Grid Bug"
  //     }
  //   ]
  // },
  {
    name: "Network & Promise Failures",
    icon: "🌐",
    cssClass: "network-card",
    items: [
      // {
      //   title: "API 404 Failure",
      //   path: "/errors/api-404",
      //   description: "Fires a fetch request to a non-existent local route to test how DevLens captures 404 responses.",
      //   badge: "Fetch 404"
      // },
      {
        title: "Broken Network Request",
        path: "/errors/network-error",
        description: "Fires a fetch request to an unreachable domain name, generating a network exception/CORS error.",
        badge: "Net Error"
      },
      {
        title: "Unhandled Promise Rejection",
        path: "/promise-error",
        description: "Rejects a promise using a button trigger without any catch handler, firing unhandledrejection event.",
        badge: "Rejection"
      }
    ]
  },
  // {
  //   name: "DOM & Console Tracking",
  //   icon: "⚙️",
  //   cssClass: "dom-card",
  //   items: [
  //     {
  //       title: "DOM Mutation Tracker",
  //       path: "/dom/mutations",
  //       description: "Directly manipulates attributes, text nodes, and list nodes via window DOM APIs to verify MutationObservers.",
  //       badge: "DOM Mutation"
  //     },
  //     {
  //       title: "Dynamic DOM Rendering",
  //       path: "/dynamic-rendering",
  //       description: "Inserts and updates DOM sub-trees using timers and asynchronous triggers to test dynamic scanning.",
  //       badge: "Dynamic DOM"
  //     },
  //     {
  //       title: "Console Methods Output",
  //       path: "/console",
  //       description: "Provides interfaces to write messages using log, warn, info, error, and table console handlers.",
  //       badge: "Console Outputs"
  //     },
  //     {
  //       title: "Accessibility Violations",
  //       path: "/accessibility",
  //       description: "Presents images without alt tags, low contrast colors, form elements without labels, and bad ARIA.",
  //       badge: "A11y Issue",
  //       customClass: "a11y-card"
  //     }
  //   ]
  // }
];

function Home() {
  return (
    <div className="home-dashboard">
      <div className="demo-page-intro">
        <h1>DevLens Error Demonstration Sandbox</h1>
        <p>
          Welcome to the sandbox testing environment. This React application intentionally contains different frontend
          exceptions, console warnings, network failures, CSS layouts conflicts, and DOM mutation triggers. Open your
          DevLens extension and click on any test below to inspect its behavior and verify detection.
        </p>
      </div>

      {categories.map((cat, idx) => (
        <section key={idx} className="dashboard-section">
          <h3 className="dashboard-section-title">
            <span>{cat.icon}</span> {cat.name}
          </h3>
          <div className="dashboard-grid">
            {cat.items.map((item, itemIdx) => {
              const cardClass = item.customClass || cat.cssClass;
              return (
                <Link
                  key={itemIdx}
                  to={item.path}
                  className={`dashboard-card ${cardClass}`}
                >
                  <div className="card-header">
                    <span className="card-title">{item.title}</span>
                    <span className="card-icon">{cat.icon}</span>
                  </div>
                  <p className="card-description">{item.description}</p>
                  <div className="card-footer">
                    <span className="card-category">{item.badge}</span>
                    <span className="card-link-arrow">Inspect &rarr;</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
