import {cart} from './cartData'
import BigBlue from '../bigBlue'
import { useState, useEffect } from 'react'


function CartItem({details = product}){
    let [quantity, setQuantity] = useState(details.quantity)

    let increaseQuantity = ()=>{
        setQuantity(q=>{ q+=1
            cart.updateQuantity(details.id, q)
            return q
        })
    }

    let decreament = ()=>{
        setQuantity(q=>{q !=1 ? q-=1 : q
            cart.updateQuantity(details.id, q)
            return q
        })
    }
    
    const [q, setq]= useState(cart.calculatQuantity())
        useEffect(()=>{
            const unsubscribe = cart.subscibe(()=>{
                setq(cart.calculatQuantity())
            })
    
            setq(cart.calculatQuantity())
    
            return ()=> unsubscribe()
        }, [])
    

    return(
        <div className="product-details flex justify-between">
            <div className="product flex gap-2">
                <img src={details.image} alt="" className='h-25 w-25'/>
                <div className='flex flex-col justify-between'>
                    <h2 className=' text-xl text-black'>{details.productName}</h2>
                    <p className='text-sm'>{details.price}-XAF</p>
                    <p>{details.name}</p>
                </div>
            </div>

            <div className='grid items-center-safe' >
                <div className='w-fit flex gap-2 items-center-safe'>
                    <span onClick={decreament} className='bg-blue-600/50 w-9 rounded-2xl text-center h-6 hover:cursor-pointer'>-</span>
                    <span>{quantity}</span>
                    <span onClick={increaseQuantity} className='bg-blue-600/50 w-9 rounded-2xl text-center h-6 hover:cursor-pointer'>+</span>
                </div>

                <button className='text-red-500' onClick={()=> cart.removeFromCart(details.id)}>Remove</button>
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
                    <p>{cart.calculateTotal()}-XAF</p>
                </div>
                

            <div className='flex justify-between'>
                <p>Estimat Tax</p>
                <p>{cart.calculateTax()}-XAF</p>
            </div>

            </div>

                <div className='flex justify-between mb-1'>
                    <p>Total</p>
                    <p>{cart.calculateTotal()+500}-XAF</p>
                </div>
            <div className='ml-auto m-0 p-0'>
            <BigBlue content='Proceed to Checkout' rout={cart.items[0] ? '/checkout' : '/cart'} />
            </div>
        </section>
    )
}

function Cart(){
    const [quantity, setQuantity]= useState(cart.calculatQuantity())
        useEffect(()=>{
            const unsubscribe = cart.subscibe(()=>{
                setQuantity(cart.calculatQuantity())
            })
    
            setQuantity(cart.calculatQuantity())
    
            return ()=> unsubscribe()
        }, [])
    return (
        <section className="cart-area grid gap-10 mx-2 text-blue-900 mb-10 sm:mx-40">
            <h2 className='font-bold text-2xl'>Sopping Cart</h2>
            {cart.items[0]? cart.items.map((product,idx)=> <CartItem key={idx} details={product}/>) : <p className=' text-2xl text-black mx-auto'>You Have no items in your Cart</p>}
            <h2 className='font-bold text-2xl'>Order Summary</h2>
            <Summary />
        </section>
    )
}

export default Cart