// import React from 'react';
// import ReactDOM from 'react-dom/client';
import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import '@/assets/css/base/settings.css';
// import 'sanitize.css';
// import 'sanitize.css/forms.css';
// import 'sanitize.css/typography.css';
import '@/assets/css/global.css';
import App from './App';

const el = document.getElementById('root');
if (el === null) throw new Error('Root container missing in index.html');

// Create a client for react-query
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
