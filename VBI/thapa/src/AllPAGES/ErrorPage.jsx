import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <div className='container mx-auto my-10 px-5'>
        <div className='text-center mb-7'>
          <h2 className='text-7xl font-semibold mb-7'>404</h2>
          <h1 className='text-2xl mb-7'>UH OH! YOU`RE LOST</h1>
          <p className='mb-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, culpa hic cum nostrum doloremque dolor aliquid soluta aspernatur tempore adipisci.</p>

          <NavLink to='/'>
            <button className='bg-[#6555F5] hover:bg-[#473ca7] px-3 py-2 text-white mb-9 '>GO TO BACK HOME</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
