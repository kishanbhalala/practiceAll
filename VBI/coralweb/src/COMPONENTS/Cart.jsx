import React from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removetocart } from '../reduxFolder/cartSlice'



const Cart = () => {

    const cartItem = useSelector(state => state.cart.cart);
    console.log(cartItem);
    const dispatch = useDispatch()

    return (
        <div className='container  mx-auto px-5 my-10 space-y-5 py-10 bg-gray-200 overflow-auto h-[291px] '>
            {
                cartItem.map((item, index) => {
                    return (
                        <>
                            <div className='flex items-center' key={index}>
                                <div>
                                    <button className='border pb-10 text-2xl mr-3 px-2 py-1 mt-6 font-semibold bg-gray-200' onClick={() => dispatch(removetocart({ id: item?.item?.id }))}><IoCloseCircle /></button>
                                </div>
                                <div>
                                    <img className='h-20 w-20 mr-4' src={item?.item?.image} alt="" />
                                </div>
                                <div className='w-[400px]'>
                                    <h1>{item?.item?.title}</h1>
                                </div>

                                <div className='flex  '>
                                    <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2  text-black duration-300' onClick={() => dispatch(increment(item.id))}>
                                        -
                                    </button>
                                    <h1 className='font-semibold text-lg w-14 text-center'>{item.quantity}</h1>
                                    <button className='ring-white flex justify-center items-center h-7 w-7 bg-[#F6F7FB] rounded-full cursor-pointer hover:ring-[#3577F0]  hover:ring-2 text-black duration-300 text-base' onClick={() => dispatch(decrement(item.id))}>
                                        +
                                    </button>
                                </div>

                            </div>
                        </>
                    )
                })
            }

        </div>
    )
}
export default Cart

