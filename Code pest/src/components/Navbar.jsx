import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center px-8 py-4 bg-green-600 font-semibold sticky top-0'>
      <h1 className='text-3xl'>PestCode</h1>
      <ul className='gap-4 flex'>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/pest">
          Pest
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
