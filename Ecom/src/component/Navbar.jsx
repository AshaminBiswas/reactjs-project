import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { assets } from '../assets/frontend_assets/assets';
function Navbar() {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <div className="logo">
        <img src={assets.logo} alt="" />
      </div>

      <ul className='hidden sm:flex gap-5 text-gray-700'>
        <NavLink to='/' className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <IoSearch className='w-5 cursor-pointer' />
        <div className='group relative'>
          <CgProfile className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-2 bg-slate-100 text-gray-500'>
              <p className='cursor-pointer hover:text-black'>Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative '>
          <FaCartPlus className='w-5 cursor-pointer' />
        </Link>
      </div>

    </div>
  )
}

export default Navbar
