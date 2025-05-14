import AllTheProducts from './AllTheProducts'
import FirstImage from './FirstImage'
import NewProducts from './NewProducts'
import Offers from './Offers'
import { useState } from 'react'

function NewFeatured() {
  return (
    <div className="relative">
      <Offers />
      <NewProducts />
      <FirstImage />
      <AllTheProducts />
    </div>
  )
}

export default NewFeatured