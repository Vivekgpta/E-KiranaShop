import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const placeholders = [
  "Search for fruits…",
  "Search for vegetables…",
  "Search for snacks…",
  "Search for dairy products…",
];

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const searchRef = useRef();

  // Rotate placeholder every 2.5s (if input is empty)
  useEffect(() => {
    if (input.trim()) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [input]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = async (value) => {
    setInput(value);
    if (value.trim().length >= 1) {
      setShowSearchResults(true);
      try {
        const response = await axios.get(
          `https://e-kirana-shop.onrender.com/api/product/search?keyword=${value}`
        );
        setSearchResults(response.data);
        setNoResults(response.data.length === 0);
      } catch (error) {
        console.error("Error searching:", error);
      }
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
      setNoResults(false);
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md mx-auto">
      {/* Search input with animated placeholder */}
      <div className="relative flex items-center">
        <Search className="absolute left-3 text-gray-400 w-5 h-5" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 overflow-hidden h-5 text-gray-400 pointer-events-none">
          <AnimatePresence mode="wait">
            {!input && (
              <motion.span
                key={placeholderIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                {placeholders[placeholderIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <input
          type="search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          aria-label="Search"
          className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 transition-all shadow-sm placeholder-transparent"
          placeholder=" " // keep placeholder for accessibility but hidden
        />
      </div>

      {/* Dropdown for results */}
      {showSearchResults && (
        <div className="absolute top-full left-0 mt-2 w-full rounded-lg bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <Link
                key={result.id}
                to={`/product/${result.id}`}
                className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                onClick={() => setShowSearchResults(false)}
              >
                {result.name}
              </Link>
            ))
          ) : (
            noResults && (
              <p className="px-4 py-3 text-gray-500">No product found</p>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
