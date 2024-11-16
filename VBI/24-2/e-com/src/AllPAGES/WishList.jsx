import React, { useState } from 'react'
import { useWishContext } from '../Context/Wishlist_Context';
import FormatPrice from '../Helpers/FormatPrice';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../Context/Cart_Context';
import CartAmountToggle from '../Components/CartAmountToggle';


const WishList = () => {

  const { cart, wishRemoveItem } = useWishContext();
  // console.log("wishlist:", cart);

  const { addCart } = useCartContext();
  // console.log("addd wishlist thow", addCart);

  const increment = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].amount = (updatedCart[index].amount || 0) + 1;
      wishRemoveItem(updatedCart);
    }
  };

  const decrement = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].amount = Math.max((updatedCart[index].amount || 0) - 1, 1);
      wishRemoveItem(updatedCart);
    }
  };

  if (cart.length === 0) {
    return <div className='container mx-auto h-96 grid place-content-center'>
      <h1 className='text-6xl'>Wishlist is Empty</h1>
    </div>
  }

  return (
    <div className='container mx-auto mt-10 sm:py-20'>
      <div className='flex justify-between font-semibold text-xs sm:text-base pb-3 px-5 border-b '>
        <p>Item</p>
        <p className='hidden sm:block sm:ml-48'>Price</p>
        <p className='ml-28 sm:ml-20'>Quantity</p>
        <p>Remove</p>
        <p>Add Cart</p>
      </div>

      <div className='overflow-auto sm:h-56 px-5 mt-5'>
        {
          cart.map((curEle) => {

            const { id, name, image, color, price, amount } = curEle;
            {/* console.log("ddd", curEle) */ }

            return (
              <>
                <div key={curEle.id} {...curEle} >
                  <div className='flex items-center justify-between'>

                    <div className='flex justify-center items-center'>

                      <div className='w-12 sm:w-20 mr-2 sm:mr-5 mb-4'>
                        <img src={image} alt={id} />
                      </div>

                      <div>
                        <p className='font-medium text-xs sm:text-base'>{name}</p>
                        <div className='flex text-xs sm:text-base'>
                          <p className='text-xs sm:text-base'>Color:</p>
                          <p style={{ backgroundColor: color, color: color, width: "70px" }}>{color}</p>
                        </div>
                      </div>

                    </div>

                    {/* price  */}
                    <div className='hidden sm:block'>
                      <FormatPrice price={price} />
                    </div>

                    {/* Quantity  */}
                    <div className='ml-5'>
                      <CartAmountToggle
                        amount={amount}
                        increment={() => increment(id)}
                        decrement={() => decrement(id)}
                      />
                    </div>

                    {/* delete item  */}
                    <div>
                      <FaTrash className='hover:text-red-500' onClick={() => wishRemoveItem(id)} />
                    </div>

                    <div onClick={() => addCart(id, color, amount, curEle)}>
                      <button className='bg-[#6555F5] hover:bg-[#3f3e48] px-5 py-2 text-white'>Add To Cart</button>
                    </div>

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

export default WishList
