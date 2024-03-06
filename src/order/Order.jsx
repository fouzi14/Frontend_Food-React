import React from 'react'

export default function Order() {
  return (
    <div className=' p-5 md:p-20  place-content-center lg:flex-row flex-col m-auto flex lg:justify-between lg:items-center'>
        <div className='w-[300px] m-auto md:w-[450px]'>
            <img src="./image/order_image.png" alt="" />
        </div>
        <div>
        <div className=' flex flex-col  md:flex-row items-center md:justify-between '>
        <div className=' mr-1 md:mr-10'>
            <div className=' flex flex-col'>
                <span>Name</span>
                <input className=' w-56 border-solid border-2 border-black rounded-md' type="text" placeholder='your name' />
            </div>
            <div className=' flex flex-col'>
                <span>Number</span>
                <input className=' w-56 border-solid border-2 border-black rounded-md' type="text" placeholder='your number'/>
            </div>
            <div className=' flex flex-col'>
                <span>you Order</span>
                <input className=' w-56 border-solid border-2 border-black rounded-md' type="text" placeholder='food name' />
            </div>
            
        </div>
        <div>
            <div className=' flex flex-col'>
                <span>Email</span>
                <input className=' w-56 border-solid border-2 border-black rounded-md' type="text" placeholder='your email' />
            </div>
            <div className=' flex flex-col'>
                <span>How Much</span>
                <input className=' w-56 border-solid border-2 border-black rounded-md' type="text" placeholder=''/>
            </div>
            <div className=' flex flex-col'>
                <span>Address</span>
                <input className=' w-56 border-solid border-2 border-black rounded-md' type="text" placeholder='your adddress' />
            </div>
            
        </div>
        </div>
        <div className=' w-full text-center lg:text-start'>
        <button className=' mt-10 bg-[#fac031] text-white px-2 py-1'>Order Now</button>
        </div>
        </div>
    </div>
  )
}
