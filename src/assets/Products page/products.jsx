// import SearchBar from "../Seach-bar/Search"
import Card from "../Item card/itemCard"
import {Products as producs} from "../producs"
import SearcIcon from '../images/search-icon.svg'
import { useContext, useEffect, useState } from "react"
import { sdk } from "../../lib/config"
import { AppContext } from "../../AppContext"
import SearchBar from "../Seach-bar/Search"
import { ProductsError } from "../../error"

function Aside(){
    const [a,b,c,d,e,categories, swapList,products]= useContext(AppContext)
    let [selected,setSelected] = useState('')


    return (
        <div className="filter h-fit sm:sticky top-10">
                <h1 className="font-bold text-xl">filter</h1>
                <form className=" grid gap-5">
                    <label htmlFor="category" className="flex flex-col gap-2">
                        <p className="font-bold">Category</p>
                        <select onChange={(e)=>{
                                setSelected(c=>{
                                     c=e.target.value
                                     swapList(c=== 'all'?products: categories[c].products)
                                     return(c)
                                    })
                                }}
                         id="category" className="w-full border-1 p-2 rounded">
                            <option value= 'all' >Select category (All)</option>
                            {categories.map((category, idx)=>
                            <option key={idx} value={idx}>{category.cat}</option>
                            )}

                        </select>
                    </label>

                    <label htmlFor="price range" className="flex flex-col gap-2">
                        <p className="font-bold">Price Range</p>
                        <div className="flex gap-4">
                        <div className="flex gap-2"> <p>min</p> <input type="number" className=" border-1 rounded p-1 w-15"/></div>
                        <div className="flex gap-2"> <p>min</p> <input type="number" className=" border-1 rounded p-1 w-15"/></div>
                        </div>
                    </label>
                    
                {/* <label htmlFor="category" className="flex flex-col gap-2">
                        <p className="font-bold">Brand</p>
                        <select id="category" className="w-full border-1 p-2 rounded">
                            <option value="clothing">Select category</option>
                            <option value="clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Pc">Comuters</option>
                        </select>
                    </label> */}
                </form>

        </div>
    )
}

function Grid(){

    const [a,b,c,finalList] = useContext(AppContext)
       
    return(
        <section className="product-main">
           <SearchBar />
            <h1 className="font-bold text-xl">Featured Products</h1>
            <div className="product-grid gap-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {finalList[0] ? finalList.map((item,idx)=> <Card key={idx} Details={item} image={`../${item.image}`} productName={item.name}
                 price={item.priceCents} ratings={item.rating} id={item.id} />) : <ProductsError />
                }
            </div>
        </section>
    )
}
function Products(){
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