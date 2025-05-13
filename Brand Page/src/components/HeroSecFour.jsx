import { useNavigate } from 'react-router-dom'
import modelImage1 from '../assets/dont miss/dont miss 8.jpg'
import productImage1 from '../assets/dont miss/dont miss 3.jpg'


function HeroSecFour() {
  const navigatePopularProduct = useNavigate()
  function handlePopularProducts() {
    navigatePopularProduct('/dont-miss-popular-product')
  }

  return (
    <div className='sm:px-4 md:px-10 lg:px-16 xl:px-22 2xl:px-26 px-2 pt-12 md:pb-4 pb-10'>
      <h1 className='text-2xl font-semibold pb-8'>DON't MISS</h1>
      <div className='flex sm:flex-row flex-col justify-between items-center '>
        <div className='sm:w-1/2 w-full '>
          <img src={modelImage1} className='' alt="Model Image 1" />
        </div>
        <div className='sm:w-1/2 w-full '>
          <img className='' src={productImage1} alt='Product Image 2' />
        </div>
      </div>
      <div className='text-center p-8 cursor-pointer'>
        <h2 className='text-xl pb-2'>Men's Air Jordan Collection</h2>
        <p className='md:text-7xl sm:text-5xl lg:text-8xl text-4xl font-extrabold pb-2'>SHOW 'EM UP</p>
        <p className='pb-2'>Crafted for your flyest self, the new Air Jordan Collection brings iconic prints elevated cuts.</p>
        <button onClick={handlePopularProducts} className='cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-3xl hover:bg-gray-500'>Shop</button>
      </div>

    </div>
  )
}

export default HeroSecFour
