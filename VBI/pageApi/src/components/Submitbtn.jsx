import React from 'react'
import { NavLink } from 'react-router-dom'

const Submitbtn = () => {
    return (
        <div className='h-96 grid place-content-center'>
            <div className='container mx-auto'>
                <h1 className='text-xl sm:text-4xl'>Order Successfully</h1>
            </div>

            <div className='text-center mt-10'>
                <NavLink to="/">
                    <button className='bg-[#473CA7] text-white text-sm px-2 py-2 sm:text-xl sm:px-3 sm:py-3 font-semibold hover:bg-[#382f82]'>Continue Shopping</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Submitbtn