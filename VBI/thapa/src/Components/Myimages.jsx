import React, { useState } from 'react'

const Myimages = ({ imgs = [{ url: "" }] }) => {
    // console.log(imgs);

    const [mainImage,setMainImage] = useState(imgs[0])

    return (
        <div className='grid md:grid-cols-2'>
            <div className='grid grid-cols-4 md:grid-cols-1 '>
                {   
                    imgs.map((curEle, index) => {
                        return (
                            <>
                                <div className='flex md:justify-center lg:justify-end mr-2 lg:mr-5'>
                                    <img src={curEle.url} alt={curEle.filename} key={index} onClick={() => setMainImage(curEle)} className='h-20 w-32  bg-cover mb-5  '/>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <div className='grid content-center'>
                <img src={mainImage.url} alt={mainImage.filename} className='h-64  md:h-48 lg:h-60 w-full bg-cover'/>
            </div>
        </div>
    )
}

export default Myimages
