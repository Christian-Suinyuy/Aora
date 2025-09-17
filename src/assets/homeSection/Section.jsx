import { useEffect } from "react"
import Card from "../Item card/itemCard"

function Section({Title= "Products", produtcs = []}){
    // useEffect(()=>{
    //     produtcs[0] && console.log(produtcs[0].images)
    // },[])
    return(
        <section className="flex flex-col gap-3 my-8">
            <h2 className="font-bold text-xl">{Title}</h2>
            <div className="cart-container grid   gap-5 mx-2 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                {produtcs[0] && produtcs.map((product, idx)=>
                    <Card key={idx} Details={product} />
                )}
            </div>
        </section>
    )
}

export default Section