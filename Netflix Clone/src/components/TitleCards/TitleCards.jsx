import React, { useEffect, useRef, useState } from 'react'
import "./TitleCard.css"

import cardData from "../../assets/cards/Cards_data.js"
function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([])
  const cardRef = useRef()


  const handleWheel = (e) => {
    e.preventDefault()
    cardRef.current.scrollLeft += e.deltaY
  }


  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel)
  }, [])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTI0ODEyZWFiNWJjZWEwYjljYTMzOGUxYjBjM2UzNyIsIm5iZiI6MTc1Mzg5OTA2My4xMjEsInN1YiI6IjY4OGE2MDM3MzQ2NTg5ZGM4ZDg0YzBmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6zk4DJ75WyMXut2ABnZQ1QWx0RAtxVL9g48g3FNLDNs'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err)
      );
  }, [])





  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardRef}>
        {apiData.map((card, index) => {
          return <div key={index}>
            <img className='card' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
