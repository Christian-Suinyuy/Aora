import { useState } from 'react'
import './App.css'
import Header from './assets/header/Header'
import Footer from './assets/footer/footer'
import Home from './home'
import Products from './products'
import Cart from './assets/cart/Cart'
import Checkout from './assets/checkout/checkout'


function App() {
  return (
    <section className='flex w-full flex-col gap-2 justify-center'>
      <Header />
      <div className='mx-4'>
        {/* <Home /> */}
        {/* <Products /> */}
        {/* <Cart /> */}
        {/* {<Checkout />} */}
      <Footer/>
      </div>
    </section>
  )
}

export default App
