'use client';
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Jewelry Shop</h3>
            <p className="text-sm">
              Discover exquisite jewelry designed with elegance and precision.
              Handcrafted with care to elevate your beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-sm hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-2xl hover:text-gray-400">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          <p>&copy; 2025 Jewelry Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

