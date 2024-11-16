import React from 'react'

const Pricing = () => {
    return (
        <div className='py-14 dark:bg-black dark:text-white duration-200'>
            <div className="container ">
                <h1 className='text-3xl text-center font-bold mb-8'>Why <span className='text-yellow-400'> Choose</span> Us</h1>

                <div className='mx-10 lg:grid lg:gap-10 lg:grid-cols-3'>
                    <div className='bg-slate-300 mb-10 p-5 py-16 text-center rounded-lg dark:bg-[#121113] hover:bg-[#6B7280] dark:hover:bg-yellow-400/30'>
                        <h1 className='font-bold text-2xl mb-3'>Golden Card</h1>
                        <h1 className='font-extrabold text-2xl mb-4 text-yellow-500'>$499</h1>
                        <div className='leading-8'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>ipsum Lorem  dolor amet.</p>
                            <p>dolor Lorem ipsum  sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                            <h1 className='font-bold text-xl my-5'>Duration: 6 month</h1>
                        </div>
                        <button className='btn'>Get Started</button>
                    </div>

                    <div className='bg-slate-300 mb-10 p-5 py-16 text-center rounded-lg dark:bg-[#121113] hover:bg-[#6B7280] dark:hover:bg-yellow-400/30'>
                        <h1 className='font-bold text-2xl mb-3'>Flexibale Card</h1>
                        <h1 className='font-extrabold text-2xl mb-4 text-yellow-500'>$899</h1>
                        <div className='leading-8'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>ipsum Lorem  dolor amet.</p>
                            <p>dolor Lorem ipsum  sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                            <h1 className='font-bold text-xl my-5'>Duration: 8 month</h1>
                        </div>
                        <button className='btn'>Get Started</button>
                    </div>

                    <div className='bg-slate-300 mb-10 p-5 py-16 text-center rounded-lg dark:bg-[#121113] hover:bg-[#6B7280] dark:hover:bg-yellow-400/30'>
                        <h1 className='font-bold text-2xl mb-3'>Platinum Card</h1>
                        <h1 className='font-extrabold text-2xl mb-4 text-yellow-500'>$1299</h1>
                        <div className='leading-8'>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>ipsum Lorem  dolor amet.</p>
                            <p>dolor Lorem ipsum  sit amet.</p>
                            <p>Lorem, ipsum dolor.</p>
                            <h1 className='font-bold text-xl my-5'>Duration: 12 month</h1>
                        </div>
                        <button className='btn'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
