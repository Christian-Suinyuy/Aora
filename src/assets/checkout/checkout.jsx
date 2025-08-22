import BigBlue from "../bigBlue"
import sample1 from "../images/water buttle.svg"
import sample2 from "../images/sheets.svg"
function Form(){
    return(
        <form action="#" className=" grid gap-2.5 h-auto w-100">
            <h2 className="shipping-info font-bold text-black">Delivery information</h2>
            <label htmlFor="name" className="grid gap-1.5">
                <p>Full Name</p>
                <input type="text" placeholder="...eg Sonia carter" className=" grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>

            <label htmlFor="name" className="grid gap-1.5">
                <p>Address</p>
                <input type="text" placeholder="...eg Ghana street" className=" grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>

            <div className="flex gap-5 justify-between">
            <label htmlFor="name" className="grid ">
                <p>City</p>
                <input type="text" placeholder="...eg Ghana street" className=" grid gap-10 border-1 border-blue-400 p-2 rounded w-45" />
            </label>
            <label htmlFor="name" className="grid gap-1.5">
                <p>Region</p>
                <input type="text" placeholder="...eg Ghana street" className=" grid gap-10 border-1 border-blue-400 p-2 rounded w-45" />
            </label>
            </div>

            <label htmlFor="name" className="grid gap-1.5">
                <p>Email</p>
                <input type="text" placeholder="...eg Example@gmail.com" className=" grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>

            <h2 className="shipping-info font-bold text-black">Payment Method</h2>

            <label htmlFor="payment method" className="grid gap-3">
                <div className="flex gap-3 border border-blue-500 p-2 rounded ">
                    <input type="radio" name="paymentMethod" /> 
                    <p>MTN Mobile Money</p>
                </div>

                <div className="flex gap-3 border border-blue-500 p-2 rounded ">
                    <input type="radio" name="paymentMethod" /> 
                    <p>MTN Mobile Money</p>
                </div>
            </label>

            <label htmlFor="name" className="grid gap-1.5">
                <p>Payer number</p>
                <input type="text" placeholder="...eg 68196447" className=" grid gap-10 border-1 border-blue-400 p-2 rounded w-full" />
            </label>
        </form>
    )
}

function Summary(){
    return(
        <section className="grid gap-2">
            <h2 className="shipping-info grid font-bold text-black">Delivery information</h2>
            <div className="sumary flex gap-4 text-blue-900 items-center-safe">
                <img src={sample1} alt="" className="w-15 rounded"/>
                <div className="details">
                    <p className="text-black">Water buttle</p>
                    <p className="text-sm">Quantity: 5</p>
                </div>
            </div>

            <div className="sumary flex gap-4 text-blue-900 items-center-safe">
                <img src={sample2} alt="" className="w-15"/>
                <div className="details">
                    <p className="text-black">Quality blanckets</p>
                    <p className="text-sm">Quantity: 2</p>
                </div>
            </div>

            <div className="pricings grid gap-3">
                <hr className="text-blue-800" />
                <div className=" flex justify-between mb-5">
                    <div className="grid">
                        <p>Subtotal</p>
                        <p className="text-black">Price-XAF</p>
                    </div>
                    <div className="grid">
                        <p>Shopping</p>
                        <p className="text-black">Price-XAF</p>
                    </div>
                </div>
                
                <hr className="text-blue-800" />
                <div className=" flex justify-between mb-5">
                    <div className="grid">
                        <p>Tax</p>
                        <p className="text-black">Price-XAF</p>
                    </div>
                    <div className="grid">
                        <p>Total</p>
                        <p className="text-black">Price-XAF</p>
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
            <Summary />
            <BigBlue content="Place Order"/>
        </section>
    )
}

export default Checkout