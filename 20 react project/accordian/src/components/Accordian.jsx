import React, { useState } from 'react'
import data from './data'
import './Accordian.css'
function Accordian() {

  const [select, setSelect] = useState(null)

  function handleSelection(currentId) {
    // console.log(currentId);
    setSelect(currentId === select ? null : currentId)
  }


  return (
    <div>
      <h1>Accordian</h1>
      {data && data.length > 0 ? <div>
        {data.map((data) => {
          return <div className='data' key={data.id}>
            <div onClick={() => handleSelection(data.id)} className='title'>
              <div className='content'>
                <h1>{data.question}</h1>
                <span className='icon'>+</span>
              </div>
              <div>
                {select === data.id ? <p className='answer'>{data.answer}</p> : null}
              </div>
            </div>

          </div>
        })}
      </div> : <div>Data is not found</div>}
    </div>
  )
}

export default Accordian
