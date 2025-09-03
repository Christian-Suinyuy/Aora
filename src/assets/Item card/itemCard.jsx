import { Link } from 'react-router-dom'
import { cart } from '../cart/cartData'
import BigBlue from '../bigBlue'
import { sdk } from '../../lib/config'
import { useContext, useState } from 'react'
import { AppContext } from '../../AppContext'

function Card({ Details = [], ratings = {stars:4.3,count: 90 }}){
    let cartId = localStorage.getItem('cart_id')
    const [quantity, updateQuantity ]= useContext(AppContext)
    let [price,setPrice] = useState(0)
     let [itemQuantity, setQuantity] = useState(1)

    /*retrieving product and variant prices */
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

    console.log(cartId)

        const addToCart = (variant_id, quantity = 1)=>{
        updateQuantity()
        if(!cartId){
            alert("could not add to cart")
            return
        }
        
        sdk.store.cart.createLineItem(cartId, {
            variant_id,
            quantity,
        })
    }


    // sdk.store.region.retrieve("reg_01K3R2YFBHV9H3JWK99NWWXE0V").then(({ region }) => {
    // // region.countries is an array of country objects, each with iso_2 property
    // console.log(region.countries.map(country => country.iso_2))
    // })

    return(
        <div className='grid gap-5 grid-cols-2 sm:flex sm:flex-col sm:w-55 hover:scale-97 ease-in-out duration-600 '>
            <Link to={'/item'} onClick={()=>localStorage.setItem('variantsPage', JSON.stringify(Details))}>
            <div className="h-40">
            <img src={Details.images[0].url} alt="" className='h-full mx-auto' />
            </div>
            <div className='h-15'>
                <h3 className="font-bold h-12 overflow-auto">{Details.title}</h3>
                <div className="details text-gray-600">
                    <span>{price}-XAF • ★ {ratings.stars} ({ratings.count})</span>
                </div>
            </div>
            </Link>
            <div className='col-start-2'>
                <BigBlue content='Add To Cart' onclick={()=> addToCart(Details.variants[0].id, Number(itemQuantity))}/>
            </div>
        </div>
    )
}

export default Card