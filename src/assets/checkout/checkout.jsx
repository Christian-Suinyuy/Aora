import BigBlue from "../bigBlue"
import { useEffect, useRef, useState } from "react"
import { sdk } from "../../lib/config"
import { Navigate, useNavigate } from "react-router-dom"

function Form(){
    let navigate = useNavigate()
    let [payment, setPayment] = useState("MTN")

    let changingPayment = (e)=>{
        setPayment(p => p = e.target.value)
    }

    let [phone, setPhone] = useState("")
    let changingPhone = (e)=>{
        setPhone(p => p = e.target.value)
    }
    const formElem = useRef(null)

     
    // Navigate('/products')
    let cartId = localStorage.getItem('cart_id')
    // console.log(cartId)


        // /*adding shipping method */
        sdk.store.cart.addShippingMethod(cartId, {
            option_id: "so_01K3X202RPRWXF3BCZJCERRAZJ", // The ID of the selected shipping option
            data: {
                // Any custom data required by the fulfillment provider
            }
            }).then(({ cart }) => {
        })
        


        /*getiing shipping options */
        // sdk.store.fulfillment.listCartOptions({cart_id:'cart_01K3VHDWQSKD064WJ64XXCQEK5'})
        //     .then(({shipping_options})=>{
        //         console.log(shipping_options)
        //     })


            /*place an order */
        const PlaceOrder = async()=>{
            sdk.store.cart.retrieve(cartId)
                .then(({ cart }) => {
                // use cart...
                
                /*initialise payment */
                sdk.store.payment.initiatePaymentSession(cart,{
                    provider_id: "pp_system_default"
                })
                // console.log(cart)
                sdk.store.cart.complete(cart.id).then((data)=>{
                    if (data.type === 'cart'){
                        console.error(data.error)
                    }
                    else if (data.type ==='order' && data.order){
                        localStorage.removeItem('cart_id')
                        alert('order Placed')
                        navigate('/products')
                    }
                })
                })
                /*place order*/
        } 

    return(
        <>
        <form action="#" ref={formElem} className=" grid gap-2.5 h-auto max-w-100">

            <h2 className="shipping-info font-bold text-black">Payment Method: {payment}</h2>

            <label htmlFor="payment method" className="grid gap-3">
                <div className="flex gap-3 border border-blue-500 p-2 rounded ">
                    <input type="radio" required value='MTN' onChange={(e)=>changingPayment(e)} name="paymentMethod" /> 
                    <p>MTN Mobile Money</p>
                </div>

                <div className="flex gap-3 border border-blue-500 p-2 rounded ">
                    <input type="radio" required value='Orange' onChange={(e)=>changingPayment(e)} name="paymentMethod" /> 
                    <p>MTN Mobile Money</p>
                </div>
            </label>

            <label htmlFor="name" className="grid gap-1.5">
                <p>Payer number: (+237) {phone}</p>
                <input type="number" required onChange={(e)=> changingPhone(e)} placeholder="...eg 68196447" className="focus:outline-0 grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>
            
        </form>
        <Summary />
        <BigBlue onclick={PlaceOrder} type="submit" content="Place Order" rout="/checkout"/>
        </>
    )
}

function Summary(){
    const cartId = localStorage.getItem('cart_id')
    let [useCart, setCart] = useState({})
    useEffect(()=>{
        sdk.store.cart.retrieve(cartId)
                .then(({ cart }) => {
                setCart(u => u = cart)
            })
    }, [])

    return(
        <section className="grid gap-2">
            <h2 className="shipping-info grid font-bold text-black">Delivery information</h2>

            {useCart.items && useCart.items.map((product, index)=>{
                return(
                    <div key={index} className="sumary flex gap-4 text-blue-900 items-center-safe">
                        <img src={product.thumbnail} alt="" className="w-15 rounded"/>
                        <div className="details">
                            <p className="text-black">{product.title}</p>
                            <p className="text-sm">Quantity: {product.quantity}</p>
                            <p className="text-sm">Unit Price: {product.unit_price} - XAF</p>
                        </div>
                    </div>
                )
            })}

            <div className="pricings grid gap-3">
                <hr className="text-blue-800" />
                <div className=" flex justify-between mb-5">
                    <div className="grid">
                        <p>Shipping</p>
                        <p className="text-black">{useCart.original_shipping_subtotal}-XAF</p>
                    </div>

                    <div className="grid">
                        <p>Tax</p>
                        <p className="text-black">{useCart.original_tax_total}-XAF</p>
                    </div>
                </div>
                
                <hr className="text-blue-800" />
                <div className=" flex justify-between mb-5">
                    <div className="grid">
                        <p>Products</p>
                        <p className="text-black">{useCart.original_item_subtotal}-XAF</p>
                    </div>

                    <div className="grid">
                        <p>Total</p>
                        <p className="text-black">{useCart.original_total}-XAF</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Checkout(){
    return (
        <section className="grid  mb-5 gap-5 h-auto text-blue-900 md:mx-50">

            <h2 className="font-bold text-2xl text-black">Checkout</h2>
            <Form />
            
        </section>
    )
}

export default Checkout