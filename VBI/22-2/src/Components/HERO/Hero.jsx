import React from 'react'
import BannerImg from "../../assets/hero3.jpg";

const Hero = () => {

    const BgStyle = {
        backgroundImage: `url(${BannerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        
    };

    return (
        <div>
            <div style={BgStyle} className='bg-cover bg-white dark:bg-black dark:text-white duration-200'>
                <div className='bg-white/60 dark:bg-black/60 duration-200'>
                    <div className='container min-h-[600px] flex items-center'>
                        <div className='w-full md:w-[550px] mx-auto text-center space-y-5'>
                            <h1 className='text-2xl text-yellow-700 font-bold'>Your Fitness Journey Begins!</h1>
                            <p className='text-5xl md:text-7xl font-bold'>Start Your Fitness Journey</p>
                            <p className='italic'>“The body achieves what the mind believes.”</p>
                            <button className='btn'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
