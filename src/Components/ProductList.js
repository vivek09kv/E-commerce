import React from "react";

export default function Products({ products, addToCart }) {
    return (
        <div className="page-container">
            <h2>Products</h2>
            <div className="product-list">
                {products.map((p) => (
                    <div key={p.id} className="product-card">
                        <img src={p.image} alt={p.name} className="product-image" />
                        <div className="product-info">
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            <p className="price">₹{p.price}</p>
                            <button onClick={() => addToCart(p)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
