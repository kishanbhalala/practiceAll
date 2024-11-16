import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div >
            <footer className='container mx-auto my-20 px-5'>
                <div className='grid grid-cols-1 gap-20 text-gray-500 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                    {/*about information  */}
                    <div>
                        <Link to="/">
                            <img src="/logo.svg" className='mb-7' alt="" />
                        </Link>
                        <div className='mb-7 leading-8'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua</p>
                        </div>
                        <div>
                            <div className="flex items-center text-black gap-6">
                                <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                                <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                                <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                                <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
                            </div>
                        </div>
                    </div>

                    {/* catlog  */}
                    <div className="text-Black">
                        <h4 className="font-semibold text-black mb-3">CATALOG</h4>
                        <div className="space-y-5">
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Necklaces
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Hoodies
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Jewelry Box
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                T-shirt
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Jacket
                            </Link>
                        </div>
                    </div>

                    {/* about us  */}
                    <div className="text-Black">
                        <h4 className="font-semibold text-black mb-3">ABOUT US</h4>
                        <div className="space-y-5">
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Our Producers
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Sitemap
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                FAQ
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                About Us
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>

                    {/* customer service  */}
                    <div className="text-Black">
                        <h4 className="font-semibold text-black mb-3">CUSTOMER SERVICES</h4>
                        <div className="space-y-5">
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Contact Us
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Track Your Order
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Product Care & Repair
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Book an Appointment
                            </Link>
                            <Link to="/" className="text-sm block hover:text-orange-500">
                                Shipping & Returns
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* footer bottom */}
            <div className="bg-[#1e2832]">
                <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
            </div>
        </div>
    )
}

export default Footer
