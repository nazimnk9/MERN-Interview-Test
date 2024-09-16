import React from 'react'
import Header from '../components/Header'
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs'
import { FaCloudUploadAlt, FaShapes } from 'react-icons/fa'
import { TfiText } from 'react-icons/tfi'
import { RxTransparencyGrid } from 'react-icons/rx'

const MainPage = () => {
  return (
    <div className='min-w-screen h-screen bg-black'>
      <Header />
      <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='w-[120px] bg-[#181918] z-50 h-full text-white overflow-y-auto'>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><BsGrid1X2 /></span>
            <span className='text-sm font-medium'>Design</span>
          </div>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><FaShapes /></span>
            <span className='text-sm font-medium'>Shapes</span>
          </div>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><FaCloudUploadAlt /></span>
            <span className='text-sm font-medium'>Upload</span>
          </div>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><TfiText /></span>
            <span className='text-sm font-medium'>Text</span>
          </div>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><BsFolder /></span>
            <span className='text-sm font-medium'>Projects</span>
          </div>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><BsFillImageFill /></span>
            <span className='text-sm font-medium'>Images</span>
          </div>
          <div className={`w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-indigo-600`}>
            <span className='text-2xl'><RxTransparencyGrid /></span>
            <span className='text-sm font-medium'>Background</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage