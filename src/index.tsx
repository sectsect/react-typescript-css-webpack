// import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import '@/assets/css/base/settings.css';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '@/index.css';
import App from './App';

const el = document.getElementById('root');
if (el === null) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
