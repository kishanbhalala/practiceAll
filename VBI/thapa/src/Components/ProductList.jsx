import React from 'react'
import { useFiterContext } from '../Context/Filter_Context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {

  const { filter_products, grid_view } = useFiterContext();
  // console.log("filter_product", filter_products);

  if (grid_view === true) {
    return <GridView products={filter_products} />
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />
  }
};

export default ProductList
