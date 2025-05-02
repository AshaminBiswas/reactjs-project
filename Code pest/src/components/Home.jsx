import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addToPast, updateToPest } from '../features/slices/Pest'

function Home() {

  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const pestId = searchParams.get("pestId")
  const dispatch = useDispatch()


  function createPest() {
    const pest = {
      title: title,
      content: value,
      _id: pestId || nanoid(),
      time: new Date().toISOString(),
    }

    if (pestId) {
      //update Pest
      dispatch(updateToPest(pest))
    } else {
      //create pest
      dispatch(addToPast(pest))
    }


    //after creation or update
    setTitle("")
    setValue("")
    setSearchParams({})

  }

  return (
    < >
      <div className='px-8 py-4'>
        <div >
          <input
            type="text"
            placeholder='Enter Title Here..'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className=' p-2 rounded-xl outline-none border w-2/4 '
          />
          <button className='px-8 py-4 w-2/4' onClick={createPest}>

            {
              pestId ? "Update My Pest" : "Create My Pest"
            }
          </button>
        </div>

        <div className='mt-4'>
          <textarea
            value={value}
            placeholder='Enter Content There'
            onChange={(e) => { setValue(e.target.value) }}
            rows={20}
            className='w-3/4 border outline-none rounded-2xl p-4'
          ></textarea>
        </div>

      </div>
    </>
  )
}

export default Home
