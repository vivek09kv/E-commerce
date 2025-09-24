import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import About from "./Components/About";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, description: "High performance laptop", image: "/laptop.jpg" },
    { id: 2, name: "Phone", price: 20000, description: "Latest smartphone", image: "/mobile.jpg" },
    { id: 3, name: "Headphones", price: 2000, description: "Noise-cancelling headphones", image: "/headphones.jpg" },
  ];

  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(""), 2000);
  };

  const addToCart = (product) => {
    const exists = cart.find((p) => p.id === product.id);
    if (exists) {
      setCart(cart.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showNotification(`${product.name} added to cart!`);
  };

  const removeFromCart = (product) => {
    if (product.quantity > 1) {
      setCart(cart.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p)));
    } else {
      setCart(cart.filter((p) => p.id !== product.id));
    }
  };

  const emptyCart = () => {
    setCart([]);
    showNotification("Cart emptied!");
  };

  const buyProducts = () => {
    if (cart.length === 0) {
      showNotification("Cart is empty!");
      return;
    }
    showNotification("This feature will come soon!");
  };

  return (
    <Router>
      <div>
        {/* Navbar fixed at top */}
        <nav className="navbar">
          <h1>🛍️ Mini E-Commerce</h1>
          <ul className="nav-links">
            <li><Link to="/">Products</Link></li>
            <li><Link to="/cart">Cart ({cart.length})</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        {/* Notification */}
        {notification && <div className="notification">{notification}</div>}

        {/* Main content */}
        <div className="main-container">
          <Routes>
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  removeFromCart={removeFromCart}
                  emptyCart={emptyCart}
                  buyProducts={buyProducts}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
