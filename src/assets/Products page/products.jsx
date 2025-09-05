// import SearchBar from "../Seach-bar/Search"
import Card from "../Item card/itemCard"
import {Products as producs} from "../producs"
import SearcIcon from '../images/search-icon.svg'
import { useEffect, useState } from "react"
import { sdk } from "../../lib/config"

function SearchBar(){
    return(
        <div className="flex sticky z-1 top-12 search-container w-full border-0 rounded-2xl bg-blue-900/50 mx-auto h-9 px-1 gap-3 py-2">
            <img src={SearcIcon} alt="icon" />
            <input type="text" placeholder="search" className="w-full focus:outline-0"/>
        </div>
    )
}

function Aside(){
    return (
        <div className="filter h-fit sm:sticky top-10">
                <h1 className="font-bold text-xl">filter</h1>
                <form className=" grid gap-5">
                    <label htmlFor="category" className="flex flex-col gap-2">
                        <p className="font-bold">Category</p>
                        <select id="category" className="w-full border-1 p-2 rounded">
                            <option value="clothing">Select category</option>
                            <option value="clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Pc">Comuters</option>
                        </select>
                    </label>

                    <label htmlFor="price range" className="flex flex-col gap-2">
                        <p className="font-bold">Price Range</p>
                        <div className="flex gap-4">
                        <div className="flex gap-2"> <p>min</p> <input type="number" className=" border-1 rounded p-1 w-15"/></div>
                        <div className="flex gap-2"> <p>min</p> <input type="number" className=" border-1 rounded p-1 w-15"/></div>
                        </div>
                    </label>
                    
                <label htmlFor="category" className="flex flex-col gap-2">
                        <p className="font-bold">Brand</p>
                        <select id="category" className="w-full border-1 p-2 rounded">
                            <option value="clothing">Select category</option>
                            <option value="clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Pc">Comuters</option>
                        </select>
                    </label>
                </form>

        </div>
    )
}

function Grid(){

    let [arivals, setArival] = useState([])
      useEffect(()=>{
        sdk.store.product.list().then(({ products, count, offset, limit }) => {
            // console.log(products[0])
          setArival(products)
        })
      },[]) 

    return(
        <section className="product-main">
            {/* <SearchBar /> */}
            <div className="flex sticky z-1 top-12 search-container w-full border-0 rounded-2xl bg-blue-900/50 mx-auto h-9 px-1 gap-3 py-2">
                <img src={SearcIcon} alt="icon" />
                <input type="text" placeholder="search" className="w-full focus:outline-0"/>
            </div>
            <h1 className="font-bold text-xl">Featured Products</h1>
            <div className="product-list grid gap-5">
                <label htmlFor="sort">
                    <p className="text-2xl">sort by</p>
                    <input type="text" placeholder="...Sort by" className="border-1 p-1" />
                </label>

            <div className="product-grid gap-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {arivals[0]&& arivals.map((item,idx)=> <Card key={idx} Details={item} image={`../${item.image}`} productName={item.name} price={item.priceCents} ratings={item.rating} id={item.id} />)
                }
            </div>
            </div>
        </section>
    )
}
function Products(){

            // /*retrive cart */
        const cartId = localStorage.getItem('cart_id')
        
        cartId ? sdk.store.cart.retrieve(cartId)
            .then(({ cart }) => {
            // use cart...
            //   console.log(cart)
            //   console.log(cart.)
        }) : sdk.store.cart.create({
            region_id: "reg_01K3R2YFBHV9H3JWK99NWWXE0V",
            })
            .then(({ cart }) => {
            localStorage.setItem("cart_id", cart.id)
                // console.log(cart)
        })

    return (
        <section className=" flex flex-col gap-3 px-10">
            <div className="grid sm:grid-cols-[1fr_4fr] gap-10">
            <Aside />
            <Grid />
            <div></div>
            </div>
        </section>
    )
}

export default Products