import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const saveImage = () => {

    }
    const downloadImage = () => {

    }
    return (
        <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
            <div className='flex justify-between px-10 items-center text-white h-full'>
                <Link to='/'>
                    <img src="https://cdn.prod.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc37149_Logo%20Mark%20%2B%20Name.svg" alt="" />
                </Link>
                <span className='text-xl'>Whiteboard</span>
                <div className='flex justify-center items-center gap-2 text-white'>
                    <button onClick={saveImage} className='px-3 py-[6px] outline-none bg-[#4f50a8] rounded-md'>Save</button>
                    <button onClick={downloadImage} className='px-3 py-[6px] outline-none bg-[#4f50a8] rounded-md'>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Header