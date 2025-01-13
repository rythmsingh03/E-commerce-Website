import React from 'react'
import { assets } from '../assets/assets'

const OurPolicies = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="" />
        <p className='font-semibold'>10 Days Return Policy</p>
        <p className='text-gray-400'>We offer a hassle-free Return policy for all products.</p>
      </div>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="" />
        <p className='font-semibold'>100% Original Products </p>
        <p className='text-gray-400'>We ensure that all products are 100% original and genuine.</p>
      </div>

      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>24/7 customer support available for all your queries.</p>
      </div>

    </div>
  )
}

export default OurPolicies
