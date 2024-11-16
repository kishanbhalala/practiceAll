import React from 'react'
import { useProductContext } from '../Context/ProductContext';
import { useCartContext } from '../Context/Cart_Context';
import { useWishContext } from '../Context/Wishlist_Context';


const RecentView = () => {

    const { recentlyViewed } = useProductContext();
    // console.log("recent1111 view", recentlyViewed);

    const { addCart } = useCartContext();
    const { wislistAdd } = useWishContext();

    const uniqueRecentlyViewed = recentlyViewed.reduce((acc, currentItem) => {
        const existingItem = acc.find((item) => item.id === currentItem.id);

        if (!existingItem) {
            acc.push(currentItem);
        }
        return acc;
    }, []);

    // console.log("uniq", uniqueRecentlyViewed);

    return (
        <div className='container mx-auto grid sm:h-[70vh] place-content-center px-5 py-10'>
            <div>
                <h1 className='text-4xl sm:text-6xl text-center mb-10'>Recent View</h1>
                <ul className='grid grid-cols-1 sm:grid-cols-3 sm:gap-20 gap-10'>
                    {uniqueRecentlyViewed.slice(0, 3).map((item, id) => (
                        <li key={item?.id}>
                            <div className='flex flex-col  items-center'>
                                <p>{item?.name}</p>
                                <div>
                                    <img src={item?.image[0]?.url} alt="" className='w-40 h-40' />
                                    <div className='flex justify-between'>
                                        <p onClick={() => addCart(item?.id, item?.colors[0], 1, item)}>A</p>
                                        <p onClick={() => wislistAdd(item?.id, 1, item)}>W</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RecentView


