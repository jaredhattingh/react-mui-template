import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { useDarkTheme } from './Recoil/ThemeAtom';
import Auth0Provider from './Auth/Auth0Provider';
import RequireAuth from './Auth/RequireAuth';

import variants from './theme';

import Login from './Pages/Login';
import Home from './Pages/Home';
import NotFound404 from './Pages/NotFound404';

function App() {
  const darkTheme = useRecoilValue(useDarkTheme);

  return (
    <ThemeProvider
      theme={!darkTheme ? variants.darkTheme : variants.lightTheme}
    >
      <CssBaseline />
      <Router>
        <Auth0Provider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route element={<RequireAuth />}>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<NotFound404 />} />
            </Route>
          </Routes>
        </Auth0Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
