import { Context } from './context.js';
import './App.css';
import HomePage from './containers/homepage';
import Cart from './containers/cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [cart, setcart] = useState([])
  return (
    <Context.Provider value={[cart, setcart]}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
