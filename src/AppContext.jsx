import {createContext, useEffect, useState } from "react";

import { sdk } from "./lib/config";

export const AppContext = createContext();

// //inside a component
// const { customer } = useCustomer()
// if (!customer) {
//   // redirect to login
// }

const ContextProvider = (props)=>{
    /* retrives all regions */
    // let returive= async()=>{
    //     sdk.store.region.list()
    //         .then(({ regions, count, limit, offset }) => {
    //         console.log(regions)
    //     })
    // }
    // returive()
    const cartId = localStorage.getItem('cart_id')
    // makes sure cart exits

    cartId ? sdk.store.cart.retrieve(cartId)
            .then(({ cart }) => {
  
        }) :sdk.store.cart.create({
            region_id: "reg_01K5CS3Y8E61H68KNHWKKDRAPY",
            })
            .then(({ cart }) => {
            localStorage.setItem("cart_id", cart.id)
        })


        
    let [quantity, setQuantity] = useState(0)
    /*stored a filtered or non filtered list inal list to be rendered */
    let [finalList, setFinalList] = useState([])

    //products page
    /*stores all products from backend */
    let [products, setProducts] = useState([])

    //home page
    /* represents a lits of collections and products */
    let [collections, setCollections] = useState([])
    /* used to store all collections available when retrieved */
    let collectionObj
    /*stores categories */
    let [categories, setcategories] = useState([])

    /*fetch products from backend */
        useEffect(()=>{
            /* fetch for products page */
            const fetchProducts = ()=>{
                sdk.store.product.list().then(({ products, count, offset, limit }) => {
                setProducts(products)
                    setFinalList(products)
                })
            }
            fetchProducts()

            /* fetch for home page */
            const fetchCollections = async ()=>{
                collectionObj = await sdk.store.collection.list()
                
                let objects = collectionObj.collections.map(async(collection)=>
                /* gets colections products from collection id */
                await sdk.store.product.list({ collection_id: collection.id }).
                then(({products, count})=>{return (products)}).then(result=> result))
                objects.forEach(async (promis)=>{
                await promis.then(result=> setCollections(c=>[...c ,result]))
            })
        }
        
        fetchCollections()

        const fetchCategories = async()=>{
           let category = await sdk.store.category.list().then(({product_categories})=>product_categories )
           let products = category.map(async(c,idx)=>await sdk.store.product.list({category_id:c.id})
           .then(value=>{
               setcategories(g=> g=[...g,{cat:c.name, products:value.products}] )
            })
        )
    }
    fetchCategories()
},[])



    const updateQuantity = ()=>{
        cartId && sdk.store.cart.retrieve(cartId)
            .then(({ cart }) => {
                let accumulator = 0
                cart.items.forEach(variant=>{
                    accumulator += variant.quantity
                })
                setQuantity(q=> q = accumulator)
        })
    }
    
    function swapList(New){
        setFinalList(f=> f= New)
    }
 
    
        const search =(e)=>{
        let result = products.filter((product,idx)=> {
            if ((product.title.toLowerCase()).includes((e.target.value).toLowerCase) ||product.handle.toLowerCase().includes(e.target.value.toLowerCase())){
                return product
            }
        })
        setFinalList(f => result[0] ? result :products )

      }

    updateQuantity()
    
    return (
        <AppContext.Provider value={[quantity,updateQuantity,collections,finalList,search,categories, swapList,products]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider
