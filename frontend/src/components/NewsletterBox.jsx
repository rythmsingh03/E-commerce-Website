import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-3xl font-medium text-gray-800 '>Subscribe Now and get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-6 border border-black pl-3 bg-white'>
        <input className='bg-white w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-sm px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
