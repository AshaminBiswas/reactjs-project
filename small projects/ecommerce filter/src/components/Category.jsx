import React, { useEffect, useState } from 'react'

function Category({ setFilterProduct }) {
  const [category, setCategory] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((data) => setCategory(data));
  }, [])

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/category/${category.title}`)
  //     .then(res => res.json())
  //     .then((data) => console.log(data.products)
  //     )
  // }, [category])

  return (
    <div className='py-2'>
      {/* <h1 className='p-2 font-semibold text-2xl'>Category</h1> */}
      <ul className='flex flex-col'>
        {category.map((category) => <li onClick={() => setFilterProduct(category.name)} className='cursor-pointer' key={category.slug}>{category.name}</li>)}
      </ul>
    </div>
  )
}

export default Category
