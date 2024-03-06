import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Team(data) {
  console.log(data.data);
  return (
    <div >
        <div className=' transition-all ease-in duration-500 group relative hover:rounded-md  p-1 bg-white shadow-2xl rounded-full w-[200px] '>
            <img className=' transition-all ease-in duration-500 group-hover:translate-y-[-150px] group-hover:rounded-md rounded-full h-[180px] w-[180px] m-auto ' src={`./image/${data.data}`} alt="" />

           <div className=' transition-all ease-in duration-500 group-hover:opacity-100 opacity-0 absolute top-10 text-center'>
            <h1 className=' text-[#fac031] font-bold'>Chef</h1>
            <p>Lorem  consectetur adipisicing elit.</p>
            <div>
                <FacebookIcon className=' text-blue-600'/>
                <InstagramIcon className=' text-orange-600'/>
                <TwitterIcon className=' text-blue-800'/>
                <LinkedInIcon className=' text-blue-400'/>
            </div>
           </div>
        </div>
    </div>
  )
}
