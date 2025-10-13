import { Link } from 'react-router-dom'
import { cart } from '../cart/cartData'
import BigBlue from '../bigBlue'
import { sdk } from '../../lib/config'
import { useContext, useRef, useState } from 'react'
import { AppContext } from '../../AppContext'

function Card({ Details = [], ratings = {stars:4.3,count: 90 }}){
    let cartId = localStorage.getItem('cart_id')
    const {updateQuantity, region }= useContext(AppContext)
    let [price,setPrice] = useState(0)
     let [itemQuantity, setQuantity] = useState(1)

    /*retrieving product and variant prices */
    if(region){
    sdk.store.product.retrieve(Details.id, {
        fields: `*variants.calculated_price`,
        region_id: region.id,
        country_code: 'cm',
        }).then(({ product }) => {
            setPrice(product.variants[0].calculated_price.calculated_amount)
            // Access product.variants[].calculated_price
            // Check calculated_price.price_list_type === "sale" for sale price
            // Use calculated_price.calculated_amount for the price
            // Use calculated_price.original_amount for the original price (if on sale)
    })}



    // sdk.store.region.retrieve("reg_01K3R2YFBHV9H3JWK99NWWXE0V").then(({ region }) => {
    // // region.countries is an array of country objects, each with iso_2 property
    // console.log(region.countries.map(country => country.iso_2))
    // })

    let animate = useRef(null)
        let animation = ()=>{
            
            animate.current.style.display = 'flex'
            animate.current.style.opacity = 1
            setTimeout(()=>{
                animate.current.style.opacity = 0
            }, 2000)
            setTimeout(()=>{
                animate.current.style.display = 'none'
            }, 4000)
        }

    return(
        <div className='grid gap-5 grid-cols-2 sm:flex sm:flex-col sm:w-55 hover:scale-97 ease-in-out duration-600 '>
            <Link className='row-span-2' to={'/item'} onClick={()=>localStorage.setItem('variantsPage', JSON.stringify(Details))}>
            <img src={Details.images[0].url} alt="" className='h-full sm:h-45 mx-auto' />
            </Link>
            <Link className='h-20 sm:h-15 ' to={'/item'} onClick={()=>localStorage.setItem('variantsPage', JSON.stringify(Details))}>
                <h3 className="font-bold max-h-20 overflow-auto">{Details.title}</h3>
                <div className="details text-gray-600">
                    <span>{price}-XAF • ★ {ratings.stars} ({ratings.count})</span>
                </div>
            </Link>
            <div className='col-start-2'>
                <p ref={animate}  className='text-green-500 hidden transition-opacity duration-2000 shadow-2xl  w-fit p-2 relative'>Added {itemQuantity} to cart !</p>
                <BigBlue content='BUY' rout='/item'/>
            </div>
        </div>
    )
}

export default Card