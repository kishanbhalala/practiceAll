import React from 'react'
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Dilshad",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://media.istockphoto.com/id/1155231782/photo/asian-adult-man-working-out-at-the-gym.webp?b=1&s=170667a&w=0&k=20&c=NVQwvbEAKqZpVoyK5ooTDP5nqNSCW-Ke-fgkAApUhhk=",
    },
    {
        id: 2,
        name: "Prabhakar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://media.istockphoto.com/id/1489999246/photo/strong-muscular-young-man-doing-push-up-bars-exercise-at-the-gym.webp?b=1&s=170667a&w=0&k=20&c=KAEeaskCmIRU-m-JYzYuSd1xh5EkS2pgq5xt6p6SZrM=",
    },
    {
        id: 3,
        name: "Sabir",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://media.istockphoto.com/id/1057146526/photo/handsome-man-legs-workout-with-kettlebell-in-the-gym.webp?b=1&s=170667a&w=0&k=20&c=lE2n4EdkQ0CAaEGtrTJ-WwB3Qqb8ZRBLgTXjVXPmxVY=",
    },
    {
        id: 5,
        name: "Sachin",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://media.istockphoto.com/id/1455252047/photo/old-men-in-sportswear-exercising-at-outdoor-gym.webp?b=1&s=170667a&w=0&k=20&c=GPO_ymimL2ZkflpktxDI3TKd8m7Cd6oV2RYATyRB5Ds=",
    },
];

const TestSlick = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className='py-10'>
            <div className='container'>
                <div className='text-center '>
                    <h1 className='text-3xl font-bold'>Testimonial</h1>
                </div>

                <div>
                    <Slider {...settings}>
                        {
                            TestimonialData.map((data) => {
                                return (
                                    <>
                                        <div className='my-6'>
                                            <div key={data.id} className='bg-yellow-200 p-10 mx-5 rounded-xl'>
                                                <div className='mb-4 flex sm:justify-center xl:justify-start'>
                                                    <img src={data.img} alt="" className="rounded-full bg-cover w-20 h-20" />
                                                </div>
                                                <div>
                                                    <div>
                                                        <p className='mb-5 flex sm:text-center xl:text-left'>{data.text}</p>
                                                        <h1 className='mb-5 flex sm:justify-center font-semibold text-xl xl:justify-start'>{data.name}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default TestSlick
