<div className="hero flex flex-col md:flex-row justify-center items-center md:px-4 px-2 md:py-8">
  <div className="w-full md:w-1/2 p-4 order-2 ">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pb-4 bg-gradient-to-r from-blue-600 to-pink-500 inline-block text-transparent bg-clip-text">
      YOUR FEET DESERVE THE BEST FEELING
    </h1>
    <p className="pb-6 text-base sm:text-lg md:text-xl max-w-prose">
      YOUR FEET DESERVE THE BEST AND WE ARE HERE TO GIVE YOU COMFORT WITH OUR
      SHOES. BE WITH US AND ENJOY AND GLAMORIZE YOUR LIFE.
    </p>
    <div className="flex flex-wrap gap-4">
      <button
        onClick={handleShop}
        className="bg-gradient-to-r from-indigo-700 to-purple-600 py-2 px-4 text-white font-semibold cursor-pointer rounded transition-transform hover:scale-105"
      >
        Shop Now
      </button>
      <button
        onClick={handleSale}
        className="bg-gradient-to-r from-indigo-700 to-purple-600 py-2 px-4 text-white font-semibold cursor-pointer rounded transition-transform hover:scale-105"
      >
        Sale On
      </button>
    </div>
  </div>
  <div className="w-full md:w-1/2 p-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg shadow-blue-400 rounded-xl order-1 md:order-2 mb-8 md:mb-0">
    <img
      className="w-full h-auto object-contain transform hover:rotate-3 transition-transform duration-300"
      src={nike}
      alt="nike shoe"
      loading="eager"
    />
  </div>
</div>