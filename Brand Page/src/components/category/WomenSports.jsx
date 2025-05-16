import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { MdArrowBackIosNew, MdArrowForwardIos, } from 'react-icons/md';


import basketBall from '../../assets/category/women sports/women-basket.mp4'
import football from '../../assets/category/women sports/women-football.mp4'
import running from '../../assets/category/women sports/women-run.mp4'
import skate from '../../assets/category/women sports/women-sb.mp4'
import tennis from '../../assets/category/women sports/women-tennis.mp4'
import training from '../../assets/category/women sports/women-exercise.mp4'
import yoga from '../../assets/category/women sports/women-yoga.mp4'

function WomenSports() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const sliderRef = useRef(null);
  const cartNavigate = useNavigate()
  // Dummy card data
  const cardData = [
    {
      id: 1,
      title: "Football",
      image: football,
    },
    {
      id: 2,
      title: "Running",
      image: running,
    },
    {
      id: 3,
      title: "Training",
      image: training,
    },
    {
      id: 4,
      title: "Basketball",
      image: basketBall,

    },
    {
      id: 5,
      title: "Tennis",
      image: tennis,

    },
    {
      id: 6,
      title: "Yoga",
      image: yoga,

    },
    {
      id: 7,
      title: "Skateboarding",
      image: skate,

    },


  ];
  //handle cart 
  function handleSports() {
    cartNavigate('/sports')
  }

  // Determine cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(4);
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
    <div className="md:px-10 sm:px-4 px-2 py-8 mb-5">
      <div className="flex justify-between items-center px-10 mb-8">
        <h1 className="text-2xl font-semibold">Women Sorts</h1>
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
                  <video
                    autoPlay
                    muted
                    loop
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[300px] object-cover"
                  ></video>
                  <button
                    onClick={handleSports}
                    className="absolute bottom-4 left-4 cursor-pointer bg-white text-black font-semibold px-3 py-1 rounded-4xl hover:bg-gray-300"
                  >
                    {card.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WomenSports
