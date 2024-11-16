import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaArrowCircleRight, FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addtocart } from '../../reduxFolder/cartSlice'

const SingleProduct = ({ filteredItems }) => {

    const { id } = useParams();

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                const product = data.filter((p) => p.id == id)
                // console.log(data);
                setProducts(product[0])

            } catch (error) {
                console.log("errors...", error);
            }
        }
        fetchData();
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [id]);

    
    const { title, category, price, image, status } = products;
    console.log(products);

    const dispatch = useDispatch()

    return (
        <div className='container mx-auto px-5'>
            <div className='my-12'>
                <div className='sm:mt-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2  gap-6 h-max'>
                        <div>
                            <img src={image} className='w-full sm:h-full lg:h-[500px] lg:w-[500px] xl:ml-14 2xl:ml-32  bg-cover' alt="" />
                        </div>

                        {/* product details  */}
                        <div className='2xl:mr-32'>
                            <h1 className='font-semibold text-3xl capitalize mb-5'>{title}</h1>
                            <p className='mt-3 text-gray-600 text-base leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores provident amet, magni velit esse quae. Accusantium nisi quas corrupti veniam facere aperiam vel labore eos animi libero, eveniet laboriosam officiis odio illo ipsum suscipit vero quisquam nesciunt. Perferendis debitis doloribus perspiciatis amet, ea nemo delectus quibusdam unde dolore eos!</p>

                            <span className='my-2 text-xl text-yellow-400 flex items-center gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>

                            <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>

                            <div className='mt-4'>
                                <div className='text-left flex flex-col gap-2 w-full'>
                                    <label className='font-semibold' htmlFor="">Quantity</label>
                                    <input type="number" name='price' id='price' defaultValue={1} required className='border border-gray-300 font-bold text-sm mb-2 outline-none rounded-md w-full py-3 px-3 md:py-3 md:px-4 focus:border-red-500' />
                                </div>
                                <div className='w-full text-left'>
                                    <Link to="/cart"> 
                                        <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold  border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white  hover:text-red-500' onClick={() => dispatch(addtocart({item: products}))}><span>Add To Cart</span><FaArrowCircleRight /></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-black/75 mt-12'>
                    <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati!  sit amet consectetur adipisicing elit. Non quasi officiis saepe exercitationem ratione nisi quas molestias repudiandae veritatis deleniti!</p>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati!  adipisicing elit. Non quasi officiis saepe exercitationem ratione nisi quas molestias repudiandae veritatis deleniti!</p>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati!  amet consectetur adipisicing elit. Non quasi officiis saepe exercitationem ratione nisi quas molestias repudiandae veritatis deleniti!</p>
                    <p>Lorem ipsum  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati! dolor sit amet consectetur adipisicing elit. Non quasi officiis saepe exercitationem ratione nisi quas molestias repudiandae veritatis deleniti!</p>
                    <p>Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati! consectetur adipisicing elit. Non quasi officiis saepe exercitationem ratione nisi quas molestias repudiandae veritatis deleniti!</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
