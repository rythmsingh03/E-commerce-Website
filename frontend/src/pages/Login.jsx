import React, { useState, useEffect } from 'react';

const Login = () => {
  const[currentState, setCurrentState] = useState('Sign Up')

  const OnSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={OnSubmitHandler} className='flex flex-col items-center mt-14 w-[90%] sm:max-w-96 text-gray-800 gap-3 m-auto'>
      <div className='inline-flex gap-3 mt10 mb-2 items-center'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState==='Login'?'':<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      {currentState==='Login'?'':<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Phone Number' required />}
      <div className='w-full justify-between flex text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:font-medium hover:underline'>Forgot your password?</p>
        {
          currentState==='Login'
          ?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer hover:font-medium hover:underline'>Create an account</p>
          :<p onClick={()=>setCurrentState('Login')} className='cursor-pointer hover:font-medium hover:underline'>Login here</p>
        }
      </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-5 '>{currentState==='Login' ? 'Sign in': 'Sign up'}</button>
    </form>
  )
}

export default Login
