import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { useFiterContext } from '../Context/Filter_Context';

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFiterContext();

  return (
    <div>
      <div className='flex items-center justify-between my-10 px-5'>

        <div className='flex'>
          <div className='mr-3'>
            <button className={grid_view ? "bg-black text-white p-3" : "p-3 bg-gray-200"} onClick={setGridView}><BsFillGridFill /></button>
          </div>
          <div className=''>
            <button className={!grid_view ? " bg-black text-white p-3" : "p-3 bg-gray-200"} onClick={setListView}><FaThList /></button>
          </div>
        </div>

        <div className='hidden sm:block'>
          <p> <span className='font-bold mr-2'>{`${filter_products.length}`}</span> Products Availble</p>
        </div>

        <div>
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className='py-1 px-2 border border-gray-700 rounded-sm outline-none' onClick={sorting}>
              <option value="Lowest">Price(Lowest)</option>
              <option value="Highest">Price(Highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>

      <div className='px-5 sm:hidden'>
        <p><span className='font-bold mr-2'>{`${filter_products.length}`}</span>  Products Availble</p>
      </div>

    </div>
  )
}

export default Sort
