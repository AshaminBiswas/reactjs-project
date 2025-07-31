import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
export const TitleCardContext = createContext(null)
export const TitleCardProvider = (props) => {
  const category = {
    popular: "popular",
    nowPlaying: "now_playing",
    upcoming: "upcoming",
    topRated: "top_rated"
  }
  const [videoData, setVideoData] = useState([])

  // console.log(now_playingId);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category.nowPlaying}?api_key=fe24812eab5bcea0b9ca338e1b0c3e37`)
      .then(res => res.json())
      .then(res => setVideoData(res.results.id))
      .catch(err => console.error(err)
      );
  }, [])




  // console.log("this is video id ", newVideoArr);


  return (
    <TitleCardContext.Provider value={{ category, videoData }}>
      {props.children}
    </TitleCardContext.Provider>
  )
}