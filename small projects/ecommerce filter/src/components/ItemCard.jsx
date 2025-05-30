import React, { useEffect, useState } from 'react'

function ItemCard() {

  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((cardData) => {
        setCard(cardData.products)
      })
  }, [])


  return (
    <div className='grid grid-cols-3 gap-2'>

      {card.map((item) => {
        return (
          <div key={item.id} className='bg-white text-black p-2 rounded-2xl'>
            <img className='bg-gray-300 rounded-xl' src={item.thumbnail} alt={item.title} />
            <h3 className='text-xl font-semibold'>{item.title}</h3>
            <h4 className='font-semibold'>Price : 💲{item.price}</h4>
            <p>{item.availabilityStatus}</p>
          </div>
        )
      })}

    </div>
  )
}

export default ItemCard
