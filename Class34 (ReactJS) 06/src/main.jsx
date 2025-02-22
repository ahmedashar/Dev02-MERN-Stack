import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import CountProvider from './context/count-context';
import ThemeProvider from './context/theme-context';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CountProvider>
        <App></App>
      </CountProvider>
    </ThemeProvider>
  </StrictMode>,
)
