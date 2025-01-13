import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductsItems from './ProductsItems';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [LatestCollection, setLatestCollection] = useState([])

    useEffect(() => {
        setLatestCollection(products.slice(0, 10))
    }, [])

    return (
        <div className="my-10">
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Step into style with our newest arrivals! From chic everyday essentials to statement pieces for every occasion, our collection blends comfort, quality, and the latest trends. Explore a range of vibrant colors, timeless classics, and modern designs perfect for refreshing your wardrobe this season. Shop now and redefine your look effortlessly!
                </p>
            </div>
            <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    LatestCollection.map((items, index)=>(
                        <ProductsItems key={index} id={items._id} image={items.image} name={items.name} price={items.price} />
                    ))
                }
            </div>
        </div>

    )
}

export default LatestCollection
