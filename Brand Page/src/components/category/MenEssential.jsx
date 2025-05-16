import React from 'react'
import cloth from '../../assets/category/men-cloth.jpg'
import acc from '../../assets/category/men-acc.jpg'
import shoes from '../../assets/category/men-shoes.jpg'
function MenEssential() {
  return (
    <div className='sm:p-12 p-2' >
      <h1 className='text-2xl font-semibold pb-4'>Shop the Essentials</h1>
      <div className="flex md:flex-row flex-col justify-between items-center gap-4">
        <div className='md:w-2/6 w-full cursor-pointer'>
          <img className='w-full object-contain pb-8' src={cloth} alt="Zenvy Leggings" />
          <h2 className='text-xl font-semibold'>Clothing</h2>
        </div>
        <div className='md:w-2/6 w-full cursor-pointer'>
          <img className='w-full object-contain pb-8' src={shoes} alt="Field General" />
          <h2 className='text-xl font-semibold'>Shoes</h2>
        </div>
        <div className='md:w-2/6 w-full cursor-pointer'>
          <img className='w-full object-contain pb-8 ' src={acc} alt="Hustle D" />
          <h2 className='text-xl font-semibold'>Accessories</h2>
        </div>
      </div>
    </div>
  )
}

export default MenEssential
