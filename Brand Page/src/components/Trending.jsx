import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew, MdArrowForwardIos, MdOutlineAddShoppingCart } from 'react-icons/md';


import trending1 from '../assets/trending/trending 1.jpg'
import trending2 from '../assets/trending/trending 2.jpg'
import trending3 from '../assets/trending/trending 3.jpg'
import trending4 from '../assets/trending/trending 4.jpg'
import trending5 from '../assets/trending/trending 5.jpg'
import trending6 from '../assets/trending/trending 6.jpg'
import trending7 from '../assets/trending/trending 7.jpg'
import trending8 from '../assets/trending/trending 8.jpg'
import trending9 from '../assets/trending/trending 9.jpg'
import trending10 from '../assets/trending/trending 10.jpg'



function Trending() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const sliderRef = useRef(null);
  const trendingNavigate = useNavigate()

  //handleTrending

  function handleTrending() {
    trendingNavigate("/trending-products")
  }

  function handleCart() {
    trendingNavigate("/cart")
  }


  const cardData = [
    {
      id: 1,
      title: "Nike ReractX Rejuven8",
      subTitle: "Men's Slides",
      image: trending1,
      price: "₹4695.00"
    },
    {
      id: 2,
      title: "Air Jordan",
      subTitle: "Men's Knit Jersey Top",
      image: trending2,
      price: "₹4995.00"
    },
    {
      id: 3,
      title: "Jordan Flight Chicago",
      subTitle: "Women's Parachute Pants",
      image: trending3,
      price: "₹5495.00"
    },
    {
      id: 4,
      title: "Nike Air Force 1 '07 LV8",
      subTitle: "Men's Shoes",
      image: trending4,
      price: "₹10795.00"
    },
    {
      id: 5,
      title: "Nike Rival Fly 4",
      subTitle: "Men's Road Running Shoes",
      image: trending5,
      price: "₹8695.00"
    },
    {
      id: 6,
      title: "Nike Air Max Dn8",
      subTitle: "Men's Shoes",
      image: trending6,
      price: "₹17495.00"
    },
    {
      id: 7,
      title: "Nike Air Max Koko",
      subTitle: "Women's Sandals (22 - 29cm)",
      image: trending7,
      price: "₹7995.00"
    },
    {
      id: 8,
      title: "Nike Air Max Dn8",
      subTitle: "Men's Shoes",
      image: trending8,
      price: "₹17495.00"
    },
    {
      id: 9,
      title: "Nike ACG",
      subTitle: "Men's Hiking Shorts",
      image: trending9,
      price: "₹5195.00"
    },
    {
      id: 10,
      title: "Nike Life",
      subTitle: "Men's Linen Short-Sleeve Button Down",
      image: trending10,
      price: "₹4999.00"
    }
  ];

  // Determine cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 576) {
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
        <h1 className="text-2xl font-semibold">Trending Now</h1>
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
              className="flex-shrink-0 px-2 border-solid-black"
              style={{ width: `${100 / cardsToShow}%` }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform duration-300 hover:shadow-lg">
                <div className="relative pb-2/3">
                  <img onClick={handleTrending}
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-2">{card.title}</h3>
                  <h3 className='text-lg font-medium mb-2 text-gray-400'>{card.subTitle}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">MRP : {card.price}</span>
                    <button onClick={handleCart} className="cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-4xl hover:bg-gray-500">
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
  )
}

export default Trending
