import React from 'react'
import { useCartContext } from '../Context/Cart_Context'
import FormatPrice from '../Helpers/FormatPrice';
import CartAmountToggle from '../Components/CartAmountToggle';
import { FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, removeItem, clearCart, increment, decrement, total_price, shipping_fee } = useCartContext();
  // console.log("cart items: ", cart);

  const { isAuthenticated, user } = useAuth0();

  if (cart.length === 0) {
    return <div className='container mx-auto h-96 grid place-content-center'>
      <h1 className='text-6xl'>No Cart In Item</h1>
    </div>
  }

  return (
    <div className='container mx-auto mt-10 sm:py-20'>

      <div className='mb-20 px-5'>
        {isAuthenticated && (
          <div className='flex '>
            <img src={user.profile} alt={user.name} />
            <h1 className='text-3xl ml-10'>{user.name}</h1>
          </div>
        )}
      </div>

      <div className='flex justify-between font-semibold text-xs sm:text-base pb-3 px-5'>
        <p>Item</p>
        <p className='hidden sm:block sm:ml-48'>Price</p>
        <p className='ml-28 sm:ml-20'>Quantity</p>
        <p className='hidden sm:block sm:ml-10 md:ml-16'>SubTotal</p>
        <p>Remove</p>
      </div>
      <hr className='pb-5' />

      <div className='overflow-auto sm:h-56 px-5'>
        {
          cart.map((curEle) => {

            const { id, name, image, color, price, amount } = curEle;

            return (
              <>
                <div key={curEle.id} {...curEle} >
                  <div className='flex items-center justify-between'>

                    <div className='flex justify-center items-center'>

                      <div className='w-12 sm:w-20 mr-2 sm:mr-5'>
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

                    {/* subtotal  */}
                    <div>
                      <div className='hidden sm:block'>
                        <FormatPrice price={price * amount} />
                      </div>
                    </div>

                    {/* delete item  */}
                    <div>
                      <FaTrash className='hover:text-red-500' onClick={() => removeItem(id)} />
                    </div>

                  </div>

                </div>
              </>
            )
          })
        }
      </div>

      <hr className='my-5' />

      {/* two buttons  */}
      <div className='flex justify-between px-5'>

        <div>
          <NavLink to="/products">
            <button className='bg-[#473CA7] text-white px-2 py-2 sm:px-3 sm:py-3 font-semibold hover:bg-[#382f82]'>Continue Shopping</button>
          </NavLink>
        </div>
        <div>
          <button onClick={clearCart} className='bg-red-700 px-2 py-2 text-white sm:px-3 sm:py-3 font-semibold hover:bg-red-800'>Clear Cart</button>
        </div>

      </div>

      {/* billing  */}
      <div className='flex justify-end mt-10 px-5'>
        <div className=' content-center w-fit p-10 bg-gray-100 rounded-md'>

          <div className='flex mb-5 justify-between'>
            <p className='font-medium text-gray-700'>SubTotal : </p>
            <p className='font-bold ml-5'><FormatPrice price={total_price} /></p>
          </div>

          <div className='flex mb-5 justify-between'>
            <p className='font-medium text-gray-700'>Shipping Fee : </p>
            <p className='font-bold ml-5'><FormatPrice price={shipping_fee} /></p>
          </div>

          <hr className='my-2 border-black' />
          <div className='flex justify-between'>
            <p className='font-medium text-gray-700'>Order Total : </p>
            <p className='font-bold ml-5'><FormatPrice price={shipping_fee + total_price} /></p>
          </div>

          <NavLink to="/Submitbtn">
            <div className='text-center mt-3'>
              <button className='border bg-gray-400 px-4 py-2'>Submit</button>
            </div>
          </NavLink>

        </div>
      </div>

    </div>
  )
}

export default Cart
