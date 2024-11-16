
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus } from "react-icons/fa";
import { decrementQuantity, emptyCart, incrementQuantity, removeToCart } from '../Redux/Action'
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const dispatch = useDispatch()

    const cartData = useSelector((state) => state.cartData)

    // console.log("cart page ", cartData);

    let amo = cartData.length && cartData.map((item) => item?.prices?.price * item?.quantity).reduce((prev, next) => prev + next);
    let amount = amo.toFixed(2)

    if (cartData.length === 0) {
        return <div className='container mx-auto h-96 grid place-content-center'>
            <h1 className='text-6xl'>No Cart In Item</h1>
        </div>
    }

    return (
        <div className='container mx-auto mt-10'>

            <div className='flex justify-end my-10 px-3'>
                <button className='hover:underline' onClick={() => dispatch(emptyCart())}>ClearCart</button>
            </div>

            <div className='flex justify-between font-semibold text-xs sm:text-base pb-3 px-5'>
                <div className='flex mr-20'>
                    <p className='mr-5'>Image</p>
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
                    cartData.map((item) => {
                        {/* console.log("cartdata",item) */ }

                        const sub = item?.prices?.price * item?.quantity;
                        const subtotal = sub.toFixed(2)

                        return (
                            <>
                                <div className='flex justify-between items-center' key={item?._id}>
                                    <NavLink to={`/product/${item?.slug}`} className='flex items-center'>
                                        <img src={item?.image} alt="" className='w-16' />
                                        <span> {item?.title?.en}</span>
                                    </NavLink>
                                    <div>
                                        {item?.prices?.price}
                                    </div>
                                    <div className='flex'>
                                        <button className=' ' onClick={() => dispatch(decrementQuantity(item.productId))}>
                                            <FaMinus />
                                        </button>
                                        <p className='w-10 text-center'>{item.quantity}</p>
                                        <button className=' ' onClick={() => dispatch(incrementQuantity(item.productId))}>
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <div>
                                        <p>{subtotal}</p>
                                    </div>
                                    <div>
                                        <button className='border p-2 bg-blue-300' onClick={() => dispatch(removeToCart(item?.productId))}>Remove</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

            <div className='flex justify-end mt-10 px-5'>
                <div className=' content-center w-fit p-10 bg-gray-100 rounded-md'>

                    <div className='flex justify-between'>
                        <p className='font-medium text-gray-700'>Total : </p>
                        <p>{amount}</p>
                    </div>

                    <NavLink to="/Submitbtn">
                        <div className='text-center mt-3' onClick={() => dispatch(emptyCart())}>
                            <button className='border bg-gray-400 px-4 py-2'>Submit</button>
                        </div>
                    </NavLink>

                </div>
            </div>

        </div>
    )
}

export default Cart

