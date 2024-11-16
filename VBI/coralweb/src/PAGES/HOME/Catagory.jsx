import React from 'react'
import { Link } from 'react-router-dom'

const compnayLogo = [
    { id: 1, img: "./src/assets/images/company/brand1.png" },
    { id: 2, img: "./src/assets/images/company/brand2.png" },
    { id: 3, img: "./src/assets/images/company/brand3.png" },
    { id: 4, img: "./src/assets/images/company/brand4.png" },
    { id: 5, img: "./src/assets/images/company/brand5.png" },
]
const Catagory = () => {
    return (
        <div>
            <div className='container mx-auto my-10 px-5'>
                {/* brand logo  */}
                <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
                    {
                        compnayLogo.map(({ id, img }) => (
                            <div className='' key={id}><img src={img} alt="" /></div>
                        ))
                    }
                </div>

                {/* Catagory grid  */}
                <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
                    <p className='font-semibold mb-4 uppercase text-center md:-rotate-90 bg-black text-white p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
                    <div>
                        <Link to="/"><img src="./src/assets/images/category/image1.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
                    </div>
                    <div className='md:w-1/2'>
                        <div className='grid grid-cols-2 gap-2'>
                            <Link to="/"><img src="./src/assets/images/category/image2.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                            <Link to="/"><img src="./src/assets/images/category/image3.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                            <Link to="/"><img src="./src/assets/images/category/image4.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                            <Link to="/"><img src="./src/assets/images/category/image5.png" alt="" className='w-full hover:scale-105 transition-all duration-200'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory
