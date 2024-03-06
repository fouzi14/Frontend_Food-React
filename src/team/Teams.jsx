import React from 'react'
import Team from './Team'

export default function Teams() {
    const data = ['chef1.png','chef2.png','chef3.jpg','chef4.jpg']
    return (
      <div className='px-20'>
      <h1 className=' text-center font-bold text-3xl pb-32 py-10'>Our <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Team</span></h1>
      <div className=' grid place-content-center  pb-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 '>
         {data.map(data =><div className=' py-20 lg:py-5 '> <Team data={data}/></div>)}
      </div>
      </div>
  )
}
