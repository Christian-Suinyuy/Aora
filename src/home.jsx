import { useEffect, useRef, useState } from 'react'
import Section from './assets/homeSection/Section'
import SearchBar from './assets/Seach-bar/Search'
import { sdk } from './lib/config'
import { useFetcher } from 'react-router-dom'

function Home(){

  let [arivals, setArival] = useState([])

  useEffect(()=>{
    sdk.store.product.list().then(({ products, count, offset, limit }) => {
      setArival(products)
    })
  },[])    

    return (
      <section className="body2 sm:mx-50">
        <SearchBar />
        {/* {arivals.map((product,key)=> <p key={key}>{product.title}</p>)} */}
        {
          arivals[0] &&
        <Section Title='New Arivals' produtcs={arivals} />
        }
        <Section Title='Special Products' />
      </section>
    )
}

export default Home