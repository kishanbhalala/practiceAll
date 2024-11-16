import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../Context/ProductContext';
import PageNavigation from '../Components/PageNavigation';
import Myimages from '../Components/Myimages';
import FormatPrice from '../Helpers/FormatPrice'
import { FaTruckFast } from "react-icons/fa6";
import { TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import Star from '../Components/Star';
import AddToCart from '../Components/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

const SingleProducts = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  // console.log("single product data",singleProduct);

  const { id } = useParams();
  // console.log(id);

  const { id: alias, name, company, price, description, stock, stars, reviews, image } = singleProduct;
  // console.log(singleProduct);

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])

  
  if (isSingleLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <PageNavigation title={name} />
      <div className='container mx-auto px-5'>


        <div className='my-10 md:my-40 md:grid md:grid-cols-2 md:gap-10'>

          <div className='product-img mb-4 lg:flex lg:justify-center lg:items-center'>
            {/* {
              image && <Myimages imgs={image} />
            } */}
            <Myimages imgs={image} />
          </div>

          {/* product data  */}
          <div>
            <h1 className='text-4xl mb-3'>{name}</h1>
            <Star stars={stars} reviews={reviews} />

            <p className='text-black text-xs font-semibold mb-3'>
              MRP:<del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className='text-base font-bold text-blue-500 mb-3'>
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p className='text-gray-500 mb-5'>{description}</p>

            {/* react icon  */}
            <div className='flex flex-col sm:flex-row justify-between mb-5'>
              <div className='mb-5'>
                <div className='flex sm:items-center sm:justify-center'>
                  <FaTruckFast className='text-2xl mb-2' />
                </div>
                <p className='text-gray-700 text-sm'>Free Delivery</p>
              </div>
              <div className='mb-5'>
                <div className='flex sm:items-center sm:justify-center'>
                  <TbReplace className='text-2xl mb-2' />
                </div>
                <p className='text-gray-700 text-sm'>30 Days Replacement</p>
              </div>
              <div className='mb-5'>
                <div className='flex sm:items-center sm:justify-center'>
                  <FaTruckFast className='text-2xl mb-2' />
                </div>
                <p className='text-gray-700 text-sm'>Deliverd</p>
              </div>
              <div className='mb-5'>
                <div className='flex sm:items-center sm:justify-center'>
                  <MdOutlineSecurity className='text-2xl mb-2' />
                </div>
                <p className='text-gray-700 text-sm'>2 year Warranty</p>
              </div>
            </div>

            <div>
              <p className='mb-3'>Available:
                <span className='font-semibold'>{stock > 0 ? "In Stock" : "Not Availble"}</span>
              </p>
              <p className='mb-3'>
                ID: <span className='font-semibold'>{id}</span>
              </p>
              <p className='mb-3'>
                Brand: <span className='font-semibold'>{company}</span>
              </p>
            </div>

            <hr className='border border-black'/>

            <div>
              {stock > 0 && <AddToCart product={singleProduct} />}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProducts
