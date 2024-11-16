import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtocart, removetocart } from '../reduxFolder/cartSlice'

const Cards = ({ filteredItems }) => {

  const dispatch = useDispatch()

  return (
    <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12'>
      {
        filteredItems.slice(0, 8).map((item) => (
          <div key={item.id}>
            <Link to={`/shop/${item.id}`}>
              <img src={item.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300' />
            </Link>

            <div className='flex justify-between'>
              <button className='border px-2 py-1 mt-6 font-semibold bg-gray-200' onClick={() => dispatch(addtocart({ item }))}>Add To Cart</button>
              <button className='border px-2 py-1 mt-6 font-semibold bg-gray-200' onClick={() => dispatch(removetocart({ id: item?.id }))}>removetocart</button>
            </div>

            <div className='mt-4 px-4'>
              <h4>{item.title}</h4>

              <div className='flex justify-between mt-4'>
                <p className='text-black/50'>{item.category}</p>
                <p className='font-semibold'>{item.price}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Cards
