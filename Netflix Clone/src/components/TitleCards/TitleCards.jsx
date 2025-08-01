import React, { useContext, useEffect, useRef, useState } from 'react'
import "./TitleCard.css"
import { Link } from 'react-router-dom'
import { TitleCardContext } from '../../Context/TitleCardContext'
function TitleCards({ title, category, }) {
  const [apiData, setApiData] = useState([])
  // console.log(apiData)
  const cardRef = useRef()

  // const handleWheel = (e) => {
  //   e.preventDefault()
  //   cardRef.current.scrollLeft += e.deltaY
  // }

  // const data = useContext(TitleCardContext)
  // console.log(typeof data.videoData);


  // useEffect(() => {
  //   cardRef.current.addEventListener("wheel", handleWheel)
  // }, [])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?api_key=fe24812eab5bcea0b9ca338e1b0c3e37`)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err)
      );
  }, [])







  return (
    <div className='title-card'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className='card-list' ref={cardRef}>
        {apiData.map((card) => {
          return <Link className='link' to={`/movie/${card.id}`} key={card.id}>
            <img className='card' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
