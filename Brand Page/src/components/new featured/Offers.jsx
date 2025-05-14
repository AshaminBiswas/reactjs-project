import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useEffect, useState, useRef } from "react";

function Offers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // Auto Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    sliderRef.current = interval;

    return () => clearInterval(interval);
  }, []);

  // Left and Right Arrow Handlers
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  // Pause on Hover
  const pauseSlider = () => {
    if (sliderRef.current) clearInterval(sliderRef.current);
  };

  const resumeSlider = () => {
    sliderRef.current = setInterval(handleNext, 4000);
  };

  return (
    <div
      className="relative px-8 sm:px-14 md:px-20 py-1 flex items-center justify-center bg-gray-200 overflow-hidden"
      onMouseEnter={pauseSlider}
      onMouseLeave={resumeSlider}
    >
      <div
        className="absolute left-4 cursor-pointer font-semibold text-gray-500 text-2xl hover:text-black bg-white p-2 rounded-full"
        onClick={handlePrev}
      >
        <IoIosArrowBack />
      </div>

      <div className="text-center">
        <div className="transition-all duration-500 ease-in-out">
          {activeIndex === 0 ? (
            <>
              <h1 className="text-xl font-semibold">
                Move, Shop, Customise & Celebrate With Us
              </h1>
              <p className="text-sm">
                No matter what you feel like doing today, it's better as a Member
              </p>
              <button className="text-sm font-semibold underline cursor-pointer">
                Join Us
              </button>
            </>
          ) : (
            <>
              <h1 className="text-xl font-semibold">
                New Styles On Sale: Up To 40% Off
              </h1>
              <p className="text-sm">Shop All Our New Markdown</p>
              <button className="text-sm font-semibold underline cursor-pointer">
                Shop Now
              </button>
            </>
          )}
        </div>
      </div>

      <div
        className="absolute right-4 cursor-pointer font-semibold text-gray-500 text-2xl hover:text-black bg-white p-2 rounded-full"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </div>
    </div>
  );
}

export default Offers;

