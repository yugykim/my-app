import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
=======
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
>>>>>>> eb64b77074af1106f81b26b74833ea9aab098c45
import App from './App';
import { darkTheme } from './theme';

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <RecoilRoot>
<<<<<<< HEAD
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
=======
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
>>>>>>> eb64b77074af1106f81b26b74833ea9aab098c45
    </RecoilRoot>
  </React.StrictMode >,
);

