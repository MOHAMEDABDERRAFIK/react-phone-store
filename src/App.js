import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import Model from './components/Model';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route element={<Default/>} />
      </Routes>
      <Model />
    </React.Fragment>
  );
}

export default App;
