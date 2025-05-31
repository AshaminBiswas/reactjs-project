import { useEffect, useState } from 'react'
import './App.css'
import Category from './components/Category'
import ItemCard from './components/ItemCard'
function App() {
  const [filterProduct, setFilterProduct] = useState('')
  const [card, setCard] = useState([])

  useEffect(() => {
    if (filterProduct !== "") {
      fetch(`https://dummyjson.com/products/category/${filterProduct}`)
        .then((res) => res.json()).then((data) => setCard(data.products))
    } else {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((cardData) => {
          setCard(cardData.products)
        })
    }
  }, [filterProduct])


  return (
    <>
      <div className='bg-green-100'>
        <div className='max-w-[1320px] px-4 grid grid-cols-[30%_auto] gap-2 text-white'>
          <div className='bg-gray-500'>
            <Category setFilterProduct={setFilterProduct} />
          </div>
          <div className='bg-zinc-400 p-4'>
            <h1 className='p-2 text-2xl font-semibold'>Items</h1>
            <ItemCard card={card} setCard={setCard} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
