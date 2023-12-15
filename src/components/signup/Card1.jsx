import React from 'react'

export const Card1 = () => {
  return (
    <div className='shadow absolute w-[476.28px] h-[258.05px] bg-[#ffffff] rounded-lg -rotate-90 z-10 left-[67%] p-5'>
      <p className='text-lg'>card Holder</p>
      <h2 className='font-bold text-lg'>Jharzee Gram</h2>
      <h2 className='font-bold text-xl mt-12'>{'1234 5678 9000 3456'}</h2>
      <div className="flex w-full justify-end">
        <div className="w-[50px] h-[50px] rounded-full border border-[#1F311D] mr-12"></div>
        <div className="absolute w-[50px] right-[8%] h-[50px] rounded-full bg-[#1F311D]"></div>
      </div>
      <div className="flex w-full justify-between">
        <p className='text-lg'>12/24</p>
        <p className='text-lg font-bold'>VISA</p>
      </div>
    </div>
  )
}
