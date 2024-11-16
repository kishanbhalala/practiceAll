// CategoryPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // axios.get('http://192.168.29.112:5055/api/category')
        axios.get('https://kori-cakes-backend.vercel.app/api/category')
            .then(response => {
                setCategories(response?.data);
                // console.log("all category",response);
            })
            .catch(error => {
                console.error('Error fetching all category data:', error);
            });
    }, []);

    return (
        <div className='px-24 py-10'>
            <h1 className='font-bold text-4xl text-center mb-10'>Category Page</h1>

            <div>
                {categories.map(category => (
                    <div key={category?._id}>

                        <ul className='grid grid-cols-5 gap-5'>

                            {category.children.map(item => (
                                <li key={item?._id} className='border border-black'>
                                    <NavLink to={`/category/${item?._id}`}>
                                        <p>{item?.description?.en}</p>
                                        <img src={item?.icon} alt={item?.name?.en} />
                                        <div className='bg-black'>
                                            <h3 className='text-center text-white py-2'>{item?.name?.en}</h3>
                                        </div>
                                    </NavLink>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
