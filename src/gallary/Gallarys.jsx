import React from 'react'
import Gallary from './Gallary'

export default function Gallarys() {
  const data = ['gallary_1.jpg','gallary_2.jpg','gallary_3.jpg']
  return (
    <div className='px-20'>
    <h1 className=' text-center font-bold text-3xl py-10'>Our <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Gallary</span></h1>
    <div className=' grid place-content-center pb-4 lg:grid-cols-3 lg:gap-3 '>
       {data.map(data =><div className=' py-5 '> <Gallary data={data} /></div>)}
    </div>
    </div>
  )
}
