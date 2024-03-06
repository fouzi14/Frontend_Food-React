import React from 'react'

export default function Gallary(data) {
  return (
    
    <div className=' relative w-[350px] h-[220px] bg-black group'>
        <div>
            <img className='hover:opacity-20 h-full' src={`./image/${data.data}`} alt="" />
        
        <div className=' absolute top-10 text-center group-hover:opacity-100 opacity-0 '>
            <h1 style={{fontFamily:'mv boli'}} className=' text-[#fac031] font-medium text-xl '>Food</h1>
            <p className=' text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum illo consequatur quas ipsum ea?</p>
            <button className=' bg-[#fac031] px-2 py-1 mt-2 text-white'>Order Now</button>
        </div>
        </div>
    </div>
   
    
  )
}
