// CartPage and Cart Logic Implementation

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cartData);
    calculateTotal(cartData);
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + (item.discountPrice || item.price), 0);
    setTotalPrice(total);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleOrder = () => {
    alert(`Order placed successfully! Total Amount: ₹${totalPrice}`);
    localStorage.removeItem('cart');
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ₹{item.discountPrice || item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <h2 className="text-2xl font-bold">Total Price: ₹{totalPrice}</h2>
            <button
              onClick={handleOrder}
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Order Now
            </button>
          </div>
          <Link to="/collection">
            <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              Back to Collection
            </button>
          </Link>
        </div>
      ) : (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
