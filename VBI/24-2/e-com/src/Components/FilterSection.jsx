import React from 'react'
import { useFiterContext } from '../Context/Filter_Context'
import { FaCheck } from "react-icons/fa";
import FormatPrice from '../Helpers/FormatPrice';


const FilterSection = () => {
  const { filters: { text, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFiterContext();

  // unique data for each fields
  const getUniqueData = (data, property) => {
    let newVal = data.map((curEle) => {
      return curEle[property];
    })

    if (property === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
    // console.log(newVal);


  }
  // unique data 
  const categoryOnlyData = getUniqueData(all_products, "category")
  const companyOnlyData = getUniqueData(all_products, "company")
  const colorsOnlyData = getUniqueData(all_products, "colors")
  // console.log(colorsOnlyData);

  return (
    <div className='px-5'>
      <div className='mt-10'>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilterValue} placeholder='SEARCH' className='border w-full border-black outline-none mb-3 sm:w-1/2 lg:w-full lg:mt-2' />
        </form>
      </div>

      <div className='lg:mt-12'>
        <h1 className='text-lg font-semibold mb-3'>Category</h1>
        <div className='space-y-2 mb-3'>
          {
            categoryOnlyData.map((curEle, index) => {
              return (
                <>
                  <button key={index} type='button' name='category' value={curEle} onClick={updateFilterValue} className='flex'>
                    {curEle}
                  </button>
                </>
              )
            })
          }
        </div>
      </div>

      <div>
        <h1 className='text-lg font-semibold mb-3'>Company</h1>
        <form action="#">
          <select name="company" id="company" onClick={updateFilterValue} className='bg-gray-200 rounded-md p-1 mb-5'>
            {
              companyOnlyData.map((curEle, index) => {
                return (
                  <>
                    <option key={index} value={curEle} name="company">{curEle}</option>
                  </>
                )
              })
            }
          </select>
        </form>
      </div>

      <div>
        <h1 className='text-lg font-semibold mb-3'>Colors</h1>
        <div className='flex justify-center mb-5 lg:justify-start'>
          {
            colorsOnlyData.map((curCol, index) => {
              if (curCol === "All") {
                return (
                  <>
                    <button key={index} type='button' value={curCol} name="color" className='mr-3' onClick={updateFilterValue}>
                      All
                    </button>
                  </>
                )
              }
              return (
                <>
                  <button key={index} type='button' value={curCol} name="color" style={{ backgroundColor: curCol }}
                    className={color === curCol ? "btnStyle active " : "btnStyle"}
                    onClick={updateFilterValue}>
                    {color === curCol ? <FaCheck className='checkStyle ml-2' /> : null}
                  </button>
                </>
              )
            })  
          }
        </div>
      </div>

      <div>
        <h1 className='text-lg font-semibold mb-3'>Price</h1>
        <p>
          <FormatPrice price={price} />
        </p>
        <input type="range" min={minPrice} max={maxPrice} value={price} name='price' onChange={updateFilterValue} />
      </div>

      <div className='mt-5'>
        <button onClick={clearFilters} className='bg-red-400 px-2 py-3 text-white font-semibold rounded-md'>Clear Filters</button>
      </div>

    </div>
  )
}

export default FilterSection
