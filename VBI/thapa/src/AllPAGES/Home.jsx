import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services';
import Trusted from '../Components/Trusted';
import FeatureProduct from '../Components/FeatureProduct';

const Home = () => {

  const data = {
    name: "Shopping Store",
  };

  return (

    <div>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </div>
    
  )
}

export default Home
