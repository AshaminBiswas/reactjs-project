import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import { TitleCardContext } from '../../Context/TitleCardContext';
import "./SingleVideoPage.css"
import Navbar from '../Navbar/Navbar';
function SingleVideoPage() {
  const category = useContext(TitleCardContext)
  console.log(category);

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fe24812eab5bcea0b9ca338e1b0c3e37`)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err)
      );
  }, [])

  return (
    <div className='single-video-page'>
      <Navbar />
      {apiData.map((card) => {
        return <div className='svp-link' key={card.id}>
          <div>
            <img className='card' src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.original_title} />

            <div className='hero-buttons'>
              <button className='btn'><img src={play_icon} alt="Play button icon image" />Watch Now</button>
              <button className='btn dark'><img src={info_icon} alt="Info button icon image" />Info</button>
            </div>
          </div>

          <div >
            <p className='movie-title'> Movie Title : {card.original_title}</p>

            <div>
              <h2 className='overview'>Overview</h2>
              <p>{card.overview}</p>
            </div>
            <p className='movie-rating'>Rating: {Math.round(card.vote_average)}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default SingleVideoPage
