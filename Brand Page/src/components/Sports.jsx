import React from 'react'
import MenSports from '../components/category/MenSports'
import MenTrending from '../components/category/MenTrending'
import WomenTrending from '../components/category/WomenTrending'
import WomenSports from '../components/category/WomenSports'
import HeroShopBySports from './HeroShopBySports'
import HeroSecThree from './HeroSecThree'

function Sports() {
  return (
    <div>
      <HeroShopBySports />
      <HeroSecThree />
      <MenSports />
      <MenTrending />
      <WomenSports />
      <WomenTrending />
    </div>
  )
}

export default Sports
