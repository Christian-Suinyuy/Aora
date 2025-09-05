import { useEffect, useRef, useState } from 'react'
import Section from './assets/homeSection/Section'
import SearchBar from './assets/Seach-bar/Search'
import { sdk } from './lib/config'
import { useFetcher } from 'react-router-dom' 

function Home(){

  let [arivals, setArival] = useState([])
  // let [collections, setCollections] = useState([])
  let [array, setarray] = useState([])
  let [collections, setCollections] = useState([])
  let collectionObj
  

  useEffect(()=>{
    const runMe = async ()=>{
    collectionObj = await sdk.store.collection.list()
    setarray(a=> a= collectionObj)
    
    let objects = collectionObj.collections.map(async(collection)=>
      await sdk.store.product.list({ collection_id: collection.id }).
      then(({products, count})=>{return (products)}).then(result=> result))
      objects.forEach(async (promis)=>{
  
      await promis.then(result=> setCollections(c=> c= [...c ,result]))
    })

    // console.log(collections)
    //  sdk.store.product.list({ collection_id: "pcol_01K4A41QHWYD32FMXCX23MHAXS" }).then(({ products }) => {
      //     // console.log(products)
      //   })
    }
    
    runMe()
  }, [])
  // console.log(collections)
  
  // useEffect(()=>{
  //   sdk.store.product.list().then(({ products, count, offset, limit }) => {
    //     setArival(products)
  //     // console.log(products)
  //   })
  // },[])    
  
  const CollectionsDetails= ()=>{
    let sections = 
    collections.map((collection)=>{
      sdk.store.product.list({ collection_id: collection.id}).then(({ products }) => {
        console.log(products)
        return ('try this out')
      })
    })
    console.log(sections)
    return sections
  }
  
  // RenderCollections()
  return (
    <section className="body2 sm:mx-50">
        <SearchBar />
        {/* {
          ()=> RenderCollections
          } */}

        {
          collections.map((collection, idx)=>{

            console.log(array)
            return <Section key={idx} Title={array.collections[idx].title} produtcs={collection} />

          }
        )
      }
        
        {/* {arivals.map((product,key)=> <p key={key}>{product.title}</p>)} */}
        {/* {
          arivals[0] &&
        <Section Title='New Arivals' produtcs={arivals} />
        }
        <Section Title='Special Products' /> */}
      </section>
    )
}

export default Home