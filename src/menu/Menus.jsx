import React from 'react'
import Menu from './Menu'

export default function Menus() {
  const data =[{image : 'buger.jpg',name : 'Buger'},{image : 'pasta.jpg',name : 'Pasta'},{image : 'Hot_dog.jpg',name : 'Hot_dog'},{image : 'lasagna.webp',name : 'lasagna'},{image : 'ice_cream.jpg',name : 'ice_cream'},{image : 'Spanchi.jpg',name : 'Spanchi'},{image : 'chocolate_Drink.jpg',name : 'chocolate_Drink'},{image : 'sandwich.jpg',name : 'sandwich'}]
  return (
    <div className= ' w-full m-auto px-20'>
      <h1 className=' text-center font-bold text-3xl '>Our <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Menu</span></h1>
       <div className=' grid place-content-center md:m-auto pb-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2'>
       {
          data.map(
            data=><div className=' pb-5 md:p-0'><Menu data={data} /></div>
          )
        }
       </div>
    </div>
  )
}
