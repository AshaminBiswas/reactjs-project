import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
function Form() {
  return (
    <>
      <div className='p-4'>
        <div className='w-full'>
          <div className='flex items-center gap-10 px-10'>
            <div className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded w-1/2 justify-center'>
              <MdOutlineMessage className='text-2xl' />
              <span>VIA SUPPORT CHAT</span>
            </div>
            <div className='flex items-center gap-2 bg-black text-white px-4 py-2 rounded w-1/2 justify-center'>
              <IoCallOutline className='text-2xl' />
              <span>VIA CALL</span>
            </div>
          </div>
          <div className='flex items-center gap-2 bg-white text-black px-4 py-2 rounded justify-center mt-4 mx-10'>
            <IoMailUnreadOutline className='text-2xl' />
            <span>VIA MAIL FORM</span>
          </div>

          <form className='mx-10 py-6 flex justify-center items-center gap-10' >
            <div className='text-white flex items-center gap-2'>
              <label className='' htmlFor="name">Name </label>
              <input className='outline-0 border rounded text-black bg-white px-2' type="text" id='name' />
            </div>
            <div className='text-white flex items-center gap-2'>
              <label htmlFor="email">Email</label>
              <input className='outline-0 border rounded text-black bg-white px-2' type="email" id='email' />
            </div>
            <div className='text-white flex items-center gap-2'>
              <label htmlFor="comment">Comment</label>
              <input className='outline-0 border rounded text-black bg-white px-2' type="text" id='comment' />
            </div>

            <button>
              Submit
            </button>
          </form>
        </div>

      </div>


    </>
  )
}

export default Form
