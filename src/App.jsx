import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";
import Product from "./components/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/Context";
import UpdateProduct from "./components/UpdateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/navigation/Login";
import SignUp from "./components/navigation/SignUp";
import Footer from './components/footer/Footer'
import Banner from "./components/home/Banner";
import CategorieItem from "./components/home/CategorieItem";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar onSelectCategory={handleCategorySelect}
         />
         <Banner/>
         <CategorieItem/>
        <Routes>
          <Route
            path="/"
            element={
              <Home addToCart={addToCart} selectedCategory={selectedCategory}
              />
            }
          />
          {/* <Route path="/add_product" element={<AddProduct />} /> */}
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/product" element={<Product  />} />
          <Route path="product/:id" element={<Product  />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/update/:id" element={<UpdateProduct />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
