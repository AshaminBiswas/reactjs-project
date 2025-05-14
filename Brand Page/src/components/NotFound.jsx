import React from 'react'
import Navbar from './Navbar'
import HeroSecThree from './HeroSecThree'
import Footer from './Footer'
function NotFound() {
  return (
    <div>
      <Navbar />
      <div className='py-30 text-center flex flex-col gap-3'>
        <h1 className='text-4xl font-bold'>Oops! 404-Not Found</h1>
        <h1 className='text-2xl font-semibold'>You Enter A Wrong Path In URL! Please Check.</h1>
        <h2 className='text-2xl font-semibold'>Please Check Your Internet Connection</h2>
      </div>
      <HeroSecThree />
      <Footer />
    </div>
  )
}

export default NotFound
