import React from 'react'
import { useCartContext } from '../Context/CartContext'
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const { cart, removeCartItem, incrementQuantity, decrementQuantity, clearCart, } = useCartContext();
    console.log("cart", cart);

    if (cart.length === 0) {
        return <div className='container mx-auto h-96 grid place-content-center'>
            <h1 className='text-6xl'>No Cart In Item</h1>
        </div>
    }

    return (
        <div className='container mx-auto mt-10'>
            <div className='flex justify-end mb-5 hover:underline cursor-pointer' onClick={clearCart}>
                <h1>Clear All</h1>
            </div>
            <hr className='pt-5' />
            <div className='flex justify-between font-semibold text-xs sm:text-base pb-3 px-5'>
                <div className='flex'>
                    <p>Image</p>
                    <p>Name</p>
                </div>
                <p className=''>Price</p>
                <p className=''>Quantity</p>
                <p className=''>SubTotal</p>
                <p>Remove</p>
            </div>
            <hr className='pb-5' />

            <div className='space-y-4'>
                {
                    cart?.map((item) => {
                        console.log("Item", item);

                        const subtotal = item?.prices?.price * item?.quantity;

                        return (
                            <>
                                <div className='flex justify-between items-center'>

                                    {/* <NavLink to={`/products/${item.productId}`}>
                                           <img src={item?.image} alt="" className='w-16 rounded-full' />
                                         </NavLink> */}
                                    <div className='flex items-center'>
                                        <NavLink to="/">
                                            <img src={item?.image} alt="" className='w-16 rounded-full' />
                                        </NavLink>
                                        <span> {item?.title?.en}</span>
                                    </div>

                                    <div>
                                        {item?.prices?.price}
                                    </div>
                                    
                                    <div className='flex space-x-2'>
                                        <button onClick={() => decrementQuantity(item?.productId)}><FaMinus /></button>
                                        <p className='w-10 text-center'>{item?.quantity}</p>
                                        <button onClick={() => incrementQuantity(item?.productId)}><FaPlus /></button>
                                    </div>
                                    <div>{subtotal}</div>
                                    <div>
                                        <button className='border p-2 bg-blue-300' onClick={() => removeCartItem(item?.productId)}>Remove</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
