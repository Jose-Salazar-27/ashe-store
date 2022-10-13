//  External libraries dependencies
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Routes
import { Login, Home } from '@/routes';

// Components and Styled components
import { Navbar } from '@/components';
import { Container, Button, appTheme } from '@/styled-components';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then(console.log);
  }, []);

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <div className='App'>
          <Container>import funcionando</Container>
          <Button>ola tkm</Button>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
