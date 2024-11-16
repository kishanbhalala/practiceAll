import React from 'react'
import Product from './Product'


const GridView = ({ products }) => {
    // console.log(products);
    
    return (
        <div>
            <div className='px-5 my-5 content-center grid lg:grid-cols-2 xl:grid-cols-3'>
                {
                    products.map((curEle, id) => {
                        return (
                            <>
                                <Product key={curEle.id} {...curEle} />
                            </>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default GridView
