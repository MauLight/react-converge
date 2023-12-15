import React from 'react'

export const Card2 = () => {
  return (
    <div className='shadow absolute w-[173.78px] h-[101.26px] xl:w-[233.78px] xl:h-[141.26px] bg-[#ffffff] rounded-lg z-20 left-[67%] p-3 pr-10'>
      <div className="flex w-full justify-start relative">
        <div className="w-[18px] h-[18px] xl:w-[28px] xl:h-[28px] rounded-full bg-[#87FF4F]"></div>
        <i className="fa-solid fa-bag-shopping  absolute top-[20%] left-[3.5%]"></i>
      </div>
      <p className='text-[8px] xl:text-[12.39px]'>Revenue</p>
      <p className='text-[5px] xl:text-[8.26px]'>Total Arm Band Generated the last 30 days</p>
      <h2 className='font-bold text-[12px] xl:text-xl xlmt-2'>{'$ 3,500,345'}</h2>
      <div className="flex w-full">
        <div className="border-b-4 w-full border-[#000000]"></div>
        <div className="border-b-4 w-full"></div>
      </div>
      <div className="flex justify-between w-full">
        <p className='text-lg font-bold text-[12.39px]'>64%</p>
        <p className='text-lg font-bold text-[#D6D6D6] text-[12.39px]'>$2M</p>
      </div>
    </div>
  )
}
