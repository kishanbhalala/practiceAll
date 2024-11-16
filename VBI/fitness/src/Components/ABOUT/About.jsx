import React from 'react'
import BannerImg from "../../assets/banner.png"

const About = () => {
    return (
        <div>
            <div className=" py-16 dark:bg-black bg-slate-200 duration-200">
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
                    <div>
                        <img className='sm:scale-125 max-h-[300px] drop-shadow-md mx-auto' src={BannerImg} alt="" />
                    </div>
                    <div className='space-y-5 text-center sm:text-start sm:pl-20 md:pl-10 lg:pl-5'>
                        <div className='flex justify-center sm:justify-start  items-center gap-2'>
                            <div>
                                <h1 className='text-yellow-500 font-bold text-6xl'>01</h1>
                            </div>
                            <div>
                                <p className="text-yellow-500 text-xs font-bold">Global Fitness</p>
                                <h1 className="font-bold text-xl sm:text-2xl  dark:text-white">About us</h1>
                            </div>
                        </div>
                        <div className='dark:text-white px-[8rem] sm:px-0'>
                            <p>Lorem ipsum dolor sit Odio maxime nostrum et voluptatem sed repudiandae iusto nisi, deleniti nesciunt fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, accusamus?</p>
                        </div>
                        <button className='btn-about'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
