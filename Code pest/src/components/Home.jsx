import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addToPast, updateToPest } from '../features/slices/Pest'
import toast from 'react-hot-toast'


function Home() {

  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")
  const [searchParams, setSearchParams] = useSearchParams()
  const pestId = searchParams.get("pestId")
  const dispatch = useDispatch()
  const allPest = useSelector((state) => state.pest.pest)

  useEffect(() => {

    if (pestId) {
      const pest = allPest.find((p) => p._id === pestId)
      setTitle(pest.title)
      setValue(pest.content)
    }

  }, [pestId])

  function createPest() {
    // Add validation checks
    if (!title.trim()) {
      toast.error("Title cannot be empty!")
      return
    }

    if (!value.trim()) {
      toast.error("Content cannot be empty!")
      return
    }

    // Check minimum length requirements
    if (title.trim().length < 6) {
      toast.error("Title must be at least 6 characters long!")
      return
    }

    if (value.trim().length < 25) {
      toast.error("Content must be at least 25 characters long!")
      return
    }

    const pest = {
      title: title.trim(),
      content: value.trim(),
      _id: pestId || nanoid(),
      time: new Date().toISOString(),
    }

    if (pestId) {
      try {
        dispatch(updateToPest(pest))
        toast.success("Pest updated successfully!")
        setTitle("")
        setValue("")
        setSearchParams({})
      } catch (error) {
        toast.error("Failed to update pest")
        console.error("Update error:", error)
      }
    } else {
      dispatch(addToPast(pest))
      toast.success("Pest created successfully!")
      setTitle("")
      setValue("")
    }
  }
  return (
    <>
      <div className='md:px-8 px-2 md:py-4 py-2 overflow-hidden '>
        <h1 className='text-center text-3xl font-semibold'>Create Your Notes</h1> {/* Added overflow-hidden */}
        <div className='flex items-center justify-between gap-2'>
          <input
            type="text"
            placeholder='Enter your title here..'
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className='p-2 rounded-xl outline-none border w-3/4 text-2xl font-semibold'
          />
          <button className='md:px-8 w-1/4 px- py-3 rounded-2xl cursor: pointer bg-green-600 text-xl ' onClick={createPest}>
            {pestId ? "Update" : "Create"}
          </button>
        </div>

        <div className='md:mt-4 mt-2'>
          <textarea
            value={value}
            placeholder='Enter your note here'
            onChange={(e) => { setValue(e.target.value) }}
            rows={15}
            className='w-full border outline-none rounded-2xl p-4 scrollbar-hide text-[16px]' /* Added scrollbar-hide */
          ></textarea>
        </div>
      </div>
    </>
  )
}

export default Home
