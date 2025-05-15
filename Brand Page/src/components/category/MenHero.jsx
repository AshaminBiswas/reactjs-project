import { useNavigate } from 'react-router-dom';
import modelImage from '../../assets/category/hero-men-image.jpeg';
import productVideo from '../../assets/category/hero-men-video.mp4';

function MenHero() {
  const navigate = useNavigate();

  function MenProducts() {
    navigate('/category/men/men-single-product');
  }

  return (
    <div className='sm:px-4 md:px-10 lg:px-16 xl:px-22 2xl:px-26 px-8 pt-12 md:pb-4 pb-10'>
      <h1 className='text-2xl font-semibold pb-8'>Men</h1>
      <div className='flex sm:flex-row flex-col justify-between items-center '>
        <div className='sm:w-1/2 w-full '>
          <img src={modelImage} className='' alt="Model Image 1" />
        </div>
        <div className='sm:w-1/2 w-full '>
          <video className='' autoPlay muted loop src={productVideo} alt='Product video'></video>
        </div>
      </div>
      <div className='text-center p-8 cursor-pointer'>
        <h2 className='text-xl pb-2'>Dynamic Air</h2>
        <p className='md:text-7xl sm:text-5xl lg:text-8xl text-4xl font-extrabold pb-2'>AIR MAX DN8</p>
        <p className='pb-2'>Discover the unreal moves of fencer Edgar Ka Long.</p>
        <button onClick={MenProducts} className='cursor-pointer bg-black text-white font-semibold px-3 py-1 rounded-3xl hover:bg-gray-500'>Shop</button>
      </div>

    </div>
  );
}

export default MenHero