import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <div className='py-10'>

        <h1 className='font-semibold text-2xl capitalize mb-10 sm:text-center'>contact page</h1>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.003825864803!2d72.86365997584527!3d21.23169688077631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3c8840ae65%3A0xe447279a17c1f6c2!2sVIP%20Cir%2C%20Uttran%2C%20Surat%2C%20Gujarat%20394105!5e0!3m2!1sen!2sin!4v1708943663157!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className='container mx-auto px-5 mt-[6rem]'>
          <div className='Contact-form max-w-[50rem] m-auto'>
            <form action="https://formspree.io/f/xjvnrwjk" method='POST' className='flex flex-col gap-6 '>

              <input
                type="text"
                placeholder='Username'
                name='Username'
                value={isAuthenticated ? user.name : ''}
                required
                autoComplete='off'
                className=' border outline-none py-1 px-3'

              />


              <input type="email"
                placeholder='Email'
                name='Email'
                value={isAuthenticated ? user.email : ''}
                required
                autoComplete='off'
                className=' border outline-none py-1 px-3' />

              <textarea name="message"
                placeholder='Enter your message'
                cols="10" rows="10"
                required
                autoComplete='off'
                className='border outline-none py-1 px-3 resize-none'>
              </textarea>

              <input type="submit" name="" id="" className='bg-[#6555F5] hover:bg-[#473ca7] px-4 py-2 text-white w-fit' />

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
