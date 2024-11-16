import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
import { useCartContext } from '../Context/Cart_Context';
import { useAuth0 } from "@auth0/auth0-react";
import { useWishContext } from '../Context/Wishlist_Context';
import { GrFormView } from "react-icons/gr";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { total_item } = useCartContext();
    const { cart } = useWishContext();


    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='bg-gray-100 w-full px-5 py-5 sticky top-0 z-30'>
            <nav className='container mx-auto flex justify-between items-center '>
                <div className=''>
                    <NavLink to="/">
                        <img src="/images/logo.png" className='' alt="" />
                    </NavLink>
                </div>

                <div>
                    <div className='hidden sm:block'>
                        <ul className='flex gap-5 font-semibold '>
                            <li className='hover:text-[#473CA7]'>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className='hover:text-[#473CA7]'>
                                <NavLink to="/About">
                                    About
                                </NavLink>
                            </li>
                            <li className='hover:text-[#473CA7]'>
                                <NavLink to="/Products">
                                    Products
                                </NavLink>
                            </li>
                            <li className='hover:text-[#473CA7]'>
                                <NavLink to="/Contact">
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                {isAuthenticated && <h1 className='text-red-500 text-sm pt-1 hover:text-blue-500'>{user.name}</h1>}
                            </li>

                            <li>
                                {isAuthenticated ? (
                                    <li>
                                        <button className='underline text-red-500 hover:text-blue-500' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button>
                                    </li>
                                ) : (
                                    <li>
                                        <button className='underline text-blue-500 ' onClick={() => loginWithRedirect()}>Log In</button>
                                    </li>)
                                }
                            </li>

                            <li>
                                <NavLink to="/Wishlist" className="flex items-center relative">
                                    <FaRegHeart className='text-2xl' />
                                    <h1 className='absolute -right-3.5 -top-2.5 bg-red-500 h-6 w-6 rounded-full text-white pl-[6px]'>{cart.length}</h1>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/Cart" className="flex items-center relative">
                                    <FiShoppingCart className='text-2xl' />
                                    <h1 className='absolute -right-3.5 -top-2.5 bg-blue-500 h-6 w-6 rounded-full text-white pl-[6px]'>{total_item}</h1>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/RecentView" className="flex items-center relative">
                                    <GrFormView className='text-3xl' />
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* two button open and close  */}
                    <div>
                        <div className='sm:hidden relative'>
                            <button onClick={toggleMenu} className='h-7 w-7'>
                                {
                                    isMenuOpen ? <FaTimes className='w-5 h-5 cursor-pointer absolute top-2 right-2' /> : <FaBars className='w-5 h-5 cursor-pointer ' />
                                }
                            </button>
                        </div>
                    </div>
                    <div>
                        <ul className={`w-[93vw] space-y-7 flex flex-col items-center text-black font-bold py-2 sm:hidden rounded-md ${isMenuOpen ? "" : "hidden"}`}>
                            <li className='hover:text-blue-400 '>
                                <NavLink to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-400'>
                                <NavLink to="/About">
                                    About
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-400'>
                                <NavLink to="/Products">
                                    Products
                                </NavLink>
                            </li>
                            <li className='hover:text-blue-400'>
                                <NavLink to="/Contact">
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/Wishlist" className="flex items-center relative">
                                    <FaRegHeart className='text-2xl' />
                                    <h1 className='absolute -right-3.5 -top-2.5 bg-red-500 h-6 w-6 rounded-full text-white pl-[6px]'>{cart.length}</h1>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/Cart" className="flex items-center relative">
                                    <FiShoppingCart className='text-2xl' />
                                    <h1 className='absolute -right-3.5 -top-2.5 bg-blue-500 h-6 w-6 rounded-full text-white pl-1.5'>{total_item}</h1>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/RecentView" className="flex items-center relative">
                                    <GrFormView className='text-3xl' />
                                </NavLink>
                            </li>

                            <li>
                                {isAuthenticated && <h1 className='text-red-500 text-sm pt-1 hover:text-blue-500'>{user.name}</h1>}
                            </li>

                            <li>
                                {isAuthenticated ? (
                                    <li>
                                        <button className='underline text-red-500 hover:text-blue-500' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </button>
                                    </li>
                                ) : (
                                    <li>
                                        <button className='underline text-blue-500 ' onClick={() => loginWithRedirect()}>Log In</button>
                                    </li>)
                                }
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
