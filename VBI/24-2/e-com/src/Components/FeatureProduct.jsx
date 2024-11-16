import React from 'react'
import { useProductContext } from '../Context/ProductContext'
import Product from './Product';

const FeatureProduct = () => {

    const { isLoading, featureProducts } = useProductContext();
    // console.log(featureProducts);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='bg-gray-100 py-20'>
            <div className='container mx-auto px-5'>
                <h1 className='text-xl'>Check Now!</h1>
                <h1 className='text-3xl font-semibold mb-5'>Our Feature Services</h1>

                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-11'>
                    { 
                        featureProducts.map((curEle) => {
                            return (
                                <>
                                    <Product key={curEle.id} {...curEle} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureProduct
