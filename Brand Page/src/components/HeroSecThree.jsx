import { useState, useRef, useEffect } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineAddShoppingCart } from 'react-icons/md';

function HeroSecThree() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const sliderRef = useRef(null);

  // Dummy card data
  const cardData = [
    {
      id: 1,
      title: "Classic Icons",
      image: "/api/placeholder/300/200",
      price: "$29.99"
    },
    {
      id: 2,
      title: "Modern Icons",
      image: "/api/placeholder/300/200",
      price: "$34.99"
    },
    {
      id: 3,
      title: "Vintage Icons",
      image: "/api/placeholder/300/200",
      price: "$24.99"
    },
    {
      id: 4,
      title: "Minimalist Icons",
      image: "/api/placeholder/300/200",
      price: "$19.99"
    },
    {
      id: 5,
      title: "Abstract Icons",
      image: "/api/placeholder/300/200",
      price: "$39.99"
    },
    {
      id: 6,
      title: "Colorful Icons",
      image: "/api/placeholder/300/200",
      price: "$27.99"
    },
    {
      id: 7,
      title: "Premium Icons",
      image: "/api/placeholder/300/200",
      price: "$49.99"
    },
    {
      id: 8,
      title: "Simple Icons",
      image: "/api/placeholder/300/200",
      price: "$22.99"
    }
  ];

  // Determine cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle next slide
  const nextSlide = () => {
    if (currentIndex < cardData.length - cardsToShow) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="md:px-10 sm:px-4 px-2 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Shop by Icons</h1>
        <div className="flex gap-4 items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
              }`}
            onClick={prevSlide}
          >
            <MdArrowBackIosNew />
          </div>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${currentIndex >= cardData.length - cardsToShow ? 'bg-gray-200 text-gray-400' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
              }`}
            onClick={nextSlide}
          >
            <MdArrowForwardIos />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / cardsToShow}%` }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:shadow-lg">
                <div className="relative pb-2/3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">{card.price}</span>
                    <button className="cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-4xl hover:bg-gray-500">
                      <MdOutlineAddShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSecThree;