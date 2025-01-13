import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {
  
  const{productId}=useParams()
  const{products, currency, AddToCart}=useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage]=useState('')
  const [size, setSize]=useState('')

  const fetchproduct = async () => {
    products.map((item)=>{
      if(item._id==productId){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(()=>{
    fetchproduct()
  }, [productId, products])
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border border-gray-300 rounded-md hover:border-gray-500' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto object-contain' alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <h1 className='text-3xl font-medium mt-3'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-3'>
            <img src={assets.star_icon} alt="" className="w-5" />
            <img src={assets.star_icon} alt="" className="w-5" />
            <img src={assets.star_icon} alt="" className="w-5" />
            <img src={assets.star_icon} alt="" className="w-5" />
            <img src={assets.star_dull_icon} alt="" className="w-5" />
            <p className='pl-3'>(3.8k)</p>
          </div>
          <p className='mt-5 text-3xl font-semibold'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-600 w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index)=>(
                <button onClick={()=>setSize(item)} key={index} className={`bg-white text-gray-500 py-2 px-3 border border-gray-500 hover:border-2 ${item===size?'border-2 border-black text-xl  text-black': ''}`} >{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>AddToCart(productData._id, size)} className='bg-gray-800 text-white px-8 py-3 text-sm active:bg-gray-500 rounded-md'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='flex flex-col gap-1 text-sm text-gray-500'>
            <p>100% Genuine Products</p>
            <p>Cash on Delivery available on this product</p>
            <p>7 Days Return Policy Available</p>
          </div>
        </div>
      </div>
      
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-7 py-3'> Description</b>
          <p className='border px-7 py-3 '>Reviews (244)</p>
        </div>
        <div className='flex flex-col gap-4 border px-5 py-5 text-sm text-gray-500'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit deserunt doloremque doloribus ipsum accusamus, numquam fuga libero cumque id saepe vero cupiditate. Suscipit saepe nostrum laudantium esse obcaecati nobis dicta a accusamus? Ut consequuntur aliquid excepturi id architecto!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, aspernatur porro consequatur reprehenderit nulla neque. Enim dolores neque odio laborum, necessitatibus libero voluptates facere?</p>
        </div>
      </div>

      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
      
    </div>
  ) :<div className='opacity-0'> Loading...</div>
}

export default Product