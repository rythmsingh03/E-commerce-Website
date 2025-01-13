import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='flex flex-col justify-center my-10 gap-10 mb-24 md:flex-row'>
        <img className='w-full md:max-w-[500px] border border-black' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center gap-10 items-start'>
          <p className='font-semibold text-xl text-gray-900'>Our Store</p>
          <p className='text-gray-700'> Forever Fashion<br />
            Ground Floor, Star Mall,<br />
            Linking Road, Bandra West,<br />
            Mumbai, Maharashtra, 400050</p>
          <p className='text-gray-700'>Telephone: +91-22-40012345 <br />Email: store@foreverfashion.com</p>
          <p className='font-semibold text-xl text-gray-900'>Careers at Forever</p>
          <p className=' text-gray-700'>Learn more about our team and job openings.</p>
          <button className='bg-white border border-black px-8 py-5 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
