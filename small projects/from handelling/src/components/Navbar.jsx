import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-4 py-2'>
      <div>
        <h1 className='text-3xl text-white font-semibold'>LoGo</h1>
      </div>

      <ul className='flex justify-between gap-3 text-white  items-center'>
        <li className='cursor-pointer hover:font-semibold'>Home</li>
        <li className='cursor-pointer hover:font-semibold'>About</li>
        <li className='cursor-pointer hover:font-semibold'>Contact</li>
        <li className='cursor-pointer hover:font-semibold'>Service</li>
      </ul>

    </nav>
  )
}

export default Navbar
