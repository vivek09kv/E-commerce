import React from "react";

export default function CartPage({ cart, removeFromCart, emptyCart, buyProducts }) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="page-container">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty 🛒</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-image" />
                            <span>{item.name} – ₹{item.price} × {item.quantity}</span>
                            <button onClick={() => removeFromCart(item)}>-</button>
                        </div>
                    ))}
                    <h3>Total: ₹{total}</h3>
                    <div className="cart-buttons">
                        <button onClick={emptyCart}>Empty Cart</button>
                        <button onClick={buyProducts}>Buy Now</button>
                    </div>
                </>
            )}
        </div>
    );
}
