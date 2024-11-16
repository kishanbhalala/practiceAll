import React from 'react'
import BannerImg from '../../assets/images/banner.png';
import { FaShoppingBag } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' container mx-auto px-5 py-12 mt-5'>
                <div className='flex flex-col  md:flex-row-reverse justify-between items-center gap-14'>
                    {/* img  */}
                    <div className='md:w-1/2'>
                        <img src={BannerImg} alt="" />
                    </div>
                    <div className='md:w-1/2 sm:px-20'>
                        <h1 className='text-5xl font-light mb-5'>Collections</h1>
                        <p className='text-xl mb-7'>you can explore ans shop many differnt collection
                            from various barands here.</p>
                        <button className='bg-black flex items-center gap-2 hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm'><FaShoppingBag />Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
