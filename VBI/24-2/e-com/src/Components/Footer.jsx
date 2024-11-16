import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-20 relative'>
            <div className='md:absolute w-full -top-20'>
                <section className='footer-BAR bg-white shadow-black shadow-lg p-5 rounded-md sm:max-w-[80vw] m-auto sm:px-10 sm:p-10 md:w-full mb-5  '>
                    <div className='flex justify-between items-center'>
                        <div className='text-base font-semibold'>
                            <h1>Ready to get Started?</h1>
                            <h1>Talk to us today</h1>
                        </div>
                        <div>
                            <button className='bg-[#6555F5] hover:bg-[#473ca7]  px-4 py-2 text-white w-fit'>
                                <NavLink to="/Contact">
                                    GET STARTED
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </section>
            </div>


            {/* main footer  */}
            <footer className='bg-[#07112A] text-white pt-5 px-5 md:pt-28'>
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-14 md:px-20 lg:px-40'>
                    <div className='footer-about mb-8'>
                        <h1 className='text-lg font-bold mb-3 md:mb-'>e-commerce Websites</h1>
                        <p className='hover:text-blue-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aliquid Lorem, ipsum dolor.</p>
                    </div>

                    <div className='footer-subscribe mb-8'>
                        <h1 className='text-lg font-bold mb-3 md:mb-'>Subscribe to get important updates</h1>
                        <form action="#" className='flex flex-col '>
                            <input type="email" placeholder='YOUR E-MAIL' className='py-2 px-2 mb-3 w-fit text-black' />
                            <input type="submit" value='Subscribe' className='bg-[#6555F5] hover:bg-[#473ca7] px-4 py-2 text-white w-fit ' />
                        </form>
                    </div>

                    <div className='footer-social mb-8 md:ml-5'>
                        <h1 className='text-lg font-bold mb-3 md:mb-'>Follow us</h1>
                        <div className='social-icon flex space-x-3'>
                            <div className='border border-white rounded-full p-3 hover:bg-white hover:text-[#07112A] duration-500'>
                                <FaDiscord />
                            </div>
                            <div className='border border-white rounded-full p-3 hover:bg-white hover:text-[#07112A] duration-500'>
                                <FaInstagram />
                            </div>
                            <div className='border border-white rounded-full p-3 hover:bg-white hover:text-[#07112A] duration-500'>
                                <FaYoutube />
                            </div>
                        </div>
                    </div>

                    <div className='footer-contact mb-10 '>
                        <h1 className='text-lg font-bold mb-2 md:mb-'>Call Us</h1>
                        <a className='font-semibold hover:text-blue-300' href="tel:123456789">+91 123456789</a>
                    </div>
                </div>

            </footer>

            {/* footer horizontal row  */}
            <hr />

            <div className='footer-bottom pb-[22px] bg-[#07112A] text-white px-5'>
                <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:text-start md:px-20  lg:px-40 lg:text-left pt-5'>
                    <p className='flex items-center'>@{new Date().getFullYear()} copyright. All Rights Reserved</p>
                    <div className='mt-5 sm:mt-0'>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
