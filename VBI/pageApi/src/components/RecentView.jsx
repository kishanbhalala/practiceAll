import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const RecentView = () => {

    const recent = useSelector((state) => state.RecentViewReducer.views)
    // console.log("recent", recent);

    const uniqueRecentlyViewed = recent.reduce((acc, currentItem) => {
        const existingItem = acc.find((item) => item.productId === currentItem.productId);

        if (!existingItem) {
            acc.push(currentItem);
        }
        return acc;
    }, []);

    return (
        <div className='mt-40 container mx-auto'>

            <div>
                <p className='text-3xl font-bold text-center mb-10'>Recent View</p>
            </div>

            <div className=' grid grid-cols-3' >
                {
                    uniqueRecentlyViewed.slice(0, 3).map((item) => {
                        return (
                            <>
                                <NavLink to={`/product/${item?.slug}`} key={item?._id} >
                                    <div>
                                        <img src={item?.image} alt="" />
                                    </div>
                                    <div className='mt-3'>
                                        <p>Name: {item?.title.en}</p>
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

export default RecentView
