import React from 'react'
import SideFilter from './SideFilter'
// imports Images
import image1 from '../../assets/new featured/products/image1.jpg'
import image2 from '../../assets/new featured/products/image2.jpg'
import image3 from '../../assets/new featured/products/image3.jpg'
import image4 from '../../assets/new featured/products/image4.jpg'
import image5 from '../../assets/new featured/products/image5.jpg'
import image6 from '../../assets/new featured/products/image6.jpg'
import image7 from '../../assets/new featured/products/image7.jpg'
import image8 from '../../assets/new featured/products/image8.jpg'
import image9 from '../../assets/new featured/products/image9.jpg'
import image10 from '../../assets/new featured/products/image10.jpg'
import image11 from '../../assets/new featured/products/image11.jpg'
import image12 from '../../assets/new featured/products/image12.jpg'
import image13 from '../../assets/new featured/products/image13.jpg'
import image14 from '../../assets/new featured/products/image14.jpg'
import image15 from '../../assets/new featured/products/image15.jpg'
import image16 from '../../assets/new featured/products/image16.jpg'
import image17 from '../../assets/new featured/products/image17.jpg'
import image18 from '../../assets/new featured/products/image18.jpg'
import image19 from '../../assets/new featured/products/image19.jpg'
import image20 from '../../assets/new featured/products/image20.jpg'

function AllTheProducts() {

  const productsDetails = [
    {
      id: 1,
      product: image1,
      launch: "Just In",
      title: "Nike Air Pegasus Wave",
      useCase: "Men's Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 14 995.00"
    },
    {
      id: 2,
      product: image2,
      launch: "Just In",
      title: "Nike Field General",
      useCase: "Women's Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 8 695.00"
    },
    {
      id: 3,
      product: image3,
      launch: "Just In",
      title: "Nike Zoom Fly 6 Jakob Intebrigtsen",
      useCase: "Men's Road Racing Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 16 995.00"
    },
    {
      id: 4,
      product: image4,
      launch: "Just In",
      title: "Nike ReactX Rejuven8",
      useCase: "Men's Slide's",
      color: "1 Colour",
      price: "MRP : ₹ 4 695.00"
    },
    {
      id: 5,
      product: image5,
      launch: "Coming Soon",
      title: "Nike Vaporfly 4 ' Jakbo Intebrigtsen",
      useCase: "Men's Road Racing Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 22 495.00"
    },
    {
      id: 6,
      product: image6,
      launch: "Promo Exclusion",
      title: "NIKE P-6000 PRM",
      useCase: "Men's Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 11 495.00"
    },
    {
      id: 7,
      product: image7,
      launch: null,
      title: "NIKE Zegama 2",
      useCase: "Women's Trail-Running Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 16 995.00"
    },
    {
      id: 8,
      product: image8,
      launch: "Coming Soon",
      title: "Jordan Heir Series PF Bloodline",
      useCase: "Basketball Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 9 695.00"
    },
    {
      id: 9,
      product: image9,
      launch: "Just In",
      title: "Jordan Heir Series PF Mother's Day",
      useCase: "Women's Basketball Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 9 695.00"
    },
    {
      id: 10,
      product: image10,
      launch: "Just In",
      title: "Nike Streakfly 2",
      useCase: "Road Racing Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 16 995.00"
    },
    {
      id: 11,
      product: image11,
      launch: "Just In",
      title: "Nike Air Pegasus Wave",
      useCase: "Men's Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 14 995.00"
    },
    {
      id: 12,
      product: image12,
      launch: "Just In",
      title: "Nike Field General",
      useCase: "Women's Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 8 695.00"
    },
    {
      id: 13,
      product: image13,
      launch: "Just In",
      title: "Nike Zoom Fly 6 Jakob Intebrigtsen",
      useCase: "Men's Road Racing Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 16 995.00"
    },
    {
      id: 14,
      product: image14,
      launch: "Just In",
      title: "Nike ReactX Rejuven8",
      useCase: "Men's Slide's",
      color: "1 Colour",
      price: "MRP : ₹ 4 695.00"
    },
    {
      id: 15,
      product: image15,
      launch: "Coming Soon",
      title: "Nike Vaporfly 4 ' Jakbo Intebrigtsen",
      useCase: "Men's Road Racing Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 22 495.00"
    },
    {
      id: 16,
      product: image16,
      launch: "Promo Exclusion",
      title: "NIKE P-6000 PRM",
      useCase: "Men's Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 11 495.00"
    },
    {
      id: 17,
      product: image17,
      launch: null,
      title: "NIKE Zegama 2",
      useCase: "Women's Trail-Running Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 16 995.00"
    },
    {
      id: 18,
      product: image18,
      launch: "Coming Soon",
      title: "Jordan Heir Series PF Bloodline",
      useCase: "Basketball Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 9 695.00"
    },
    {
      id: 19,
      product: image19,
      launch: "Sustainable Materials",
      title: "Nike GT.Hustle 3",
      useCase: "Basketball Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 17 495.00"
    },
    {
      id: 20,
      product: image20,
      launch: "Sustainable Materials",
      title: "Nike GT.Hustle 3",
      useCase: "Basketball Shoes",
      color: "1 Colour",
      price: "MRP : ₹ 17 495.00"
    },
  ]


  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {productsDetails.map((product) => (
            <div key={product.id} className="rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="w-full">
                <img
                  src={product.product}
                  alt={product.title}
                  className="w-full h-[330px] object-cover"
                />
              </div>
              <div className="px-4">
                <p className="text-red-400 font-medium">{product.launch}</p>
                <h2 className="text-lg font-semibold ">{product.title}</h2>
                <p className="text-gray-600">{product.useCase}</p>
                <p className="text-gray-600">{product.color}</p>
                <p className="text-lg font-bold ">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllTheProducts
