import React from 'react'
import image1 from '../../assets/new featured/image1.jpg';
function FirstImage() {
  return (
    <div className="relative">
      <img className="h-[200px] w-full object-cover" src={image1} alt="Background image" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-lg sm:text-3xl font-extrabold pb-2 leading-none text-white">
          "WHATEVER YOU WANT, IT'S RIGHT THERE. YOU SEE IT, YOU WANT IT. GO GET IT"
        </h1>
        <p className="text-white">-A'ja Wilson</p>
      </div>
    </div>
  )
}

export default FirstImage
