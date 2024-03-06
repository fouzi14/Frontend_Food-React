import React from 'react'
import Review from './Review'

export default function Reviews() {
  const data = ['review_1.png','review_2.png','review_3.png','review_4.png']

  return (
    <div className='px-20'>
    <h1 className=' text-center font-bold text-3xl py-10'>Our <span style={{fontFamily:'mv boli'}} className=' text-[#fac031] ' >Review</span></h1>
    <div className=' grid place-content-center  pb-4 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-4 '>
       {data.map(data =><div className=' py-10 lg:py-5 '> <Review data={data}/></div>)}
    </div>
    </div>
  )
}
