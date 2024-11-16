import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import { useWishContext } from '../Context/WishContext';

const Navbar = () => {

    const { cart } = useCartContext();
    const { wish } = useWishContext();

    return (
        <div className='sticky top-0'>
            <nav className=' bg-slate-400 p-5 '>

                <div className='flex container mx-auto justify-between '>
                    <NavLink to="/">
                        <h1 className='font-bold text-2xl'>Back To Home</h1>
                    </NavLink>

                    <div className='flex space-x-7'>
                        <NavLink to="/wishlist" className="flex items-center relative">
                            <FaHeart size={24} />
                            <h1 className='absolute -right-3.5 -top-2.5 bg-blue-500 h-6 w-6 rounded-full text-white pl-1.5'>{wish?.length}</h1>
                        </NavLink>

                        <NavLink to="/cart" className="flex items-center relative">
                            <FaShoppingCart size={24} />
                            <h1 className='absolute -right-3.5 -top-2.5 bg-red-500 h-6 w-6 rounded-full text-white pl-1.5'>{cart?.length}</h1>
                        </NavLink>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
