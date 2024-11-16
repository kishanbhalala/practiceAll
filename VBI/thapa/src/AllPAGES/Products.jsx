import React from 'react'
import FilterSection from '../Components/FilterSection'
import Sort from '../Components/Sort'
import ProductList from '../Components/ProductList'


const Products = () => {

  return (
    <div className='container mx-auto'>
      {/* products page  */}
      <div className='grid grid-cols-1 lg:grid-cols-3'>
      
        {/* left-part  */}
        <section>
          <div>
            <FilterSection />
          </div>
        </section>

        {/* right-part  */}
        <section className='col-span-2'>
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Products
