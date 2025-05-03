import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ViewPest() {
  // Destructure the id parameter from useParams
  const { id } = useParams()  // Changed this line
  const allPest = useSelector((state) => state.pest.pest)

  // Find the pest with matching id
  const pest = allPest.find((p) => p._id === id)  // Changed this line

  // Add a check for undefined pest
  if (!pest) {
    return <div>Pest not found</div>
  }

  return (
    <>
      <div className='md:px-8 px-2 py-4'>
        <div>
          <input
            type="text"
            placeholder='Enter Title Here..'
            value={pest.title}
            className='p-2 rounded-xl outline-none border w-full font-semibold text-2xl'
            disabled
          />
        </div>

        <div className='mt-4'>
          <textarea
            value={pest.content}
            placeholder='Enter Content There'
            rows={15}
            disabled
            className='w-full border outline-none rounded-2xl p-4'
          ></textarea>
        </div>
      </div>
    </>
  )
}

export default ViewPest