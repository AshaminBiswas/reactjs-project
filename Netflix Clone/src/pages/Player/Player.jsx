
import { useRef } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
function Player() {

  const embed = `https://.icu/embed/movie/${apiData.id}`
  console.log(embed)
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=fe24812eab5bcea0b9ca338e1b0c3e37`)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err)
      );
  }, [])

  return (
    <>
      <div>
        <h1>{apiData.title}</h1>
        <div>
          <iframe src={embed}></iframe>
        </div>
      </div>
    </>
  )
}

export default Player
