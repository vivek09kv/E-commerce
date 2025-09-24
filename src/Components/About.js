import React from "react";
import "../App.css";

export default function About() {
    return (
        <div className="page-container">
            {/* Card with side-by-side layout */}
            <div className="about-card">
                {/* Image on the left */}
                <div className="about-image">
                    <img src="/founder.jpg" alt="Founder" />
                </div>
                {/* Text on the right */}
                <div className="about-text">
                    <h3><u>Founder & Developer</u></h3>
                    <p>
                        Passionate about technology and innovation, the founder is the mind
                        behind this platform. From writing the first lines of code to
                        shaping the vision of the site, they continue to work on improving
                        features and user experience. Their mission is to make this site a
                        reliable, creative, and user-friendly space for everyone.
                    </p>
                    <a href="#" className="btn">Visit Site</a>
                </div>
            </div>

            {/* Paragraphs about the tool */}
            <div className="about-description">
                <p>
                    Welcome to our Mini E-Commerce platform — a simple, user-friendly online
                    shopping experience built to help users explore products, manage their cart,
                    and purchase items effortlessly. Whether you want to browse products,
                    add them to your cart, adjust quantities, or check the total price in real time,
                    our platform makes shopping smooth and intuitive.
                </p>
                <p>
                    In addition, the platform provides instant notifications for actions like adding
                    items to the cart, emptying the cart, or attempting a purchase, giving users clear
                    feedback and improving overall interaction. Our goal is to provide a seamless shopping
                    experience that saves time, enhances convenience, and helps anyone browse and
                    manage their purchases efficiently.
                </p>
                <p>
                    This platform is perfect for casual shoppers, tech enthusiasts, and anyone looking for
                    a small but functional online shopping experience. We are committed to continually
                    improving the site by adding features like secure checkout, product categories,
                    wishlist functionality, mobile responsiveness, and personalized recommendations,
                    making online shopping faster, smarter, and more enjoyable for everyone.
                </p>
            </div>
        </div>
    );
}
