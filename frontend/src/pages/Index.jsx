import React from 'react'

const index = () => {
  return (
    <div className='bg-[#18191b] min-h-screen w-full'>
        <div className='bg-[#252627] shadow-md'>
            <div className='w-[93%] m-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div className='w-[80px] h-[48px]'>
                        <img className='w-full h-full' src="https://cdn.prod.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc37149_Logo%20Mark%20%2B%20Name.svg" alt="" />
                    </div>
                    <div className='flex gap-4'>
                        <button className='py-2 w-[80px] text-center bg-slate-50 text-black transition-all hover:bg-slate-950 hover:text-white rounded-[5px] font-medium'>Sign In</button>
                        <button className='py-2 w-[80px] text-center bg-slate-50 text-black transition-all hover:bg-slate-950 hover:text-white rounded-[5px] font-medium'>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-full justify-center items-center p-4'>
            <div className='py-[168px] flex justify-center items-center flex-col gap-6'>
                <h2 className='text-5xl text-white'>what you will design today?</h2>
                <span>Create and share professional design</span>
                <button>Sign Up for Free</button>
            </div>
        </div>
    </div>
  )
}

export default index