import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Placeorders = () => {

  const [method, setMethod]=useState('cod')

  const{navigate}=useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-5 pt-5 sm:pt-12 min-h-[80vh] border-t'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[500px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-500 rounded py-2 px-3 w-full' type="text" placeholder='First Name'/>
          <input className='border border-gray-500 rounded py-2 px-3 w-full' type="text" placeholder=' Last Name'/>
        </div>
        <input className='border border-gray-500 rounded py-2 px-3 w-full' type="email" placeholder=' Email Address'/>
        <input className='border border-gray-500 rounded py-2 px-3 w-full' type="text" placeholder='Location'/>
        <div className='flex gap-3'>
          <input className='border border-gray-500 rounded py-2 px-3 w-full' type="text" placeholder='Country'/>
          <input className='border border-gray-500 rounded py-2 px-3 w-full' type="text" placeholder=' State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-500 rounded py-2 px-3 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-500 rounded py-2 px-3 w-full' type="number" placeholder=' Pincode'/>
        </div>
        <input className='border border-gray-500 rounded py-2 px-3 w-full' type="number" placeholder=' Phone Number'/>
      </div> 

      <div className='mt-7'>
        <div className='my-5 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border border-black p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe' ? 'bg-green-500 ':''}`}></p>
              <img className='h-5 mx-3' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border  border-black p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay' ? 'bg-green-500 ':''}`}></p>
              <img className='h-5 mx-3' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border  border-black p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod' ? 'bg-green-500 ':''}`}></p>
              <p className='text-gray-800 font-medium  text-lg mx-5'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-5'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-lg rounded-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorders
