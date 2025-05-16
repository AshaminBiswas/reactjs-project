import womentrending from '../../assets/category/women sports/women-trending.png'

function WomenTrending() {
  return (
    <div className='sm:px-4 md:px-10 lg:px-16 xl:px-20 px-8 pt-12 md:pb-4 pb-10'>
      <h1 className='text-2xl font-semibold pb-8'>Trending</h1>
      <div className='flex justify-center items-center w-full'>
        <div className='w-full max-w-full overflow-hidden'>
          <img
            className='w-full object-cover'
            src={womentrending}
            alt='Trending Image 2'
          />
        </div>
      </div>
      <div className='text-center p-8 cursor-pointer'>
        <p className='md:text-7xl sm:text-5xl lg:text-8xl text-4xl font-extrabold pb-2'>THE BOING IS BACK</p>
        <p className='pb-2'>Disrupt the Norm. Discover the Nike Shox R4</p>
        <button className='cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-3xl hover:bg-gray-500'>Shop</button>
      </div>
    </div>
  )
}

export default WomenTrending
