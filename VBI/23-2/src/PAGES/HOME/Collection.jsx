import React from 'react'

const Collection = () => {
    return (
        <div className=''>
            <div className='bg-[url("images/collection-bg.png")] bg-cover bg-center bg-no-repeat '>
                <div className='h-[580px] container mx-auto flex justify-between px-5 md:flex-row items-center'>
                    <div className='md:w-1/2'></div>
                    <div className='md:w-1/2'>
                        <img src="images/zara-logo.png" alt="" />
                        <p className='text-lg text-white capitalize my-8 md:w-2/3 leading-8'>Lustrous yet understated. The new evening
                            wear collection exclusively offered at the
                            reopened Giorgio Armani boutique in Los
                            Angeles.</p>
                            <button className='px-6 py-2 bg-white text-black rounded-sm font-semibold'>see collection</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
