import React from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

const App:React.FC = () => {
  const user = true
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={user?<Navigate to="/"/>:<Login/>}/>
        <Route path="/register" element={user?<Navigate to="/"/>:<Register/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
