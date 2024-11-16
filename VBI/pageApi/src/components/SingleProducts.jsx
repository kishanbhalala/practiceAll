
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleProducts = () => {
    const { id } = useParams();
    const [category, setCategory] = useState({});

    useEffect(() => {
        // axios.get(`http://192.168.29.112:5055/api/category/${id}`)
        axios.get(`https://kori-cakes-backend.vercel.app/api/category/${id}`)
            .then(response => {
                setCategory(response?.data);
                // console.log("sigle category", response);
            })
            .catch(error => {
                console.error('Error fetching sigle category data:', error);
            });
    }, [id]);

    return (
        <div>

            <div className='h-screen grid place-content-center'>
                <NavLink to="/">
                    <div className='font-bold text-4xl text-center mb-20'>
                        Back To All Category
                    </div>
                </NavLink>

                <div className='text-center mb-10 font-bold'>
                    <h1>Single page</h1>
                </div>

                <div className='grid grid-cols-2 gap-10'>
                    <div className='border border-gray-700 p-5'>
                        <img src={category?.icon} alt={category?.name?.en} />
                    </div>
                    <div className='space-y-10'>
                        <h1><span className='font-bold'>Id no : </span> {category?._id}</h1>
                        <h1><span className='font-bold'>Status : </span> {category?.status}</h1>
                        <h1><span className='font-bold'>Name : </span>  {category?.name?.en}</h1>

                        <div>
                            <NavLink to={`/products/${category?._id}`}>
                                <button className='bg-gray-200 font-semibold p-5 hover:bg-gray-400'>View More</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;

