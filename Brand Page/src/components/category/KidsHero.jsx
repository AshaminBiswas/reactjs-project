import { useNavigate } from 'react-router-dom'
import modelImage from '../../assets/category/hero-kids-one.jpeg'
import productImage from '../../assets/category/hero-kids-two.jpeg'

function KidsHero() {
  const navigate = useNavigate()
  function kidsProducts() {
    navigate('/category/kids/kids-single-product')
  }
  return (
    <div className='sm:px-4 md:px-10 lg:px-16 xl:px-22 2xl:px-26 px-2 pt-12 md:pb-4 pb-10'>
      <h1 className='text-2xl font-semibold pb-8'>Kids</h1>
      <div className='flex sm:flex-row flex-col justify-between items-center '>
        <div className='sm:w-1/2 w-full '>
          <img src={modelImage} className='' alt="Model Image 1" />
        </div>
        <div className='sm:w-1/2 w-full '>
          <img className='' src={productImage} alt='Product Image 2' />
        </div>
      </div>
      <div className='text-center p-8 cursor-pointer'>
        <p className='md:text-7xl sm:text-5xl lg:text-8xl text-4xl font-extrabold pb-2'>A'ONE FOR KIDS</p>
        <p className='pb-2'>Brown from A'ja Wilson's love for the next generation.</p>
        <button onClick={kidsProducts} className='cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-3xl hover:bg-gray-500'>Shop</button>
      </div>

    </div>
  )
}

export default KidsHero
