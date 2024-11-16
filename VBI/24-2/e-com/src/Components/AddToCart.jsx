import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/Cart_Context';
import { useWishContext } from '../Context/Wishlist_Context';


const AddToCart = ({ product }) => {

    const { addCart } = useCartContext();
    // console.log("add-to-cart",addCart);

    const { wislistAdd } = useWishContext();
    // console.log("add to cart throw", wislistAdd);

    const { id, colors, stock} = product;
    // console.log("wwww",product);

    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const increment = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    };
    const decrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };

    return (
        <div>
            {/* color change  */}
            <div>
                <p className='flex items-center mt-4'>
                    color:
                    {
                        colors.map((curColor, index) => {
                            return (
                                <>
                                    <button key={index} style={{ backgroundColor: curColor }}
                                        className={color === curColor ? "btnStyle active" : "btnStyle"}
                                        onClick={() => setColor(curColor)}>
                                        {color === curColor ? <FaCheck className='checkStyle ml-2' /> : null}
                                    </button>
                                </>
                            )
                        })
                    }
                </p>
            </div>

            {/* add to cart btn */}
            <div>
                <CartAmountToggle
                    amount={amount}
                    increment={increment}
                    decrement={decrement}
                />
                
                {/* product che te singleproduct j che  */}
                <NavLink to='/cart' onClick={() => addCart(id, color, amount, product)}>   
                    <button className='bg-[#6555F5] hover:bg-[#3f3e48] px-5 py-2 text-white '>Add To Cart</button>
                </NavLink>
                <NavLink to='/wishlist' onClick={() => wislistAdd(id, color, product)}>   
                    <button className='bg-[#55f58d] hover:bg-[#3f3e48] px-5 py-2 text-white '>WishList</button>
                </NavLink>
            </div>
        </div>
    )
}

export default AddToCart
