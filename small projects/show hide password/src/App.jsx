import { useState } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <span className='flex justify-center items-center gap-1 border w-auto'>
        <input type={showPassword ? "text" : "password"} className='border-none outline-none px-2' />
        <div onClick={handleShowPassword} className=''>
          {showPassword ? <FaRegEyeSlash className='text-2xl' /> :
            <FaRegEye className='text-2xl' />}</div>
      </span>
    </>
  )
}

export default App
