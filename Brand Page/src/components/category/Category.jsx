import { Outlet } from 'react-router-dom'
import CategoryNav from './CategoryNav'

function Category() {
  return (
    <div className='flex flex-col'>
      <CategoryNav />
      <Outlet />
    </div>
  )
}

export default Category
