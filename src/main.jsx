import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Created src/main.jsx as the React entry point that renders the App component into the #root element and loads index.css. The file follows the Vite + React + JavaScript conventions: it uses default exports, does not contain any router, and matches the existing codebase pattern. No new dependencies were added. To run, execute `npm run dev` as defined in package.json.