import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'
import Products from './Products'
import Collection from './Collection'
import BestSeller from './BestSeller'
import NewLetters from './NewLetters'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Catagory/>
      <Products/>
      <Collection/>
      <BestSeller/>
      <NewLetters/>
    </div>
  )
}

export default Home
