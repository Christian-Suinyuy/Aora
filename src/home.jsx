import { useContext, useEffect, useRef, useState } from 'react'
import Section from './assets/homeSection/Section'
import SearchBar from './assets/Seach-bar/Search'
import { sdk } from './lib/config'
import { useFetcher } from 'react-router-dom' 
import { AppContext } from './AppContext'

function Home(){
  let [q,sq,collections] = useContext(AppContext)
  
  return (
    <section className="body2 sm:mx-50">
        <SearchBar />
        {
          collections.map((collection, idx)=>{
            return <Section key={idx} Title={collection[0].collection.title} produtcs={collection} />
          }
        )
      }
      </section>
    )
}

export default Home