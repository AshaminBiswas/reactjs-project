import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeFromPest } from '../features/slices/Pest';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom'
// import { FaShare } from "react-icons/fa";
// ...existing imports...
function Pest() {
  const pests = useSelector((state) => state.pest.pest);

  // console.log(pests);

  const dispatch = useDispatch()
  const [searchTitle, setSearchTitle] = useState("")
  const filteredData = pests.filter((pest) => pest.title.toLowerCase().includes(searchTitle.toLowerCase()))


  function handleDelete(pestId) {
    dispatch(removeFromPest(pestId))
  }


  function handleShare(pest) {
    if (navigator.share) {
      navigator.share({
        title: pest.title,
        text: pest.content,
        url: window.location.href
      })
        .then(() => toast.success("Shared successfully!"))
        .catch((error) => toast.error("Error sharing content"));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(`${pest.title}\n\n${pest.content}`)
        .then(() => toast.success("Content copied to clipboard!"))
        .catch(() => toast.error("Failed to copy content"));
    }
  }
  return (
    <div className='px-8 py-4'>
      <h1 className='text-center text-3xl font-semibold '>List of Pests</h1>

      <div className='flex justify-center p-4 items-center'>
        <input type="search"
          placeholder='Search Your Pest'
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className='w-1/2 p-4 rounded-3xl outline-none border'
        />
      </div>
      <div>
        {
          filteredData.length > 0 &&
          filteredData.map((pest) => {
            return (
              <div key={pest._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold">{pest.title}</h2>
                  <span className="text-sm text-gray-500">
                    {new Date(pest.time).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <div className="mb-4 text-gray-700">{pest.content}</div>
                <div className='flex gap-4'>
                  <div className='flex gap-4'>
                    <button>
                      <NavLink to={`/?pestId=${pest._id}`}>
                        Edit
                      </NavLink>
                    </button>
                    <button onClick={() => {
                      navigator.clipboard.writeText(pest.content)
                      toast.success(" Copied To Clip Board")
                    }} >copy</button>
                    <button onClick={() => handleDelete(pest._id)}>delete</button>
                    <button >

                      <NavLink to={`/pest/${pest._id}`}>
                        view
                      </NavLink>
                    </button>
                    <button
                      className='bg-green-700 px-4 py-1.5 rounded-2xl text-white cursor-pointer hover:bg-green-500 text-xl'
                      onClick={() => handleShare(pest)}
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }


      </div>
    </div>
  );
}

export default Pest;

