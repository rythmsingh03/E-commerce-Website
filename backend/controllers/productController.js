import {v2 as cloundinary} from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct = async(req, res)=>{
    try {
        const {name, description, price, category, subCategory, sizes, bestseller}= req.body
        const img1=req.files.img1 && req.files.img1[0]
        const img2=req.files.img2 && req.files.img2[0]
        const img3=req.files.img3 && req.files.img3[0]
        const img4=req.files.img4 && req.files.img4[0]

        const images = [img1, img2, img3, img4].filter((item) => item !== undefined)
        
        let imagesUrl= await Promise.all(images.map(async (item)=>{
            let result = await cloundinary.uploader.upload(item.path,{resource_type:'image'})
            return result.secure_url
        }))

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller: bestseller === 'true'? true: false,
            images: imagesUrl,
            Date: Date.now()
        }

        console.log(productData);
        
        const product = new productModel(productData)
        await product.save()
        res.json({success:true, message:'Product Added Successfully'})
        
        
    } catch (error) {
        console.log(error);
        
        res.json({success:false, message:error.message})
    }
}

const listProduct = async(req, res)=>{
    try {
        const products = await productModel.find({})
        res.json({success: true, products})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}

const deleteProduct = async(req, res)=>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:'Product Deleted'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

const singleProduct = async(req, res)=>{
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export{addProduct, listProduct, deleteProduct, singleProduct};