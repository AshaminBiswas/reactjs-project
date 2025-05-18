

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaTag } from 'react-icons/fa';

const SaleOn = () => {
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    // Fetch products from localStorage
    const allProducts = JSON.parse(localStorage.getItem('products')) || [];
    // Filter out only products that are on sale
    const discountedProducts = allProducts.filter(
      (product) => product.discountPrice
    );
    setSaleProducts(discountedProducts);
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      alert('Product added to cart!');
    } else {
      alert('Product is already in the cart!');
    }
  };

  const calculateDiscount = (originalPrice, discountPrice) => {
    return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🔥 Sale On</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {saleProducts.length > 0 ? (
          saleProducts.map((product) => (
            <div key={product.id} className="group relative border rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-500">Price: ₹{product.discountPrice} </p>
                <span className="text-red-500">-{calculateDiscount(product.price, product.discountPrice)}%</span>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center space-x-2"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-600">No sale products available.</p>
        )}
      </div>
      <Link to="/cart">
        <button className="mt-8 bg-black text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default SaleOn;
