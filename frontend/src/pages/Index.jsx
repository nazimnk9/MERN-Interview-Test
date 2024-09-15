import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { AiOutlineGoogle } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

const index = () => {
    const [type, setType] = useState('')
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })
    return (
        <div className='bg-[#1b1818] min-h-screen w-full'>
            <div className={`w-screen ${show ? 'visible opacity-100' : 'invisible opacity-30'} transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}>
                <div className='w-[350px] bg-[#d9dbdf] m-auto px-6 py-4 rounded-md relative'>
                    <div onClick={() => setShow(false)} className='absolute right-4 top-4 text-xl cursor-pointer text-black'><IoMdClose /></div>
                    <h2 className='text-black pb-4 text-center text-xl font-bold'>Sign In and Sign Up</h2>
                    {
                        type === "signin" && <form>
                            <div className='flex flex-col gap-3 mb-3 text-black'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' placeholder='Enter email' value={state.email} className='px-3 py-2 rounded-md border outline-none border-[#030315] focus:border-green-500 bg-transparent' />
                            </div>
                            <div className='flex flex-col gap-3 mb-3 text-black'>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' placeholder='Enter password' value={state.password} className='px-3 py-2 rounded-md border outline-none border-[#030315] focus:border-green-500 bg-transparent' />
                            </div>
                            <div>
                                <button className='px-3 py-2 rounded-md bg-black text-white w-full outline-none hover:bg-green-500'>Sign In</button>
                            </div>
                            <div className='flex py-4 justify-between items-center px-3'>
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                                <div className='w-[8%] text-center flex pb-1 px-1 text-black'>or</div>
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                            </div>
                            <div className='pb-4'>
                                <button className='px-3 flex justify-center gap-2 py-2 rounded-md bg-purple-500 w-full text-white outline-none hover:bg-purple-800 items-center'>
                                    <span className='pt-[1px]'><AiOutlineGoogle /></span>
                                    <span>Login with Gmail</span>
                                </button>
                            </div>
                            <div>
                                <button className='px-3 flex justify-center gap-2 py-2 rounded-md bg-blue-500 w-full text-white outline-none hover:bg-blue-800 items-center'>
                                    <span className='pt-[1px]'><FaFacebookF /></span>
                                    <span>Login with Facebook</span>
                                </button>
                            </div>
                        </form>
                    }
                    {
                        type === "signup" && <form>
                            <div className='flex flex-col gap-3 mb-3 text-black'>
                                <label htmlFor="name">Name</label>
                                <input type="name" name='name' id='name' placeholder='Enter name' value={state.name} className='px-3 py-2 rounded-md border outline-none border-[#030315] focus:border-green-500 bg-transparent' />
                            </div>
                            <div className='flex flex-col gap-3 mb-3 text-black'>
                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' id='email' placeholder='Enter email' value={state.email} className='px-3 py-2 rounded-md border outline-none border-[#030315] focus:border-green-500 bg-transparent' />
                            </div>
                            <div className='flex flex-col gap-3 mb-3 text-black'>
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' placeholder='Enter password' value={state.password} className='px-3 py-2 rounded-md border outline-none border-[#030315] focus:border-green-500 bg-transparent' />
                            </div>
                            <div>
                                <button className='px-3 py-2 rounded-md bg-black text-white w-full outline-none hover:bg-green-500'>Sign In</button>
                            </div>
                            <div className='flex py-4 justify-between items-center px-3'>
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                                <div className='w-[8%] text-center flex pb-1 px-1 text-black'>or</div>
                                <div className='w-[45%] h-[1px] bg-[#434449]'></div>
                            </div>
                            <div className='pb-4'>
                                <button className='px-3 flex justify-center gap-2 py-2 rounded-md bg-purple-500 w-full text-white outline-none hover:bg-purple-800 items-center'>
                                    <span className='pt-[1px]'><AiOutlineGoogle /></span>
                                    <span>Login with Gmail</span>
                                </button>
                            </div>
                            <div>
                                <button className='px-3 flex justify-center gap-2 py-2 rounded-md bg-blue-500 w-full text-white outline-none hover:bg-blue-800 items-center'>
                                    <span className='pt-[1px]'><FaFacebookF /></span>
                                    <span>Login with Facebook</span>
                                </button>
                            </div>
                        </form>
                    }

                </div>
            </div>
            <div className='bg-[#272525] shadow-md'>
                <div className='w-[93%] m-auto py-3'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[80px] h-[48px]'>
                            <img className='w-full h-full' src="https://cdn.prod.website-files.com/62d58a323cbc396f06a780aa/651593780abfac438bc37149_Logo%20Mark%20%2B%20Name.svg" alt="" />
                        </div>
                        <div className='flex gap-4'>
                            <button onClick={() => {
                                setType("signin")
                                setShow(true)
                            }} className='py-2 w-[80px] text-center bg-slate-50 text-black transition-all hover:bg-green-300 hover:text-white rounded-[5px] font-medium'>Sign In</button>
                            <button onClick={() => {
                                setType("signup")
                                setShow(true)
                            }} className='py-2 w-[80px] text-center bg-slate-50 text-black transition-all hover:bg-green-300 hover:text-white rounded-[5px] font-medium'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full justify-center items-center p-4'>
                <div className='py-[168px] flex justify-center items-center flex-col gap-6'>
                    <h2 className='text-5xl text-white'>what you will design today?</h2>
                    <span className='text-white text-2xl font-medium'>Create and share professional design</span>
                    <button onClick={() => {
                        setType("signup")
                        setShow(true)
                    }} className='py-2 w-[200px] text-center bg-slate-50 text-black transition-all hover:bg-green-300 hover:text-white rounded-[5px] font-medium'>Sign Up for Free</button>
                </div>
            </div>
        </div>
    )
}

export default index