// src/components/navigation/CartButton.jsx
import { Link } from "react-router-dom";

const AddPro = () => {
  return (
    <div className="bg-gray-300 flex flex-row w-28 p-2 h-12 rounded-lg items-center justify-center text-white font-semibold hover:bg-green-600 transition-all duration-300 ease-in-out" onClick={() => setOpen(!open)}>
      <Link to="/add_product" className="nav-link ">
        <i
          className="bi bi-cart me-2 text-white"
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
          }}
        ></i>
      </Link>
      Product
    </div>
  );
};

export default AddPro;
