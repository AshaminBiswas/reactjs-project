import React from 'react'
import { NavLink } from 'react-router-dom'
function CategoryNav() {
  return (
    <div className='flex justify-center items-center gap-4 w-full text-center px-4 py-2'>
      <NavLink to={'/category/men'}>
        Men
      </NavLink>
      <NavLink to={'/category/women'}>
        Women
      </NavLink>
      <NavLink to={'/category/kids'}>
        Kids
      </NavLink>

    </div>
  )
}

export default CategoryNav
