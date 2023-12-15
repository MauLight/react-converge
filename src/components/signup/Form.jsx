import React from 'react'

export const Form = () => {
  return (
    <form className='flex flex-col gap-y-8 w-full'>
      <div className="flex flex-col gap-y-10">
        <label htmlFor='username' className='text-sm uppercase text-[#87FF4F] font-bold'>Email or username</label>
        <input type='email' placeholder='futurelabs@gmail.com' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
        <input type='text' placeholder='Name' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
        <input type='password' placeholder='Password' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
      </div>

      <div className="flex flex-col gap-y-5">
        <button className='h-[6.5vh] font-bold text-white p-2 bg-[#87FF4F] w-full uppercase'>Sign up</button>
        <button className='flex gap-x-5 justify-center items-center h-[6.5vh] font-bold text-[#000000] p-2 bg-white border border-[#87FF4F] w-full uppercase'>
          <i className="fa-brands fa-google"></i>
                    Sign up with google
        </button>
        <button className='flex gap-x-5 justify-center items-center h-[6.5vh] text-white p-2 bg-[#1F311D] w-full uppercase'>
          <i className="fa-brands fa-apple"></i>
                    Sign up with apple
        </button>
      </div>

    </form>
  )
}
