//  External libraries dependencies
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// Routes
import { Login } from '@/routes';

// Components and Styled components
import { Container, Button } from '@/styled-components';
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
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      <div className='App'>
        <Container>import funcionando</Container>
        <Button>ola tkm</Button>
      </div>
    </>
  );
}

export default App;
