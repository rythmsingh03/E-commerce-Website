import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-3xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[500px] border border-black' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Forever, where timeless fashion meets uncompromising quality. Our journey began with a simple mission: to create clothing that not only looks great but also stands the test of time. We believe fashion is more than just clothing; it’s a reflection of your individuality and a way to express yourself effortlessly.</p>
        <p>At Forever, we design with you in mind. From wardrobe essentials to bold statement pieces, our collections cater to every occasion and style preference. We pride ourselves on using high-quality materials and sustainable practices, ensuring that each piece is not only stylish but also ethically made.</p>
        <p>Join us on our journey to redefine timeless style. Because at Forever, fashion truly lasts forever.</p>
        <b>Our Mission</b>
        <p>Our team is passionate about curating collections that are versatile, comfortable, and always on-trend. Whether you’re dressing up for a special event or looking for everyday staples, Forever is your one-stop destination for all things fashion.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Quality Assurance:</b>
          <p className='text-gray-700'>At Forever, quality is at the heart of everything we do. We are committed to delivering clothing that not only looks exceptional but also feels great and lasts. Our quality assurance process is meticulously designed to ensure every piece meets our high standards of craftsmanship, durability, and comfort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b  className='text-lg'>Convinience:</b>
          <p className='text-gray-700'>At Forever, we prioritize making your shopping experience seamless and enjoyable. From browsing to checkout, we’ve designed every step to ensure maximum ease and satisfaction.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Exceptional Customer Service:</b>
          <p className='text-gray-700'>At Forever, we believe that great fashion deserves equally great support. Our customers are at the core of everything we do, and we are committed to providing a seamless and satisfying experience at every step of your journey with us className='text-gray-700'</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
