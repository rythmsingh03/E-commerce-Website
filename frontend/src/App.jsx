import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Product from './pages/Product'
import Placeorders from './pages/Placeorders'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searbar from './components/Searbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-teal-200'>
      <ToastContainer />
      <Navbar />
      <Searbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/placeorders' element={<Placeorders/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
