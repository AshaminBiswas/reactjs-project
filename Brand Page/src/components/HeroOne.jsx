
import { useNavigate } from 'react-router-dom';
import nike from '../assets/image A+.png';
function HeroOne() {
  // Correctly using useNavigate inside a component
  const navigate = useNavigate();

  // Navigation handler functions
  const handleShop = () => {
    navigate("/shop");
  };

  const handleSale = () => {
    navigate("/sale");
  };
  return (
    <div className="hero flex flex-col flex-col-revers md:flex-row justify-center items-center md:px-2 md:py-2 px-4 py-8">
      <div className="w-full md:w-1/2 p-4 order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pb-4 bg-gradient-to-r from-amber-300 via-zinc-400 to-stone-500 text-transparent bg-clip-text">
          YOUR FEET DESERVE THE BEST FEELING
        </h1>
        <p className="pb-6 text-base sm:text-lg md:text-xl max-w-prose ">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO GIVE YOU COMFORT WITH OUR
          SHOES. BE WITH US AND ENJOY AND GLAMORIZE YOUR LIFE.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleShop}
            className="bg-gradient-to-r from-amber-300 via-zinc-400 to-stone-500 py-2 px-4 text-gray-900 font-semibold cursor-pointer rounded transition-transform hover:scale-105"
          >
            Shop Now
          </button>
          <button
            onClick={handleSale}
            className="bg-gradient-to-r from-stone-500 via-zinc-400 to-amber-300 py-2 px-4 text-gray-900 font-semibold cursor-pointer rounded transition-transform hover:scale-105"
          >
            Sale On
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-8 rounded-xl bg-gradient-to-r from-stone-500 via-zinc-400 to-amber-300 mb-8 md:mb-0 order-2">
        <img
          className="w-full h-auto object-contain transform hover:rotate-3 transition-transform duration-300"
          src={nike}
          alt="nike shoe"
          loading="eager"
        />
      </div>
    </div>
  )
}

export default HeroOne
