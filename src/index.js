import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App wrapped in BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Performance measurement
reportWebVitals();