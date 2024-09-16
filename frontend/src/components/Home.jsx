import React,{useState} from 'react'

const Home = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='pt-5'>
        <div className='w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>
            <button onClick={()=>setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#3dc8ffad] text-white rounded-[3px] font-medium hover:bg-[#95dbccad] absolute top-3 right-3'>Custom Size</button>
            <div className={`absolute top-16 right-3 gap-3 bg-[#36bdc7] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-50'} transition-all duration-500`}>
                <div className='grid grid-cols-2 pb-4 gap-3'>
                    <div className='flex gap-2 justify-center items-start flex-col'>
                        <label htmlFor='width'>Width</label>
                        <input type="number" name='width' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' id='width' />
                    </div>
                    <div className='flex gap-2 justify-center items-start flex-col'>
                        <label htmlFor='height'>Height</label>
                        <input type="number" name='height' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' id='height' />
                    </div>
                </div>
                <button className='py-2 px-6 overflow-hidden text-center bg-[#e9e8eb] text-black font-bold rounded-[3px] hover:bg-black hover:text-white'>Create New Design</button>
            </div>
        </div>
    </div>
  )
}

export default Home