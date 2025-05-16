import imageOne from '../../assets/category/men-trending-one.jpg'
import imageTwo from '../../assets/category/men-trending-two.jpg'

function MenTrending() {
  return (
    <div className='sm:px-4 md:px-10 lg:px-16 xl:px-20 px-8 pt-12 md:pb-4 pb-10'>
      <h1 className='text-2xl font-semibold pb-8'>Trending</h1>
      <div className='flex sm:flex-row flex-col justify-between items-center '>
        <div className='sm:w-2/6 w-full '>
          <img src={imageOne} className='' alt="Trending Image 1" />
        </div>
        <div className='sm:w-4/6 w-full '>
          <img className='' src={imageTwo} alt='Trending Image 2' />
        </div>
      </div>
      <div className='text-center p-8 cursor-pointer'>

        <p className='md:text-7xl sm:text-5xl lg:text-8xl text-4xl font-extrabold pb-2'>VOMERO 18</p>
        <p className='pb-2'>New summer colours for our max cushioning icon.</p>
        <button className='cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-3xl hover:bg-gray-500'>Shop</button>
      </div>

    </div>
  )
}

export default MenTrending
