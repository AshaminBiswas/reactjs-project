import imageOne from '../../assets/category/kids-trending-image1.jpeg'
import imageTwo from '../../assets/category/kids-trending-image2.jpeg'
function KidsTrending() {
  return (
    <div className='px-2 sm:px-6 md:px-10 lg:px-15 xl:px-20'>
      <h1 className='text-2xl font-semibold pb-8'>Trending</h1>
      <div className='flex sm:flex-row flex-col justify-between items-center '>
        <div className='sm:w-3/6 w-full '>
          <img src={imageOne} className='' alt="Trending Image 1" />
        </div>
        <div className='sm:w-3/6 w-full '>
          <img className='' src={imageTwo} alt='Trending Image 2' />
        </div>
      </div>
      <div className='text-center p-8 cursor-pointer'>

        <p className='md:text-7xl sm:text-5xl lg:text-8xl text-4xl font-extrabold pb-2'>THE DREAM IS REAL</p>
        <p className='pb-2'>Every goal is within reach in the Nike Jr. Mercurial "Kylian Mbappe."</p>
        <button className='cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-3xl hover:bg-gray-500'>Shop</button>
      </div>
    </div>
  )
}

export default KidsTrending
