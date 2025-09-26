import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AppContext from "../Context/Context";
import unplugged from "../assets/unplugged.png";
import Banner from "../components/home/Banner";

const Home = ({ selectedCategory }) => {
  const { data, isError, addToCart, refreshData } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      refreshData();
      setIsDataFetched(true);
    }
  }, [refreshData, isDataFetched]);

  useEffect(() => {
    if (data && data.length > 0) {
      const fetchImagesAndUpdateProducts = async () => {
        const updatedProducts = await Promise.all(
          data.map(async (product) => {
            try {
              const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/product/${product.id}/image`,
                { responseType: "blob" }
              );
              const imageUrl = URL.createObjectURL(response.data);
              return { ...product, imageUrl };
            } catch (error) {
              console.error(
                "Error fetching image for product ID:",
                product.id,
                error
              );
              return { ...product, imageUrl: "placeholder-image-url" };
            }
          })
        );
        setProducts(updatedProducts);
      };

      fetchImagesAndUpdateProducts();
    }
  }, [data]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <img
          src={unplugged}
          alt="Error"
          className="w-24 h-24 object-contain"
        />
      </div>
    );
  }

  return (
    <div className="mt-20 px-4 md:px-8 lg:px-12">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full flex justify-center items-center h-40">
            <h2 className="text-lg font-semibold text-gray-600">
              No Products Available
            </h2>
          </div>
        ) : (
          filteredProducts.map((product) => {
            const { id, brand, name, price, productAvailable, imageUrl } =
              product;
            return (
              <div
                key={id}
                className={`rounded-xl shadow-md flex flex-col justify-between transition hover:shadow-lg ${
                  productAvailable ? "bg-white" : "bg-gray-200"
                }`}
              >
                <Link
                  to={`/components/Product/${id}`}
                  className="flex flex-col h-full"
                >
                  {/* Product Image */}
                  <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />

                  {/* Product Info */}
                  <div className="flex flex-col flex-grow px-4 py-3">
                    <div>
                      <h5 className="font-semibold text-lg truncate">
                        {name.toUpperCase()}
                      </h5>
                      <p className="italic text-sm text-gray-600">
                        ~ {brand}
                      </p>
                    </div>

                    <hr className="my-3" />

                    <div>
                      <h5 className="font-bold text-gray-800 mb-2">
                        ₹ {price}
                      </h5>
                    </div>

                    <button
                      className={`mt-auto w-full rounded-lg py-2 text-white font-medium transition ${
                        productAvailable
                          ? "bg-amber-500 hover:bg-amber-600"
                          : "bg-gray-400 cursor-not-allowed"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      disabled={!productAvailable}
                    >
                      {productAvailable ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
