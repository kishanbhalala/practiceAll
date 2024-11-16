import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormatPrice from '../Helpers/FormatPrice';
import { useWishContext } from '../Context/Wishlist_Context';
import { FaRegHeart } from "react-icons/fa";

const Product = (curEle) => {

    const { id, name, image, price, category } = curEle;
    // console.log(curEle);

    const [color, setColor] = useState(curEle?.colors[0]);

    const { wislistAdd } = useWishContext();

    return (
        <div className='relative'>
            <NavLink to={`/SingleProducts/${id}`}>
                <div className='bg-white rounded-md p-5 '>
                    <figure className='relative'>
                        <img src={image} alt={name} className='mb-5 h-full lg:h-60 lg:w-full hover:scale-105 duration-200 hover:bg-black' />
                        <figcaption className='bg-white w-fit rounded-full absolute top-5 right-5 px-5 py-2'>{category}</figcaption>
                    </figure>

                    <div>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold'>{name}</h1>
                            <p className='text-blue-400'><FormatPrice price={price} /></p>
                        </div>
                    </div>
                </div>
            </NavLink>

            <div className='absolute bottom-20 left-10' onClick={() => wislistAdd(id, color, curEle)}>
                <FaRegHeart className='text-xl text-white' />
            </div>
        </div>
    )
}

export default Product
