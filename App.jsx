import React from "react";
import {Routes, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Admin from "./Pages/Admin";

import Services from "./Pages/Services";
import Category from "./Pages/Category";

import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
     <div>
      
    <Navbar />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services/>}/>
      <Route path="/:categoryName" element={<Category/>}/>
      <Route path="/products" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>

    <Footer />

    
    </div>
    </>
  
  );
}
