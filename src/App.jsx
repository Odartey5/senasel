import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Menu from './component/Menu/Menu';
import Reservation from './component/Reservation';
import Contact from './Pages/contactus';
import Footer from './component/Footer';
import HomePage from './Pages/HomePage/HomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMediaQuery } from '@mui/material';



// Main App component
const App = () => {
  // Use system preference for initial theme mode
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#ff6b6b', // Your brand color
          },
          secondary: {
            main: '#4ecdc4', // Your secondary color
          },
          background: {
            default: prefersDarkMode ? '#121212' : '#ffffff',
            paper: prefersDarkMode ? '#1e1e1e' : '#ffffff',
          },
        },
        typography: {
          fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
          h2: {
            fontSize: '2.5rem',
            '@media (max-width:600px)': {
              fontSize: '2rem',
            },
          },
          h5: {
            fontSize: '1.2rem',
            '@media (max-width:600px)': {
              fontSize: '1rem',
            },
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
                padding: '10px 24px',
              },
            },
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
   
    <ThemeProvider theme={theme}>
      <CssBaseline />
      { <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
      <Footer />
    </Router>}
    </ThemeProvider>
  );
};

export default App;