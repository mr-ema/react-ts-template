// * Necesary to use 'module.hot' with typescript
/// <reference types="webpack-env" />

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);

root.render(<App />);

// Use HMR IF Hot Is True In Webpack.dev.js 
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  if (module.hot) { module.hot.accept(); }
}