import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Conformation from './Pages/Conformation';
import Filter from './Pages/Filter';
import ProductDetailPage from './Pages/ProductDetailPage';

const App = () => {
  const [order,setOrder]= useState(null)
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/shop" element={<Shop />} />
      <Route path ="/cart" element={<Cart />} />
      <Route path ="/checkout" element={<Checkout setOrder={setOrder} />} />
      <Route path='/confirmation' element={<Conformation order={order} />} />
      <Route path='/filter-data' element={<Filter />} />
      <Route path = "/product/:id" element={<ProductDetailPage />} /> 
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
};

export default App;