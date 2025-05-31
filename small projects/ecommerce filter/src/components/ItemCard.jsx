function ItemCard({ card }) {
  // if (!Array.isArray(card)) {
  //   return <p>Loading items...</p>
  // }
  return (

    <div className='grid grid-cols-3 gap-2'>
      {card.map((item) => (
        <div key={item.id} className='bg-white text-black p-2 rounded-2xl'>
          <img className='bg-gray-300 rounded-xl' src={item.thumbnail} alt={item.title} />
          <h3 className='text-xl font-semibold'>{item.title}</h3>
          <h4 className='font-semibold'>Price : 💲{item.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default ItemCard
