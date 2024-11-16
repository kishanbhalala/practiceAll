import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
    return (
        <div>
            <div className='px-5 mt-5'>
                {
                    products.map((curEle) => {

                        const { id, name, image, price, description } = curEle;

                        return (
                            <>
                                <div className=' lg:border grid lg:grid-cols-2 lg:gap-40 lg:px-10 lg:py-10 xl:gap-10 2xl:gap-0 lg:my-10 mb-10 2xl:px-20'>

                                    <div className='lg:w-80 '>
                                        <img src={image} alt={name}  className='lg:h-full hover:scale-105 duration-200'/>
                                    </div>

                                    <div>
                                        <div className='text-2xl mb-3'>
                                            {name}
                                        </div>
                                        <p className='text-lg mb-3'>
                                            <FormatPrice price={price} />
                                        </p>
                                        <p className='text-gray-600 mb-3'>
                                            {description.slice(0, 149)}....
                                        </p>

                                        <NavLink to={`/SingleProducts/${id}`}>
                                            <button className='bg-[#6555F5] hover:bg-[#473ca7] px-3 py-2 text-white'>Read More</button>
                                        </NavLink>
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

export default ListView
