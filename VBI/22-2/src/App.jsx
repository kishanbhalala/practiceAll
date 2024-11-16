import React from 'react'
import './App.css'
import Navbar from './Components/NAVBAR/Navbar'
import Hero from './Components/HERO/Hero'
import About from './Components/ABOUT/About'
import About2 from './Components/ABOUT/About2'
import About3 from './Components/ABOUT/About3'
import Contact from './Components/CONTACT/Contact'
import Pricing from './Components/PRICING/Pricing'
import TestSlick from './Components/TESTIMONIALS/TestSlick'
import Footer from './Components/FOOTER/Footer'


function App() {

  return (
    <>
      <div className='overflow-x-hidden dark:bg-black '>
        <Navbar />
        <Hero />
        <About />
        <About2 />
        <About3 />
        <Contact />
        <Pricing />


        <div className='Single-Img dark:container relative'>
          <div>
            <img className='w-full max-h-[500px] bg-cover rounded-md' src="./src/assets/dumbell.jpg" alt="" />
            <div className='absolute top-24 right-6 text-white text-center w-[350px] sm:w-[430px] md:w-[530px] sm:top-28 sm:right-18 md:top-36 md:right-24 xl:top-28 xl:right-28 xl:w-[700px] dark:md:top-20'>
              <h1 className='font-extrabold text-2xl mb-4 sm:text-4xl md:text-5xl md:mb-10 xl:text-6xl'>Get Start With our app</h1>
              <p className='text-xs mb-4 px-4 sm:text-base md:mb-10 xl:text-xl'>Lorem ipsum dolor sit amet  Maxime quas corporis dolore aliquid commodi  suscipit esse.</p>
              <div className='flex justify-center'>
                <img className='w-24 sm:w-28 md:w-36 xl:w-52' src="./src/assets/website/play_store.png" alt="" />
                <img className='w-24 sm:w-28 md:w-36 xl:w-52' src="./src/assets/website/app_store.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <TestSlick/>
        <Footer/>

      </div>
    </>
  )
}

export default App
