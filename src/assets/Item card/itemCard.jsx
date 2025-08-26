import { Link } from 'react-router-dom'
import sample from '../images/sample.svg'
import { cart } from '../cart/cartData'
import BigBlue from '../bigBlue'
function Card({image = sample, id= '1', productName = "Wireless HeadPhones", price = 500, ratings = {stars:4.3,count: 90 }}){
    let product = {
        productName,
        image,
        price,
        quantity: 1,
        id
    }
    return(
        <div className='grid gap-5 grid-cols-2 sm:flex sm:flex-col sm:w-55 hover:scale-97 ease-in-out duration-600 '>
            <img src={image} alt="" className='h-30 mx-auto sm:h-45' />
            <div className=''>
                <h3 className="font-bold">{productName}</h3>
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