import React from 'react'
import { Link } from 'react-router-dom'

const NewLetters = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto py-16 px-5'>
                <h1 className='font-semibold text-3xl text-center capitalize my-10'>Follow products and discounts on Instagram</h1>

                {/* insta grid  */}
                <div className='flex flex-wrap gap-4 items-center justify-center'>
                    <Link to="/">
                        <img src="/images/instagram/img1.png" alt="" />
                    </Link>
                    <Link to="/">
                        <img src="/images/instagram/img2.png" alt="" />
                    </Link>
                    <Link to="/">
                        <img src="/images/instagram/img3.png" alt="" />
                    </Link>
                    <Link to="/">
                        <img src="/images/instagram/img4.png" alt="" />
                    </Link>
                    <Link to="/">
                        <img src="/images/instagram/img5.png" alt="" />
                    </Link>
                    <Link to="/">
                        <img src="/images/instagram/img6.png" alt="" />
                    </Link>
                </div>

                {/* newsteller  */}
                <div>
                    <h2 className='font-semibold text-3xl text-center capitalize my-10'>Or subscribe to the newsletter</h2>
                    <form action="" className='sm:px-20 md:px-40 lg:px-60 xl:px-96 mx-auto text-center flex'>
                        <input type="email" name='email' id='email' placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black w-full placeholder:text-black/50 mr-4'/>
                        <input type="submit" value={"Submit"} className='bg-black text-white px-6 py-1 rounded-sm'/>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default NewLetters
