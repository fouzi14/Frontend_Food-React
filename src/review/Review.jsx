import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Review(data) {
  return (
    <div className=' group  w-[260px] h-[350px] shadow-xl p-3 bg-white flex place-content-center '>
       <div className=' text-center'>
            <img className='transition-all ease-in duration-500 group-hover:translate-y-[-70px] m-auto border-solid border-4 border-y-yellow-50 rounded-full w-40 ' src={`./image/${data.data}`} alt="" />
            <h1 className=' transition-all ease-in duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-50px]'>username</h1>
            <div className=' transition-all ease-in duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-30px] text-[#fac031] '>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarHalfIcon/>
            </div>
            <div className='transition-all ease-in duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px]'>
                <FacebookIcon className=' text-blue-600'/>
                <InstagramIcon className=' text-orange-600'/>
                <TwitterIcon className=' text-blue-800'/>
                <LinkedInIcon className=' text-blue-400'/>
            </div>
           
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis tempora est harum, expedita consequatur!</p>
            
        </div>
        </div>
  )
}
