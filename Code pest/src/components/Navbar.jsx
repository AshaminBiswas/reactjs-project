import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex flex-row justify-between items-center md:px-8 px-2 py-4 bg-green-600 font-semibold sticky top-0'>
      <h1 className='text-3xl'>YourNotes</h1>
      <ul className='gap-4 flex'>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/note">
          Notes
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
