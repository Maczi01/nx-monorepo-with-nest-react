import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser';
import App from './app/app';

// worker.start();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
