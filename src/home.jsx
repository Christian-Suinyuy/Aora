import { useContext, useEffect, useRef, useState } from 'react'
import Section from './assets/homeSection/Section'
import SearchBar from './assets/Seach-bar/Search'
import { sdk } from './lib/config'
import { useFetcher } from 'react-router-dom' 
import { AppContext } from './AppContext'
import { ProductsError } from './error'
import Hero from './assets/Hero/hero'

function Home(){
  let [q,sq,collections] = useContext(AppContext)
  
  return (
    <main className='min-h-dvh'>
    <Hero />
      <section id='collections' className="body2 sm:mx-50">
        <h1 className='font-bold text-center text-xl'>View Collections</h1>
          {
          collections[0] ? collections.map((collection, idx)=>{
              return <Section key={idx} Title={collection[0].collection.title} produtcs={collection} /> 
            }
          ) : <ProductsError />
        }
        </section>
    </main>
    )
}

export default Home