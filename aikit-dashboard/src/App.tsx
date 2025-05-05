import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { useTheme } from './contexts/ThemeContext';
import { createAppTheme } from './theme';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import About from './pages/About';

const ThemedApp: React.FC = () => {
  const { mode } = useTheme();
  const theme = createAppTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <ThemedApp />
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
