import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './assets/header/Header'
import Footer from './assets/footer/footer'
import Home from './home'
import Products from './assets/Products page/products'
import Cart from './assets/cart/Cart'
import Checkout from './assets/checkout/checkout'
import SignUp from './assets/User accounts/signup'
import LogIn from './assets/User accounts/logIn'
import History from './assets/order history/orderHistory'
import { sdk } from './lib/config'
import Variants from './assets/variantsPage/ViewVariants'

export let user = sessionStorage.getItem('userx')

function App() {
  return (
    <section className='grid h-dvh flex-col gap-2'>
      <Header />
      <div className='mx-4'>
        <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/products' element= {<Products />} />
        <Route path='/cart' element= {<Cart />} />
        <Route path='/checkout' element= {<Checkout />} />
        <Route path='/signup' element= {<SignUp />} />
        <Route path='/login' element= {<LogIn />} />
        <Route path='/history' element= {<History />} />
        <Route path='/item' element = {<Variants/>} />
        </Routes>
      </div>
      <Footer/>
    </section>
  )
}

export default App
