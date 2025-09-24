import { useState } from "react";

const Offer = ({ categories = [], onSelectCategory }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseLeave={() => setOpen(false)} // Close dropdown when mouse leaves the area
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-red-500 bg-amber-600 pl-12  text-2xl dark:text-white hover:text-blue-500 focus:outline-none"
      >
        Offer 
      </button>

      {/* Animated Dropdown */}
      <ul
        className={`absolute left-0 mt-2 w-56 bg-yellow-200 dark:bg-gray-800 shadow-lg rounded py-1 transform transition-all duration-300 origin-top ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {categories.map((category) => (
          <li key={category}>
            <button
              className="block w-full text-left px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={() => {
                onSelectCategory?.(category);
                setOpen(false); // Close dropdown on selection
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offer;
