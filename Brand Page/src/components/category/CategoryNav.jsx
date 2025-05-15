import { NavLink } from "react-router-dom";


function CategoryNav() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold'
      : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-colors duration-300';

  return (
    <div className='sticky top-16 z-30 flex justify-center items-center gap-4 w-full text-center px-4 py-2 bg-gray-200 shadow-md'>
      <NavLink to={'/category/men'} className={linkStyle}>
        Men
      </NavLink>
      <NavLink to={'/category/women'} className={linkStyle}>
        Women
      </NavLink>
      <NavLink to={'/category/kids'} className={linkStyle}>
        Kids
      </NavLink>
    </div>
  )
}

export default CategoryNav