import React from 'react'
import { PricingFeature } from './PricingFeature'

export const PricingCart = ({pricing}) => {
   // console.log(pricing);

   const {title, price, duration, description, features} = pricing
    
  return (
    <div className='bg-amber-600 text-white p-4 rounded-xl flex flex-col'>
        {/* cart header */}
        <div>
            <h1 className='text-3xl md:text-5xl'>{title}</h1>
              
              <div className='flex justify-between items-center '>
                <h4 className='text-xl md:text-2xl py-2 '>{price}</h4>
                <p className='text-xl md:text-2xl'>{duration}</p>
              </div>
            
        </div>
        {/* cart body */}
        <div className='bg-amber-300 rounded-2xl p-3 flex-1'>
            <p className='text-black text-xl md:text-2xl font-semibold p-2'>{description}</p>
            {
                features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
            }
        </div>

        <button className="btn btn-neutral w-full mt-2">Subscribe</button>

    </div>
  )
}
