import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-15 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='w-32 my-5' alt="" />
          <p className='w-full md:w-2/3 text-gray-600 mb-5'>"Forever – Your destination for timeless fashion that stands the test of time. Discover pieces that seamlessly blend style, comfort, and durability. From classic wardrobe staples to the latest trends, our collection offers everything you need to express your unique style. Each piece is crafted with care to ensure it remains a favorite for years to come. Embrace fashion that lasts with Forever – because true style is forever."</p>
        </div>

        <div>
          <p className='text-xl  font-medium mt-7 mb-5' >COMPANY</p>
          <ul className='flex flex-col text-gray-600 gap-1'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl  font-medium mt-8 mb-5' >CONTACT US</p>
          <ul className='flex flex-col text-gray-600 gap-1'>
            <li>+1-201-010-010</li>
            <li>contact@foreverfashion.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          &copy; 2024  Forever . All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default footer
