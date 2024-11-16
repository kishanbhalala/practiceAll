import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingBag, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toys & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" },
    ]

    const cartItem = useSelector(state => state.cart.cart);

    return (
        <div className=' z-30 sticky top-0 bg-white'>
            <div className='container mx-auto px-5'>
                <header className='py-5'>
                    <nav className='flex justify-between items-center my-5 '>

                        {/* search icon  */}
                        <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block  ' />

                        {/* logo  */}
                        <a href="/"><img src={Logo} alt="" /></a>

                        {/*account and shopping btn  */}
                        <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
                            <a href="/" className='flex items-center gap-2'><FaUser />Account</a>
                            <a href="/" className='flex items-center gap-2'><FaShoppingBag />Shopping</a>
                            <Link to="/cart" className='flex items-center gap-2'><FaShoppingCart />{cartItem.length}</Link>
                        </div>

                        {/* navbar for sm device  */}
                        <div className='sm:hidden'>
                            <button onClick={toggleMenu} className='h-7 w-7'>
                                {
                                    isMenuOpen ? <FaTimes className='w-5 h-5 cursor-pointer' /> : <FaBars className='w-5 h-5 cursor-pointer' />
                                }
                            </button>
                        </div>
                    </nav>

                    <hr />

                    {/* catagories item  */}
                    <div className='pt-4'>
                        <ul className='lg:flex justify-between items-center text-black hidden'>
                            {
                                navItems.map(({ title, path }) => (
                                    <li key={title} className='hover:text-orange-400'>
                                        <Link to="/">{title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* only mobile items  */}
                    <div>
                        <ul className={`bg-gray-900 text-white px-4 py-2 sm:hidden rounded-md ${isMenuOpen ? "" : "hidden"}`}>
                            {
                                navItems.map(({ title, path }) => (
                                    <li key={title} className='hover:text-orange-400 my-3 cursor-pointer'>
                                        <Link to="/">{title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar
