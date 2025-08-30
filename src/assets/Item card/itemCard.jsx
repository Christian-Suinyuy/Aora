import { Link } from 'react-router-dom'
import sample from '../images/sample.svg'
import { cart } from '../cart/cartData'
import BigBlue from '../bigBlue'
import { sdk } from '../../lib/config'
import { useState } from 'react'
function Card({image = sample, Details = [], id= '1', ratings = {stars:4.3,count: 90 }}){
    
    let [price,setPrice] = useState(0)
    sdk.store.product.retrieve(Details.id, {
        fields: `*variants.calculated_price`,
        region_id: "reg_01K3R2YFBHV9H3JWK99NWWXE0V",
        country_code: 'cm',
        }).then(({ product }) => {
            setPrice(product.variants[0].calculated_price.calculated_amount)
            // Access product.variants[].calculated_price
            // Check calculated_price.price_list_type === "sale" for sale price
            // Use calculated_price.calculated_amount for the price
            // Use calculated_price.original_amount for the original price (if on sale)
    })

    // console.log(Details)

    let product = {
        productName:Details.title,
        image : Details.images[0].url,
        price,
        quantity: 1,
        id
    }

    // console.log(product)

    // sdk.store.region.retrieve("reg_01K3R2YFBHV9H3JWK99NWWXE0V").then(({ region }) => {
    // // region.countries is an array of country objects, each with iso_2 property
    // console.log(region.countries.map(country => country.iso_2))
    // })


    return(
        <div className='grid gap-5 grid-cols-2 sm:flex sm:flex-col sm:w-55 hover:scale-97 ease-in-out duration-600 '>
            <div className="h-40">
            <img src={Details.images[0].url} alt="" className='h-full mx-auto' />
            </div>
            <div className='h-15'>
                <h3 className="font-bold h-12 overflow-auto">{Details.title}</h3>
                <div className="details text-gray-600">
                    <span>{price}-XAF • ★ {ratings.stars} ({ratings.count})</span>
                </div>
            </div>
            <div className='col-start-2'>
                <BigBlue content='Add To Cart' onclick={()=> cart.addToCart(product)}/>
            </div>
        </div>
    )
}

export default Card