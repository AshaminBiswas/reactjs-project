import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiChevronLeft } from 'react-icons/fi';


// {image import}
import image1 from '../../assets/category/men sports/men-product-image1.jpg'
import image2 from '../../assets/category/men sports/men-product-image2.jpg'
import image3 from '../../assets/category/men sports/men-product-image3.jpg'
import image4 from '../../assets/category/men sports/men-product-image4.jpg'
import image5 from '../../assets/category/men sports/men-product-image5.jpg'
import image6 from '../../assets/category/men sports/men-product-image6.jpg'
import image7 from '../../assets/category/men sports/men-product-image7.jpg'
import image8 from '../../assets/category/men sports/men-product-image8.jpg'


function MenSingleProduct() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [mainImage, setMainImage] = useState(0);
  const [showMobileGallery, setShowMobileGallery] = useState(false);

  // Dummy product data with multiple images
  const product = {
    name: "Nike Air Max DN8",
    description: "Men's Shoes",
    price: "₹ 17,495.00",
    images: [image1, image2, image3, image4, image5, image6, image7, image8],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    details: "This product is excluded from site promotions and discounts."
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const goBack = () => {
    navigate(-1);
  };
  function handleCart() {
    navigate('/cart')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
      {/* Back Button - Top on mobile, aligned with content on desktop */}
      <button
        onClick={goBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 md:mb-6"
      >
        <FiChevronLeft className="mr-1" /> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        {/* Product Images Section */}
        <div className="lg:w-1/2">
          {/* Mobile Gallery Toggle Button */}
          <button
            className="md:hidden w-full py-2 mb-2 text-sm font-medium flex items-center justify-center gap-2 border rounded-md"
            onClick={() => setShowMobileGallery(!showMobileGallery)}
          >
            {showMobileGallery ? 'Hide' : 'Show'} Product Gallery
            <span className="text-xs">({product.images.length} images)</span>
          </button>

          {/* Main Image - Always visible */}
          <div className="border rounded-lg overflow-hidden mb-2 md:mb-4">
            <img
              src={product.images[mainImage]}
              alt={`${product.name} - ${mainImage + 1}`}
              className="w-full h-auto object-cover aspect-square md:aspect-auto"
            />
          </div>

          {/* Thumbnail Gallery - Hidden on mobile unless toggled */}
          <div className={`${showMobileGallery ? 'block' : 'hidden'} md:block`}>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMainImage(index);
                    if (window.innerWidth < 768) {
                      setShowMobileGallery(false);
                    }
                  }}
                  className={`border rounded-md overflow-hidden transition-all
                    ${mainImage === index ? 'ring-2 ring-black' : 'hover:border-gray-400'}`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-16 sm:h-20 md:h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">{product.description}</p>

          <div className="mt-3 sm:mt-4">
            <p className="text-base sm:text-lg font-semibold">MRP : {product.price}</p>
            <p className="text-xs sm:text-sm text-gray-500">Inclusive of all taxes</p>
            <p className="text-xs sm:text-sm text-gray-500">(Also includes all applicable duties)</p>
          </div>

          {/* Size Selection */}
          <div className="mt-6 sm:mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-base sm:text-lg font-medium">Select Size</h2>
              <button className="text-xs sm:text-sm text-blue-600 hover:underline">Size Guide</button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border rounded-md text-sm sm:text-base
                    ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-gray-400'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <button
            onClick={handleCart}
            disabled={!selectedSize}
            className={`w-full mt-6 sm:mt-8 py-2 sm:py-3 px-4 rounded-md font-medium text-sm sm:text-base
              ${selectedSize ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          >
            Add to Cart
          </button>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className={`flex items-center justify-center gap-2 w-full mt-3 sm:mt-4 py-2 sm:py-3 px-4 rounded-md font-medium border text-sm sm:text-base
              ${isFavorite ? 'border-red-500 text-red-500' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
          >
            <FiHeart className={isFavorite ? 'fill-red-500' : ''} />
            Favourite {isFavorite ? '❤️' : '😊'}
          </button>

          {/* Product Details */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenSingleProduct;