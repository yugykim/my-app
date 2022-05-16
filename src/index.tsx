import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container!); 

root.render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
       <ThemeProvider theme={theme}>
         <App />
       </ThemeProvider>
     </QueryClientProvider>
  </React.StrictMode>,
);

