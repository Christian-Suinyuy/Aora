import { useState } from 'react'
import './App.css'
import Header from './assets/header/Header'
import Footer from './assets/footer/footer'
import Home from './home'
import Products from './assets/Products page/products'
import Cart from './assets/cart/Cart'
import Checkout from './assets/checkout/checkout'
import SignUp from './assets/User accounts/signup'
import LogIn from './assets/User accounts/logIn'
import History from './assets/order history/orderHistory'


function App() {
  return (
    <section className='flex w-full flex-col gap-2 justify-center overflow-hidden'>
      <Header />
      <div className='mx-4'>
        {/* <Home /> */}
        {/* <Products /> */}
        {/* <Cart /> */}
        {/* {<Checkout />} */}
        {/* <SignUp /> */}
        {/* <LogIn /> */}
        <History />
      <Footer/>
      </div>
    </section>
  )
}

export default App
