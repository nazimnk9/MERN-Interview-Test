import React from 'react'

import Image from './Image'

const Images = () => {
  return (
    <div>
        <div className='w-full h-[40px] flex justify-center items-center bg-[#4f50a8] rounded-sm text-white mb-3'>
            <label className='text-center cursor-pointer' htmlFor="image">Upload Image</label>
            <input type="file" id='image' className='hidden' />
        </div>
        <div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
            <Image />
        </div>
    </div>
  )
}

export default Images