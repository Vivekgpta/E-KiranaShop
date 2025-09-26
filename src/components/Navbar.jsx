import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./navigation/Logo";
import Categories from "./navigation/Categories";
import SearchBar from "./navigation/SearchBar";
import CartButton from "./navigation/CartButton";
import Profile from "./navigation/Profile";

const Navbar = ({ onSelectCategory }) => {
  const getInitialTheme = () => localStorage.getItem("theme") || "light-theme";
  const [theme, setTheme] = useState(getInitialTheme());
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const categories = ["Laptop", "Headphone", "Mobile", "Electronics", "Toys", "Fashion"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Logo />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <Categories categories={categories} onSelectCategory={onSelectCategory} />
          <SearchBar />
        </div>

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <CartButton />
          <Profile />
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-4 pb-4 bg-white shadow-md">
          <Categories categories={categories} onSelectCategory={onSelectCategory} />
          <SearchBar />
          <div className="flex items-center gap-4">
            <CartButton />
            <Profile />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
