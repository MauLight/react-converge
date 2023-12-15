import React from 'react'

export const Signup = () => {
  return (
    <div className='flex w-full h-screen'>

      <div className="flex flex-col w-full lg:w-3/4 items-center justify-center">


        <div className="flex flex-col w-full">
          <h1 className='text-5xl text-[#000000]'>Create an Account</h1>
          <p className='text-sm text-[#000000]'>Start with our 30 day free trial.</p>
        </div>

        <form className='flex flex-col gap-y-8 w-full'>
          <div className="flex flex-col gap-y-10">
            <label htmlFor='username' className='text-sm uppercase text-[#87FF4F] font-bold'>Email or username</label>
            <input type='email' placeholder='futurelabs@gmail.com' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
            <input type='text' placeholder='Name' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
            <input type='password' placeholder='Password' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
          </div>

          <div className="flex flex-col gap-y-5">
            <button className='h-12 text-white p-2 bg-[#87FF4F] w-full uppercase'>Sign up</button>
            <button className='h-12 text-[#000000] p-2 bg-white border border-[#87FF4F] w-full uppercase'>Sign up</button>
            <button className='h-12 text-white p-2 bg-[#1F311D] w-full uppercase'>Sign up with apple</button>
          </div>

        </form>

      </div>
      <div className="w-0 lg:w-1/4 bg-[#1F311D]">
      </div>
    </div>
  )
}

{/* <form className='flex flex-col gap-y-8'>
  <div className="flex flex-col gap-y-10">
    <label htmlFor='username' className='text-sm uppercase text-[#87FF4F] font-bold'>Email or username</label>
    <input type='email' placeholder='futurelabs@gmail.com' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
    <input type='text' placeholder='Name' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
    <input type='password' placeholder='Password' className='h-12 text-[#000000] p-2 bg-transparent w-full focus:ring-0 focus:outline-none border-b-2 border-[#000000]' />
  </div>

  <div className="flex flex-col gap-y-5">
    <button className='h-12 text-white p-2 bg-[#87FF4F] w-full uppercase'>Sign up</button>
    <button className='h-12 text-[#000000] p-2 bg-white border border-[#87FF4F] w-full uppercase'>Sign up</button>
    <button className='h-12 text-white p-2 bg-[#1F311D] w-full uppercase'>Sign up with apple</button>
  </div>

</form> */}

{/* <div className="flex flex-col">
<h1 className='text-5xl text-[#000000]'>Create an Account</h1>
<p className='text-sm text-[#000000]'>Start with our 30 day free trial.</p>
</div> */}
