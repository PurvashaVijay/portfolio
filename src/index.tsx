import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css'; // Use your globals.css instead of index.css

// Optional: Import reportWebVitals if you want to use performance monitoring
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Call reportWebVitals if you want performance monitoring
// reportWebVitals(console.log);