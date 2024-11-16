import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({ myData }) => {

    const { name } = myData;

    return (
        <div className='container mx-auto px-5 py-40'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 '>
                {/* detail section  */}
                <div className='flex flex-col justify-center '>
                    <p className='font-semibold text-xl mb-7'>WELCOME TO</p>
                    <h1 className='font-semibold text-6xl mb-7'>{name}</h1>
                    <p className='text-gray-600 mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt numquam reprehenderit cum autem nam molestias nobis saepe suscipit fugiat praesentium est sequi delectus, porro cumque earum debitis pariatur quos quisquam!</p>
                    <NavLink>
                        <button className='bg-[#6555F5] hover:bg-[#473ca7] px-3 py-2 text-white'>SHOP NOW</button>
                    </NavLink>
                </div>

                {/* img section  */}
                <div className='relative'>
                    <div>
                        <img src="/images/hero.jpg" className='md:h-96 md:w-full md:object-cover' alt="" />
                    </div>
                    <div className='xl:h-[300px] xl:w-[550px] absolute -top-10 -right-10 -z-10 bg-[#9a90f8]'>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default HeroSection
