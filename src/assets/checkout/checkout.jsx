import BigBlue from "../bigBlue"
import sample1 from "../images/water buttle.svg"
import sample2 from "../images/sheets.svg"
import { cart } from "../cart/cartData"
import { useRef, useState } from "react"

function Form(){
    let [name, setName] = useState("")
    let changingName = (e)=>{
        setName(n => n = e.target.value)
    }

    let [address, setAddress] = useState("")
    let changingAddress = (e)=>{
        setAddress(a => a = e.target.value)
    }

    let [city, setCity] = useState("")
    let changingCity = (e)=>{
        setCity(c => c = e.target.value)
    }

    let [region, setRegion] = useState("")
    let changingRegion = (e)=>{
        setRegion(r => r = e.target.value)
    }

    let [email, setMail] = useState("")
    let changingMail = (e)=>{
        setMail(m => m = e.target.value)
    }

    let [payment, setPayment] = useState("")
    let changingPayment = (e)=>{
        setPayment(p => p = e.target.value)
    }

    let [phone, setPhone] = useState("")
    let changingPhone = (e)=>{
        setPhone(p => p = e.target.value)
    }
    const formElem = useRef(null)

    let info = {
        name,
        email,
        city,
        region,
        email,
        payment,
        phone
    }
     
    let bought = [ cart.items, cart.calculateTotal(), info]
    let sendData = ()=>{
        let stuff = new FormData(formElem.current)
        // formElem.current.requestSubmit()
    }


    return(
        <>
        <form action="#" ref={formElem} className=" grid gap-2.5 h-auto w-100">
            <h2 className="shipping-info font-bold text-black">Delivery information</h2>
            <label htmlFor="name" className="grid gap-1.5">
                <p>Full Name: {name}</p>
                <input type="text" required value={name} onChange={(e)=>changingName(e)} placeholder="...eg Sonia carter" className="focus:outline-0 grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>

            <label htmlFor="name" className="grid gap-1.5">
                <p>Address:{address}</p>
                <input type="text" required onChange={(e)=>changingAddress(e)} placeholder="...eg Ghana street" className="focus:outline-0 grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>

            <div className="flex gap-5 justify-between">
            <label htmlFor="name" className="grid ">
                <p>City: {city}</p>
                <input type="text" onChange={(e)=>changingCity(e)} placeholder="...eg Ghana street" className="focus:outline-0 grid gap-10 border-1 border-blue-400 p-2 rounded w-45" />
            </label>
            <label htmlFor="name" className="grid gap-1.5">
                <p>Region: {region}</p>
                <input type="text" onChange={(e)=>changingRegion(e)} placeholder="...eg Ghana street" className="focus:outline-0 grid gap-10 border-1 border-blue-400 p-2 rounded w-45" />
            </label>
            </div>

            <label htmlFor="name" className="grid gap-1.5">
                <p>Email: {email}</p>
                <input type="text" required onChange={(e)=>changingMail(e)} placeholder="...eg Example@gmail.com" className="focus:outline-0 grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>

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
        <BigBlue onclick={sendData} type="submit" content="Place Order" rout="/checkout"/>
        </>
    )
}

function Summary(){
    return(
        <section className="grid gap-2">
            <h2 className="shipping-info grid font-bold text-black">Delivery information</h2>

            {cart.items.map((product, index)=>{
                return(
                    <div key={index} className="sumary flex gap-4 text-blue-900 items-center-safe">
                        <img src={product.image} alt="" className="w-15 rounded"/>
                        <div className="details">
                            <p className="text-black">{product.productName}</p>
                            <p className="text-sm">Quantity: {product.quantity}</p>
                        </div>
                    </div>
                )
            })}

            <div className="pricings grid gap-3">
                <hr className="text-blue-800" />
                <div className=" flex justify-between mb-5">
                    <div className="grid">
                        <p>Shopping</p>
                        <p className="text-black">{cart.calculateTotal()}-XAF</p>
                    </div>

                    <div className="grid">
                        <p>Tax</p>
                        <p className="text-black">{cart.calculateTax()}-XAF</p>
                    </div>
                </div>
                
                <hr className="text-blue-800" />
                <div className=" flex justify-between mb-5">
                    <div className="grid">
                        <p>Delivery fee</p>
                        <p className="text-black">500-XAF</p>
                    </div>

                    <div className="grid">
                        <p>Total</p>
                        <p className="text-black">{cart.calculateTotal()+500}-XAF</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Checkout(){
    return (
        <section className="grid mb-5 gap-5 h-auto text-blue-900 sm:mx-50">
            <h2 className="font-bold text-2xl text-black">Checkout</h2>
            <Form />
            
        </section>
    )
}

export default Checkout