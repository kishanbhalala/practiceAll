import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // axios.get(`http://192.168.29.112:5055/api/products/store?category=${id}`)
        axios.get(`https://kori-cakes-backend.vercel.app/api/products/store?category=${id}`)
            .then(response => {
                setProducts(response?.data?.products);
                // console.log("product", response.data.products);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, [id]);

    return (
        <div>
            <NavLink to="/">
                <div className='font-bold text-4xl text-center mb-20'>
                    Back To All Category
                </div>
            </NavLink>

            <div className='text-center mb-10 font-bold'>
                <h1>Product page</h1>
            </div>

            <div className='grid grid-cols-3 gap-10 container mx-auto'>
                {
                    products?.map((item) => {
                        return (
                            <>
                                <NavLink to={`/product/${item?.slug}`}>
                                    <div className='w-fit'>
                                        <div className='border space-y-3 p-5'>
                                            <div className='flex justify-center'>
                                                <img src={item?.image} alt="" />
                                            </div>
                                            <div className='text-center capitalize'>
                                                <p>Title :  {item?.title?.en}</p>
                                                <h1>total : {item?.prices?.price}</h1>
                                                <h1>original : {item?.prices?.originalPrice}</h1>
                                                <h1>discount : {item?.prices?.discount}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Product
