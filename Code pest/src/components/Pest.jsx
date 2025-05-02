import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function Pest() {
  const pests = useSelector((state) => state.pest.pest);

  console.log(pests);

  const dispatch = useDispatch()
  const [searchTitle, setSearchTitle] = useState("")
  const filteredData = pests.filter((pest) => pest.title.toLowerCase().includes(searchTitle.toLowerCase()))


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
              <div>

                <div>
                  {pest.title}
                </div>
                <div>
                  {pest.value}
                </div>
                <div className='flex gap-4'>
                  <button>edit</button>
                  <button>copy</button>
                  <button>delete</button>
                  <button>view</button>
                  <button>share</button>
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

