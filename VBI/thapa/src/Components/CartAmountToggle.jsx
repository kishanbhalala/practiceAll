import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, increment, decrement }) => {
    return (
        <div>
            <div className='my-5'>
                <button onClick={decrement} className=''><FaMinus /></button>
                <span className='mx-2 sm:mx-10 text-xl font-bold text-blue-400'>{amount}</span>
                <button onClick={increment} className=''><FaPlus /></button>
            </div>
        </div>
    )
}

export default CartAmountToggle
