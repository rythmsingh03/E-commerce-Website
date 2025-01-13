import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [img1, setImg1] = useState(false)
  const [img2, setImg2] = useState(false)
  const [img3, setImg3] = useState(false)
  const [img4, setImg4] = useState(false)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Men')
  const [subcategory, setSubcategory] = useState('Topwear')
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('subCategory', subcategory);
      formData.append('bestseller', bestseller);
      formData.append('sizes', JSON.stringify(sizes));

      img1 && formData.append('img1', img1)
      img2 && formData.append('img2', img2)
      img3 && formData.append('img3', img3)
      img4 && formData.append('img4', img4)

      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}});
      console.log(response.data);
      
      if(response.data.success){
        toast.success(response.data.message)
        setName('')
        setPrice('')
        setDescription('')
        setImg1(false)
        setImg2(false)
        setImg3(false)
        setImg4(false)
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='w-full flex flex-col gap-3 items-start'>
      <div>
        <p className='text-xl my-3'>Upload Image</p>
        <div className='flex gap-3'>
          <label htmlFor="img1">
            <img className='w-24' src={!img1 ? assets.upload_area : URL.createObjectURL(img1)} alt="" />
            <input onChange={(e)=>setImg1(e.target.files[0])} type="file" id='img1' hidden />
          </label>
          <label htmlFor="img2">
            <img className='w-24' src={!img2 ? assets.upload_area : URL.createObjectURL(img2)} alt="" />
            <input onChange={(e)=>setImg2(e.target.files[0])} type="file" id='img2' hidden />
          </label>
          <label htmlFor="img3">
            <img className='w-24' src={!img3 ? assets.upload_area : URL.createObjectURL(img3)} alt="" />
            <input onChange={(e)=>setImg3(e.target.files[0])} type="file" id='img3' hidden />
          </label>
          <label htmlFor="img4">
            <img className='w-24' src={!img4 ? assets.upload_area : URL.createObjectURL(img4)} alt="" />
            <input onChange={(e)=>setImg4(e.target.files[0])} type="file" id='img4' hidden />
          </label>
        </div>
      </div>
      <div className='w-full'>
        <p className='mb-3'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter product name' className='w-full p-2' required />
        <p className='mb-3'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" placeholder='Enter product details' className='w-full p-2' required />
      </div>

      <div className='flex flex-col sm:flex-row w-full gap-3 sm:gap-5'>

        <div >
          <p className='mb-3'>Product category</p>
          <select onChange={(e)=>setCategory(e.target.value)} value={category} className='w-full px-3 py-1'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-3'>Product Subcategory</p>
          <select onChange={(e)=>setSubcategory(e.target.value)} value={subcategory} className='w-full px-3 py-1'>
            <option value="Topwear">Top-wear</option>
            <option value="Bottomwear">Bottom-wear</option>
            <option value="Winter">Winter-wear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} type="Number" placeholder='Enter product price' className='w-[180px] py-1 px-3' required />
        </div>
      </div>

      <div>
        <p className='mb-2'>Products Sizes</p>
        <div className='flex gap-3'>
          <div onClick={()=>setSizes(prev => prev.includes("S") ? prev.filter(item=> item !== "S") : [...prev, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("M") ? prev.filter(item=> item !== "M") : [...prev, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("L") ? prev.filter(item=> item !== "L") : [...prev, "L"])}>
            <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("XL") ? prev.filter(item=> item !== "XL") : [...prev, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={()=>setSizes(prev => prev.includes("XXL") ? prev.filter(item=> item !== "XXL") : [...prev, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller"> Add To Bestseller</label>
      </div>
      <button type="submit" className='bg-black text-white w-24 py-3 mt-4'>ADD</button>
    </form>
  )
}

export default Add
