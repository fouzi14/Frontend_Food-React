import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {

    const [open , setOpen] = useState(true)

  return (
    <div className=' w-full fixed opacity-100 z-50'>
    <div className='relative z-50 shadow-xl bg-white flex flex-row md:px-10 md:py-3'>
        <div className=' block  basis-10/12 md:flex md:items-center md:justify-between md:px-10 '>
            <img className=' p-3 md:p-0 w-20' src="./image/logo.png" alt="" />
        <ul className={ ` z-50 bg-white md:bg-transparent h-screen md:h-0 shadow-lg md:shadow-none w-[50%] md:w-auto transition-all ease-in duration-500 ${open ? 'left-[-400px]' : 'left-[0px]'} absolute md:static pt-10 md:pt-3 md:flex md:items-center`}>
            <li className=' mb-4 mx-9 font-extralight text-xl '>Home</li>
            <li className=' mb-4 mx-9 font-extralight text-xl '>About</li>
            <li className=' mb-4 mx-9 font-extralight text-xl '>Menu</li>
            <li className=' mb-4 mx-9 font-extralight text-xl '>Review</li>
            <li className=' mb-4 mx-9 font-extralight text-xl '>Order</li>
        </ul>
        </div>
       
        <div className=' flex px-3 justify-between md:pt-0 pt-3 md:items-center'>
        <ul className=' flex px-3 md:items-center'>
            <li className=' md:px-1'><SearchIcon/></li>
            <li className=' md:px-1'><FavoriteIcon/></li>
            <li className=' md:px-1'><ShoppingCartIcon/></li>
        </ul>
        <div className=' md:hidden'>
            {open ? <MenuIcon onClick={()=>setOpen(false)}/>:<CloseIcon onClick={()=>setOpen(true)}/>}
        </div>
        
        </div>
    </div>
    </div>
  )
}
