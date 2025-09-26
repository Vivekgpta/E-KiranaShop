import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./navigation/Logo";
import Categories from "./navigation/Categories";
import SearchBar from "./navigation/SearchBar";
import CartButton from "./navigation/CartButton"; // ✅ import
import Profile from "./navigation/Profile";
import AddProduct from "../pages/AddProduct";
import AddPro from "./navigation/AddPro";

const Navbar = ({ onSelectCategory }) => {
  const getInitialTheme = () => localStorage.getItem("theme") || "light-theme";
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const categories = [
    "Laptop",
    "Headphone",
    "Mobile",
    "Electronics",
    "Toys",
    "Fashion",
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top  bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
        <div className="container-fluid  h-20 ">
          <Logo />

          <div
            className="flex justify-between pl-2 navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav max-w-full flex items-center">
              <Categories
                categories={categories}
                onSelectCategory={onSelectCategory}
              />
              <SearchBar />
            </div>
            
             <div><AddPro/></div> 

            <div className="d-flex align-items-center gap-3">
              {/* ✅ Replaced cart div with CartButton */}
              <CartButton />

             <Profile/>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

