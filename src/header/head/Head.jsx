import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function Head() {
  return (
    <div className=' w-full p-1 md:p-5 lg:p-20 '>
        <div className=' flex flex-col-reverse mt-20 lg:flex-row lg:justify-between lg:items-center'>
        <div className=' text-center lg:text-start'>
            <div className='pb-5 '>
                
                <div className='  flex items-center justify-center lg:justify-normal mb-1 '>
                <h1 className=' text-3xl font-bold mr-3'>Get Fresh</h1>
                <span style={{fontFamily:'mv boli'}} className='  text-3xl font-bold text-[#fac031]'>Food</span>
                </div>
                <h1 className=' text-3xl font-bold'>In a Easy Way</h1>
            
            </div>
            <div className=' text-justify lg:w-[500px]'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores fugiat tempora fugit facere ullam cupiditate dolorum laboriosam! Perspiciatis impedit quaerat cumque magnam dolores rem vero tenetur ipsum omnis suscipit!
                    Lorem ipsum dolor, sit amet imus maiores molestias!
                </p>
            </div>
            <div className=' flex justify-center lg:justify-start'>
            <div className='  bg-[#fac031] text-white w-28 text-center my-4 py-2'>
                <button  type="button">Order Now</button>
                <KeyboardArrowRightIcon/>
            </div>
            </div>
        </div>
        <div className=' lg:w-[500px]'>
            <img src="./image/main_img.png" alt="" />
        </div>
        </div>
    </div>
  )
}
