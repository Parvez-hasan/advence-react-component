import React from 'react'
import { use } from 'react'
import { PricingCart } from '../pricingCart/PricingCart';
import { DaisyCart } from './daisyCart/DaisyCart';

export const PricingData = ({pricingPromise}) => {
    
    const pricingData = use(pricingPromise);
   // console.log(pricingData);
       
  return (
    <div className='container mx-auto'>
        <h1 className='text-2xl md:text-3xl text-center mt-6 font-semibold'>Get Your Membership</h1>
        
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 p-4'>
                {
                  pricingData.map(pricing => <PricingCart key={pricing.id} pricing={pricing} ></PricingCart>)
                } 
                { 
                  pricingData.map(pricing => <DaisyCart pricing={pricing} ></DaisyCart>)
                }
            </div> 

            {

            }
        </div>
    </div>
  )
}
