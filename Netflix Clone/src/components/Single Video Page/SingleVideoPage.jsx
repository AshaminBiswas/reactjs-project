import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import play_icon from '../../assets/play_icon.png'
function SingleVideoPage({ category }) {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fe24812eab5bcea0b9ca338e1b0c3e37`)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err)
      );
  }, [])

  return (
    <div>
      {apiData.map((card) => {
        return <div className='link' key={card.id}>
          <img className='card' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.original_title} />

          <p>{card.original_title}</p>
          <div>
            <Link to={`/watch/${card.id}`}>
              <button className='btn'><img src={play_icon} alt="Play button icon image" />Watch Now</button>
            </Link>
          </div>
          <div>
            <h2>Overview</h2>
            <p>{card.overview}</p>
          </div>
          <p>Rating: {Math.round(card.vote_average)}</p>
        </div>
      })}
    </div>
  )
}

export default SingleVideoPage
