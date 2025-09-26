import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CheckoutPopup = ({ show, handleClose, cartItems, totalPrice }) => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true); // Show thank you animation
  };

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect home after animation
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced, navigate]);

  return (
    <div className="checkoutPopup">
      <Modal show={show} onHide={handleClose} centered>
        {!orderPlaced ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="checkout-items">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="checkout-item"
                    style={{ display: "flex", marginBottom: "10px" }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ width: "100px", marginRight: "10px" }}
                    />
                    <div>
                      <b>
                        <p>{item.name}</p>
                      </b>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
                <div>
                  <h5
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    Total: ${totalPrice}
                  </h5>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCheckout}>
                Confirm Purchase
              </Button>
            </Modal.Footer>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-6">
            {/* Green Circle with Animated Tick */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </motion.div>

            {/* Thank You Text */}
            <motion.h1
              className="mt-4 text-xl font-semibold text-gray-800 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Thank You for Your Purchase!
            </motion.h1>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CheckoutPopup;
