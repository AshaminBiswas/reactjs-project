import React from 'react'
import "./Footer.css"
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="youtube icon" />
        <img src={twitter_icon} alt="twitter icon" />
        <img src={facebook_icon} alt="facebook icon" />
        <img src={instagram_icon} alt="instagram icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Contact Us</li>
        <li>Cookie Preference</li>
        <li>Subscriptions</li>
      </ul>
      <p className='copyright'>&copy; 1997-2025 Netflix, Inc </p>
    </div>
  )
}

export default Footer
