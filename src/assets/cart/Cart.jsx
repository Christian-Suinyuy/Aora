import {cart} from './cartData'
import BigBlue from '../bigBlue'
import { useState } from 'react'
import sample1 from '../images/testimg.svg'
import sample2 from '../images/sheets.svg'
import sample3 from '../images/water buttle.svg'


console.log(cart.items)
function CartItem({productImage =sample1 ,productName = 'product Name', price = '5000', others = "One type"}){
    let [quantity, setQuantity] = useState(0)
    let increaseQuantity = ()=>{
        setQuantity(q=> q+=1)
    }

    let decreament = ()=>{
        setQuantity(q=>q !=0 ? q-=1 : q)
    }
    return(
        <div className="product-details flex justify-between">
            <div className="product flex gap-2">
                <img src={productImage} alt="" className='h-25'/>
                <div className='flex flex-col justify-between'>
                    <h2 className=' text-xl text-black'>{productName}</h2>
                    <p className='text-sm'>{price}-XAF</p>
                    <p>{others}</p>
                </div>
            </div>

            <div className='w-fit flex gap-2 items-center-safe'>
                <span onClick={decreament} className='bg-blue-600/50 w-9 rounded-2xl text-center h-6 hover:cursor-pointer'>-</span>
                <span>{quantity}</span>
                <span onClick={increaseQuantity} className='bg-blue-600/50 w-9 rounded-2xl text-center h-6 hover:cursor-pointer'>+</span>
            </div>
        </div>
    )
}

function Summary(){
    return (
        <section className="order-summary grid gap-3">
            <div>
                <div className='flex justify-between mb-1'>
                    <p>Subtotal</p>
                    <p>Price-XAF</p>
                </div>
                <div className='flex justify-between mb-1'>
                    <p>Shipping</p>
                    <p>Price-XAF</p>
                </div>
                <div className='flex justify-between mb-1'>
                    <p>Estimat Tax</p>
                    <p>Price-XAF</p>
                </div>
            </div>

            <div className='flex justify-between'>
                <p>Estimat Tax</p>
                <p>Price-XAF</p>
            </div>
            <div className='ml-auto m-0 p-0'>
            <BigBlue content='Proceed to Checkout' />
            </div>
        </section>
    )
}

function Cart(){
    return (
        <section className="cart-area grid gap-10 mx-2 text-blue-900 mb-10 sm:mx-40">
            <h2 className='font-bold text-2xl'>Sopping Cart</h2>
            <CartItem productImage={sample2} productName='Cotton Throw Blanket'/>
            <CartItem productName='Everyday Backpack'/>
            <CartItem productImage={(cart.items[0]).image} others={(cart.items[0]).others} price={(cart.items[0]).price} productName='Stainless Steel Water Bottle'/>
            <h2 className='font-bold text-2xl'>Order Summary</h2>
            <Summary />
        </section>
    )
}

export default Cart