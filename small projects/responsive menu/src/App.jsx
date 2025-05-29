import { useState } from 'react'
// import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
// import { FaSearch } from "react-icons/fa"
import './App.css'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className='menu flex justify-between items-center bg-lime-400 px-5'>
        <div className='text-2xl font-bold'>
          logo
        </div>
        <ul className=' hidden md:flex gap-4'>
          <li>Home</li>
          <li>Contact</li>
          <li>Service</li>
          <li>Blog</li>
        </ul>

        <div className='flex items-center gap-4'>
          <p>SH</p>
          <p>cart</p>
          <p className='hidden md:block'>Log</p>
          <p className='md:hidden' onClick={() => setShowMenu(!showMenu)}>{showMenu ? "closeM" : "openM"}</p>
        </div>
        {showMenu ? <ul className='absolute top-8 w-full left-0 bg-amber-400 text-center'>
          <li>Home</li>
          <li>Contact</li>
          <li>Service</li>
          <li>Blog</li>
        </ul> : ""}
      </div>
    </>
  )
}

export default App
