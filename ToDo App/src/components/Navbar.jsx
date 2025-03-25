import React from 'react'

function Navbar() {
  return (
    <nav className=' flex justify-between items-center bg-green-600 p-3 text-white'>
      <div className="logo font-bold text-3xl">
        To Do
      </div>
      <ul className='flex gap-5 '>
        <li className='cursor-pointer font-semibold'>Home</li>
        <li className='cursor-pointer  font-semibold'><a href="#">Source Code</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
