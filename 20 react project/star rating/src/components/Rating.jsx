import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5";
import '../App.css'
function Rating({ noOfStars = 5 }) {

  const [star, setStar] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(currentIndex) {
    setStar(currentIndex)
  }

  function mouseEnter(currentIndex) {
    setHover(currentIndex)
  }

  function mouseLeave() {
    setHover(star)
  }
  return (
    <div>
      {
        [...Array(noOfStars)].map((_, index) => {
          index += 1
          return <IoStarSharp
            className={index <= (hover || star) ? 'active' : 'inactive'}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={() => mouseLeave()}
            size={40}
          />
        })
      }
    </div>
  )
}

export default Rating
