import { CircleCheckBig } from 'lucide-react';
import React from 'react'

export const PricingFeature = ({feature}) => {
   // console.log(feature);
    
  return (
    <div>
        <h2 className='text-black text-xl flex items-center mt-2'> <CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</h2>
    </div>
  )
}
