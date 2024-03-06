import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function About() {
  return (
    <div className=' w-full p-1 md:p-5 lg:px-20 '>
    <div className=' lg:flex lg:justify-between lg:items-center'>

    <div className=' lg:w-[500px]'>
        <img src="./image/Food-Plate.png" alt="" />
    </div>
    <div className=' text-center lg:text-start'>
        <div className='pb-5 '>
            
            <div className='  flex items-center justify-center lg:justify-normal mb-5 '>
            <h1 style={{fontFamily:'mv boli'}} className=' text-3xl font-bold text-[#fac031]'>About</h1>

            <h1 className=' text-3xl font-bold ml-3'>US</h1>
            </div>
            <h1 className=' text-3xl font-bold'>Whay choose Us ?</h1>
        
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
   
    </div>
</div>

  )
}
