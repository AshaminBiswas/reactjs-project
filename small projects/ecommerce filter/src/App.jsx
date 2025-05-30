import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category'
import ItemCard from './components/ItemCard'
function App() {
  const [filterProduct, setFilterProduct] = useState(0)
  useEffect(() => {



  }, [filterProduct])
  return (
    <>
      <div className='bg-green-100'>
        <div className='max-w-[1320px] px-4 grid grid-cols-[30%_auto] gap-2 text-white'>
          <div className='bg-gray-500'>
            <Category />
          </div>
          <div className='bg-zinc-400 p-4'>
            <h1 className='p-2 text-2xl font-semibold'>Items</h1>
            <ItemCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
