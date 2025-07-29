import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="hero section banner photo" className='banner-image' />
        <div className="hero-caption">
          <img src={hero_title} alt="Hero title image" className='hero-title-image' />
          <p>Discover his ties to a secret ancient order, a young man living in modern <br /> Istanbul embark  to save the city from an immortal enemy.</p>
          <div className='hero-buttons'>
            <button className='btn'><img src={play_icon} alt="Play button icon image" />Play</button>
            <button className='btn dark'><img src={info_icon} alt="Info button icon image" />Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
    </div>
  )
}

export default Home
