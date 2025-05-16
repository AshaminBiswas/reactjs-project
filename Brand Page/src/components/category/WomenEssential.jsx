
import footwear from '../../assets/category/women sports/footware.jpg'
import bra from '../../assets/category/women sports/women-bra.jpg'
import sportsWear from '../../assets/category/women sports/women-sportsware.jpg'
function WomenEssential() {
  return (
    <div className='sm:p-12 p-2' >
      <h1 className='text-2xl font-semibold pb-4'>Shop the Essentials</h1>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4">
        <div className='md:w-2/6 w-full cursor-pointer'>
          <img className='w-full object-contain pb-8' src={footwear} alt="Zenvy Leggings" />
          <h2 className='text-xl font-semibold'>Footwear</h2>
        </div>
        <div className='md:w-2/6 w-full cursor-pointer'>
          <img className='w-full object-contain pb-8' src={bra} alt="Field General" />
          <h2 className='text-xl font-semibold'>Bras</h2>
        </div>
        <div className='md:w-2/6 w-full cursor-pointer'>
          <img className='w-full object-contain pb-8 ' src={sportsWear} alt="Hustle D" />
          <h2 className='text-xl font-semibold'>Sports Wear</h2>
        </div>
      </div>
    </div>
  )
}

export default WomenEssential
