//  External libraries dependencies
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Routes
import { Login, Home } from '@/pages';

// Components and Styled components
import { Navbar } from '@/components';
import { Container, Button, appTheme } from '@/styled-components';
import './App.css';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then(console.log);
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme ? appTheme.dark : appTheme.light}>
        <Navbar darkTheme={darkTheme} />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <div className='App'></div>
      </ThemeProvider>
    </>
  );
}
