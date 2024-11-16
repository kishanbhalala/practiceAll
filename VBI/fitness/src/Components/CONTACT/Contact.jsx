import React from 'react'

const Contact = () => {
    return (
        <div className='dark:bg-gray-900  bg-[#CBD5E1] py-20 px-20 sm:px-10 lg:px-20'>
            <div className="container bg-gray-500 py-14 rounded-md">
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
                    <div className='col-span-2 text-center px-10 sm:text-start'>
                        <h1 className=' font-bold  text-black/60 dark:text-white/70 text-base sm:text-xl md:text-2xl lg:text-4xl'>
                        <span className='text-yellow-500'>Lorem ipsum dolor sit</span> amet consectetur, adipisicing elit. Expedita, nostrum laborum? Porro, quos!</h1>
                    </div>
                    <div className='pl-5 grid place-items-center'>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
