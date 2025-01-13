import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex items-center mb-3 gap-2'> 
      <p className='text-gray-600'>{text1} <span className='text-gray-800 font-semibold'>{text2}</span></p>
      <p className='w-8 sm:w-11 h-[2px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title
