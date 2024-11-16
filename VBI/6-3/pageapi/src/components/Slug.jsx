import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCartContext } from '../Context/CartContext';
import { useWishContext } from '../Context/WishContext';

const Slug = () => {

    const { addtocart } = useCartContext()
    const { wishAdd } = useWishContext();

    const { slug } = useParams();
    console.log("slug page", slug);

    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        // axios.get(`http://192.168.29.112:5055/api/products/product/${slug}`)
        axios.get(`https://kori-cakes-backend.vercel.app/api/products/product/${slug}`)
            .then(response => {
                setProductDetails(response?.data);
                console.log("slug", response.data);
            })
            .catch(error => {
                console.error('Error fetching slug data:', error);
            });
    }, [slug]);

    if (!productDetails) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            <NavLink to={`/product/${item?.slug}`}>

                <NavLink to="/">
                    <div className='font-bold text-4xl text-center mb-20'>
                        Back To All Category
                    </div>
                </NavLink>

                <div className='text-center mb-10 font-bold'>
                    <h1>Slug</h1>
                </div>

                <div className='grid grid-cols-2 gap-10'>
                    <div className='grid justify-end'>
                        <img src={productDetails?.image} alt="" />
                    </div>

                    <div className='space-y-3'>
                        <p>Total: {productDetails?.prices?.price}</p>
                        <p>Original: {productDetails?.prices?.originalPrice}</p>
                        <p>Discount: {productDetails?.prices?.discount}</p>
                        <p>Slug : {productDetails?.slug}</p>
                        <p>Stock : {productDetails?.stock}</p>
                        <p>Title : {productDetails?.title?.en}</p>
                        <p>Title : {productDetails?.productId}</p>

                        <NavLink to="/cart">
                            <button className='border bg-gray-100 p-2 hover:bg-gray-200 mx-2' onClick={() => addtocart({ productDetails })}>Add to cart</button>
                        </NavLink>

                        <NavLink to="/Wishlist">
                            <button className='border bg-gray-100 p-2 hover:bg-gray-200 mx-2' onClick={() => wishAdd({ productDetails })}>Wish List</button>
                        </NavLink>
                    </div>
                </div>
            </NavLink>

        </div>
    )
}

export default Slug
