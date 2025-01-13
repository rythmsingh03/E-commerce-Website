import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const fetchlist = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list', { headers: { token } })
      console.log(response.data);

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  const removeProdct= async(id)=>{
    try {
      const response = await axios.post(backendUrl + '/api/product/delete/' , {id}, {headers:{token}})
      if(response.data.success){
        toast.success(response.data.message)
        await fetchlist()
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  useEffect(() => {
    fetchlist()
  }, [])
  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-1 border bg-gray-200 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {list.map((item, index) => (
          <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-3 py-1 px-2 text-sm' key={index}>
            {item.images && item.images.length > 0 ? (
              <img className='w-12' src={item.images[0]} alt={item.name} />
            ) : (
              <div className='w-12 h-12 bg-gray-200 flex items-center justify-center'>
                No Image
              </div>
            )}
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency} {item.price}</p>
            <p onClick={()=>removeProdct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
          </div>
        ))}

      </div>
    </>
  )
}

export default List
