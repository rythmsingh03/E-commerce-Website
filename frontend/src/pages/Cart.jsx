import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cart, CartQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const temp = []
    for (const items in cart) {
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          temp.push({ _id: items, quantity: cart[items][item], size: item })
        }
      }
    }
    setCartData(temp);

  }, [cart])

  return (
    <div className='border-t pt-14 '>

      <div className='text-3xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)
            return (
              <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt={productData.name} className='w-16 sm:w-20' />
                  <div className='text-sm sm:text-xl'>
                    <p>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 border sm:py-1 bg-slate-200'>Size: {item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value===''||e.target.value==='0'? null:CartQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 font-semibold' />
                <img onClick={()=>(CartQuantity(item._id, item.size,0))} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/placeorders')} className='bg-black text-white font-semibold px-5 py-3 my-5 rounded-sm'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
