import { useState } from 'react'
import './App.css'
import Header from './assets/header/Header'
import Footer from './assets/footer/footer'
import Home from './home'
import Products from './products'


function App() {
  return (
    <section className='flex flex-col gap-2 align-middle'>
      <Header />
      {/* <Home /> */}
      <Products />
      <Footer/>
    </section>
  )
}

export default App
