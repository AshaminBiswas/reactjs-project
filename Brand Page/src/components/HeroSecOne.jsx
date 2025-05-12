//image import

import Zenvy from '../assets/hero assets/Zenvy Leggings.png';
import Hustle from '../assets/hero assets/HustleD.png'
import Field from '../assets/hero assets/Field General.png'
function HeroSecOne() {
  return (
    <>
      <div className='sm:p-12 p-2' >
        <h1 className='text-2xl font-semibold pb-4'>Featured</h1>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4">
          <div className='md:w-2/6 w-full cursor-pointer'>
            <img className='w-full object-contain pb-8' src={Zenvy} alt="Zenvy Leggings" />
            <h2 className='text-xl font-semibold'>Zenvy Leggings</h2>
          </div>
          <div className='md:w-2/6 w-full cursor-pointer'>
            <img className='w-full object-contain pb-8' src={Field} alt="Field General" />
            <h2 className='text-xl font-semibold'>Field General</h2>
          </div>
          <div className='md:w-2/6 w-full cursor-pointer'>
            <img className='w-full object-contain pb-8 ' src={Hustle} alt="Hustle D" />
            <h2 className='text-xl font-semibold'>Hustle D</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSecOne
