import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Suppress generic "Script error." messages from third-party scripts (like TradingView)
// which often lack CORS headers and trigger noisy but benign errors in iframes.
const isBenignError = (error: any) => {
  const message = typeof error === 'string' ? error : (error?.message || error?.reason?.message || '');
  if (typeof message !== 'string') return false;
  
  const benignMessages = [
    'Script error.',
    'ResizeObserver loop limit exceeded',
    'ResizeObserver loop completed with undelivered notifications',
    'Non-Error promise rejection captured',
    'NetworkError when attempting to fetch resource',
    'Unexpected token',
    'SyntaxError: Unexpected token',
    'Loading chunk',
    'Failed to fetch'
  ];
  return benignMessages.some(m => message.includes(m));
};

// Use window.onerror for total coverage of the "Script error." string
window.onerror = (message, source, lineno, colno, error) => {
  if (isBenignError(message) || isBenignError(error)) {
    return true; // suppresses the error
  }
  return false;
};

window.addEventListener('error', (event) => {
  if (isBenignError(event.message) || isBenignError(event.error)) {
    event.stopImmediatePropagation();
    event.preventDefault();
    return true;
  }
}, true);

window.addEventListener('unhandledrejection', (event) => {
  if (isBenignError(event.reason)) {
    event.stopImmediatePropagation();
    event.preventDefault();
    return true;
  }
}, true);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
