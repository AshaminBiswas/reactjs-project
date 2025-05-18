

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch or load products (this should be replaced with your API or state)
    const sampleProducts = [
      {
        id: 1,
        name: 'Nike Air Max 270',
        price: 15495,
        discountPrice: 10550,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/awjogtdnqxniqecxopax/air-max-270-mens-shoes-KkLcGR.png'
      },
      {
        id: 2,
        name: 'Nike Air Force 1',
        price: 11495,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-force-1-07-mens-shoe-jBrhbr.png'
      }
    ];
    localStorage.setItem('products', JSON.stringify(sampleProducts));
    setProducts(sampleProducts);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shop Now</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="group relative border rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-2">Price: ₹{product.discountPrice || product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <FaShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-600">No products available.</p>
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

export default Shop;
