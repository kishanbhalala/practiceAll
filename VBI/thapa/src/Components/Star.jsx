import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
    // console.log(stars);

    const ratingStar = Array.from({ length: 5 }, (ele, index) => {
        let number = index + 0.5;
        
    
        return (
            <div>
                <span key={index}>
                    {
                        stars >= index + 1 ? (<FaStar />) : stars >= number ? (<FaStarHalfAlt />) : (<AiOutlineStar />)
                    }
                </span>
            </div>
        )
    })

    return (
        <>
            <div className='flex mb-3'>
                <div className='text-[#FCA601] flex items-center'>
                    {ratingStar}
                </div>
                <p className='text-gray-500 text-xs ml-3'>({reviews} Customer  Reviews)</p>
            </div>
        </>
    )
};

export default Star
