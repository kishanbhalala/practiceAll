import React from 'react'
import Logo from "../../assets/logo.png"
import DarkMode from './DarkMode';

export const Navlinks = [
    {
        id: 1,
        name: "SERVICES",
        link: "/#services",
    },
    {
        id: 2,
        name: "ABOUT",
        link: "/#about",
    },
    {
        id: 3,
        name: "JOIN",
        link: "/#join",
    },
];

const Navbar = () => {
    return (
        <div>
            <nav className='shadow-lg w-full bg-white  dark:bg-black dark:text-white '>
                <div className="container">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-3 group'>
                            <i class="fa-solid fa-phone-volume text-xl text-yellow-300 animate-pulse group-hover:scale-110 duration-200"></i>
                            <span className='font-semibold'>+9923322933</span>
                        </div>
                        <div>
                            <img className='w-16 sm:w-24 m-3' src={Logo} alt="" />
                        </div>
                        <div>
                            <ul className='flex items-center gap-4'>
                                {
                                    Navlinks.map(({id,name,link}) => {
                                        return (
                                            <li key={id}>
                                                <a href={link} className='inline-block text-lg font-semibold hover:text-yellow-300 duration-200'>{name}</a>
                                            </li>
                                        )
                                    })
                                }
                                <DarkMode/>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
