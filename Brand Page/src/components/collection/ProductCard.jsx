import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaRegHeart, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Check if product is in favorites when component mounts
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsWishlisted(favorites.some(fav => fav.id === product.id));
  }, [product.id]);

  const toggleWishlist = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isWishlisted) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(fav => fav.id !== product.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, product];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
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

  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="group relative">
      <div className="absolute top-3 right-3 z-10 flex space-x-2">
        <button
          onClick={toggleWishlist}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          {isWishlisted ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>

        <button
          onClick={handleAddToCart}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <FaShoppingCart className="text-gray-400" />
        </button>
      </div>

      <Link to={`/cart`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-bold rounded-md">
              NEW
            </span>
          )}
          {product.discountPrice && (
            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-md">
              SALE
            </span>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</h3>
          <div className="flex items-center mt-1">
            {renderRating()}
            <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
          </div>
          <div className="mt-2">
            {product.discountPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">₹{product.discountPrice}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.price}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
