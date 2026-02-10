import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Global scroll-reveal observer
const setupScrollReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  // Observe all sections and major content blocks
  const observeElements = () => {
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });
  };

  // Initial observe + MutationObserver for dynamically added elements
  observeElements();
  const mutationObserver = new MutationObserver(() => observeElements());
  mutationObserver.observe(document.body, { childList: true, subtree: true });
};

// Wait for DOM to settle after React renders
setTimeout(setupScrollReveal, 500);
