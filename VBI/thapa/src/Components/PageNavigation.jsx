import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ title }) => {
    return (
        <div className='bg-gray-100 '>
            <div className='text-2xl pt-6 pb-10 container mx-auto px-5'>
                <NavLink to="/"><span className='text-blue-400'>Home</span> </NavLink>/ {title}
            </div>
        </div>
    )
}

export default PageNavigation
