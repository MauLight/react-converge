import React from 'react'

export const Navbar = () => {
  return (
    <div className='fixed bg-transparent w-screen h-20 flex justify-start items-center gap-x-2 px-10'>
      <i className="logo fa-solid fa-bars fa-lg -rotate-45"></i>
      <h1 className='text-xl text-[#000000] font-bold'>DroidPad</h1>
    </div>
  )
}
