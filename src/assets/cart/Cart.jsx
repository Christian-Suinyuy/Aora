import {cart, cart as cartme} from './cartData'
import BigBlue from '../bigBlue'
import { useState, useEffect, useContext } from 'react'
import { sdk } from '../../lib/config'
import trash from '../images/trash.jpeg'
import { AppContext } from '../../AppContext'


function CartItem({details = product}){

    const [quantity, updateQuantity ]= useContext(AppContext)

    const cartId = localStorage.getItem('cart_id')
    let [itemQuantity, setQuantity] = useState(details ? details.quantity : 0)
    

    const updateCartQuantity= (lineItemId, e)=>{
        setQuantity(q=> {q= e.target.value
            sdk.store.cart.updateLineItem(cartId,lineItemId, {quantity: Number(q)}).then(({cart})=>{
                updateQuantity()
            } )
            return q
        })
    }
    
    const delFromCart = (var_id)=>{
        if (!cartId) return
        sdk.store.cart.deleteLineItem(cartId,var_id)
            .then(({parent: cart})=>{
                updateQuantity()
                console.log(cart)
            })
    }

    return(
        <div className="product-details grid grid-cols-[1fr_.2fr_.1fr] items-center-safe">
            <div className="product flex gap-2">
                <img src={details.thumbnail} alt="" className='h-25 w-25'/>
                <div className='flex flex-col justify-between'>
                    <h2 className=' text-xl text-black'>{details.title}</h2>
                    <h2 className='text-black'>variant: {details.variant_title}</h2>
                    <p className='text-sm'>{details.unit_price}-XAF</p>
                    <p>{details.name}</p>
                </div>
                <span>{itemQuantity}</span>
            </div>

            <div className='grid items-center-safe' >
                <div className='w-fit flex gap-2 items-center-safe'>
                    {/* <span onClick={decreament} className='bg-blue-600/50 w-9 rounded-2xl text-center h-6 hover:cursor-pointer'>-</span> */}
                    {/* <span>{quantity}</span> */}
                    <div className='flex w-fit bg-gray-400/45 rounded-2xl  p-1 px-2'>
                        <select value={itemQuantity} onChange={(e)=> updateCartQuantity(details.id ,e)} name="productQuantity" id="selectQuantity" className='w-full hover:scale-95 cursor-pointer'>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    {/* <span onClick={increaseQuantity} className='bg-blue-600/50 w-9 rounded-2xl text-center h-6 hover:cursor-pointer'>+</span> */}
                </div>

                {/* <button className='text-red-500' onClick={()=> cartme.removeFromCart(details.id)}>Remove</button> */}
            </div>

            <img src={trash} alt="del Photo" className='h-6 hover:scale-95 cursor-pointer' onClick={()=>delFromCart(details.id)}/>
        </div>
    )
}

function Summary({details}){
    return (
        <section className="order-summary grid gap-3">
            <div>
                <div className='flex justify-between mb-1'>
                    <p>Subtotal</p>
                    <p>{details ? details.item_subtotal : 0}-XAF</p>
                </div>
                

            <div className='flex justify-between'>
                <p>Estimat Tax</p>
                <p>{details ? details.item_tax_total : 0}-XAF</p>
            </div>

            </div>

                <div className='flex justify-between mb-1'>
                    <p>Total</p>
                    <p>{details ? details.item_total : 0}-XAF</p>
                </div>
            <div className='ml-auto m-0 p-0'>
            <BigBlue content='Proceed to Checkout' rout={details ? '/checkout' : '/cart'} />
            </div>
        </section>
    )
}

function Cart(){
    let [actualCart,setActualCart]= useState()
    const cartId = localStorage.getItem('cart_id')
    const [quantity, setQuantity]= useState(cartme.calculatQuantity())
        useEffect(()=>{
            const unsubscribe = cartme.subscibe(()=>{
                setQuantity(cartme.calculatQuantity())
            })
    
            setQuantity(cartme.calculatQuantity())
             // /*retrive cart */

        sdk.store.cart.retrieve(cartId)
            .then(({ cart }) => {
            // use cart...
            console.log(cart.calculatQuantity)
                setActualCart(cart)
        })
    
            return ()=> unsubscribe()
            

        }, [])
    return (
        <section className="cart-area grid gap-10 mx-2 text-blue-900 mb-10 sm:mx-40">
            <h2 className='font-bold text-2xl'>Sopping Cart</h2>
            {actualCart? actualCart.items.map((product,idx)=> <CartItem key={idx} details={product}/>) : <p className=' text-2xl text-black mx-auto'>You Have no items in your Cart</p>}
            <h2 className='font-bold text-2xl'>Order Summary</h2>
            <Summary details={actualCart || null} />
        </section>
    )
}

export default Cart