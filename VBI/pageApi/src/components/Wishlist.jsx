
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decrementQuantity, incrementQuantity, wishlistRemove } from '../Redux/Action'
import { FaMinus, FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Wishlist = () => {

  const dispatch = useDispatch()

  const wishData = useSelector((state) => state.wishData)
  // console.log("wish page ", wishData);

  if (wishData.length === 0) {
    return <div className='container mx-auto h-96 grid place-content-center'>
      <h1 className='text-6xl'>Empty Wishlist</h1>
    </div>
  }

  return (
    <div className='container mx-auto mt-10'>
      <div className='flex justify-between font-semibold text-xs sm:text-base pb-3 px-5'>
        <div className='flex mr-5'>
          <p className='mr-5'>Image</p>
          <p>Name</p>
        </div>
        <p className=''>Price</p>
        <p className=''>Quantity</p>
        <p>Remove</p>
      </div>
      <hr className='pb-5' />

      <div className='space-y-4'>
        {
          wishData.map((item) => {
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
                    <NavLink to="/Cart" className='border p-2 bg-blue-300' onClick={() => dispatch(addToCart(item))}>AddCart</NavLink>
                    <button className='border p-2 bg-blue-300' onClick={() => dispatch(wishlistRemove(item?.productId))}>Remove</button>
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

export default Wishlist

