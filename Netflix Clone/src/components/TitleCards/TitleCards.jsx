import React from 'react'
import "./TitleCard.css"

import cardData from "../../assets/cards/Cards_data.js"
function TitleCards() {
  return (
    <div className='title-card'>
      <h2>Popular on Netflix</h2>
      <div className='card-list'>
        {cardData.map((card, index) => {
          return <div key={index}>
            <img className='card' src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
