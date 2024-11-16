import React from 'react'

const Services = () => {
    return (
        <div>
            <div className='container mx-auto px-5 py-10 pt-28'>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-3 '>

                    <div className='flex items-center h-28 bg-gray-100 md:h-60 md:flex-col md:justify-center md:px-10 md:text-center'>
                        <div><i class="fa-solid fa-truck-fast bg-white  p-5 rounded-full md:mb-5 mx-3  text-[#6555F5]"></i></div>
                        <h1 className='capitalize font-semibold pb-4'>Super fast and free delivery</h1>
                    </div>
                    <div className=''>
                        <div className='flex items-center md:justify-center h-28 bg-gray-100 mb-[40px] md:mb-[20px]'>
                            <div><i class="fa-solid fa-shield-halved bg-white p-5 rounded-full sm:mb-5 mx-3  text-[#6555F5]"></i></div>
                            <h1 className='capitalize font-semibold pb-4'>non-contact shipping</h1>
                        </div>
                        <div className='flex  items-center md:justify-center h-28 bg-gray-100'>
                            <div><i class="fa-solid fa-money-bill-wheat bg-white  p-5 rounded-full sm:mb-5 mx-3  text-[#6555F5]"></i></div>
                            <h1 className='capitalize font-semibold pb-4'>money-back guaranteed</h1>
                        </div>
                    </div>
                    <div className='flex  items-center h-28 bg-gray-100 md:h-60 md:flex-col md:justify-center md:px-10 md:text-center'>
                        <div><i class="fa-solid fa-shield bg-white  p-5 rounded-full md:mb-5 mx-3  text-[#6555F5]"></i></div>
                        <h1 className='capitalize font-semibold pb-4'>super secure payment system</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
