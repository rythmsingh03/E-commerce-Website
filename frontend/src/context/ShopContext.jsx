import { createContext, useEffect, useState } from "react";
import {products} from '../assets/assets'
import { toast } from "react-toastify";
import Product from "../pages/Product";
import { useNavigate } from "react-router-dom";

export const ShopContext= createContext();

const ShopContextProvider=(props)=>{

    const currency='₹'
    const delivery_fee=10
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch]=useState('')
    const [showSearch, setShowSearch]=useState(false)
    const [cart, setCart]=useState({})
    const navigate= useNavigate()

    const AddToCart = async(itemId, size)=>{

        if(!size){
            toast.error(' Select Product Size First!')
            return
        }

        let CartData = structuredClone(cart)
        if(CartData[itemId]){
            if(CartData[itemId][size]){
                CartData[itemId][size]+=1
            }
            else{
                CartData[itemId][size]=1
            }
        }
        else{
            CartData[itemId]={}
            CartData[itemId][size]=1
        }
        setCart(CartData)
    }


    const CartCount=()=>{
        let count=0 
        for(const items in cart){
            for(const item in cart[items]){
                try {
                    if(cart[items][item]>0){
                        count+= cart[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return count
    }

    const CartQuantity= async (itemId, size,quantity)=>{
        let cartData=structuredClone(cart)
        cartData[itemId][size]=quantity
        setCart(cartData)
    }

    const CartAmount = () => {
        let amount = 0;
        for (const items in cart) {
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cart[items]) {
                try {
                    if (cart[items][item] > 0) {
                        amount += itemInfo.price * cart[items][item];
                    }
                } catch (error) {
                    console.error("Error in CartAmount:", error);
                }
            }
        }
        return amount; // Return the total amount after all calculations
    };


    const value ={
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cart, AddToCart,
        CartCount, CartQuantity,
        CartAmount, navigate, backendURL
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
    )
    
}

export default ShopContextProvider;