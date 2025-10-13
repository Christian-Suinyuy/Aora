import { useEffect } from 'react'
import { sdk } from '../../lib/config'
import BigBlue from '../bigBlue'
import { useState } from 'react'

function Order({order}){
    const [status, setStatus]= useState()

    useEffect(()=>{
        const ToggleStatus = ()=>{
            switch(order.fulfillment_status){
                case "delivered":
                    setStatus(s=> s = "delivered")
                    return "delivered";
                case "not_fulfilled":
                    setStatus(s=> s = "Awaiting Fulfillment")
                    return "Awaiting fulfillment"
                case "fulfilled":
                    setStatus("Awaiting shipping")
                    break
                case "shipped":
                    setStatus("Shipped")
                    break
            }}

            ToggleStatus()
    })
    return <section className='border-1 p-2 rounded border-purple-400'>
        <div className="topbar relative">
            <h1>order Id: {order.id}</h1>
            <h1>order Total:{order.total} </h1>
            <p className={`px-2 w-fit absolute top-2 right-3 ${order.fulfillment_status !="delivered" ?"bg-purple-400": "bg-blue-200"}`}>
                {
                    status
                }
            </p>
        </div>
    <hr></hr>
        <div className='flex flex-wrap gap-20'>
            {order.items.map(item=> <Product key={item.id} product={item}/>)}
        </div>

    </section>
}

function Product({product}){
    return(
        <div className='flex gap-3'>
            <img src={product.thumbnail} alt="" className='h-30 text-center' />
            <div>
                <p>{product.title}</p>
                <p>quantity: {product.quantity}</p>
                <p>unitPrice: {product.unit_price}</p>
                <p>total: {product.total}</p>
                <p>variant: {product.variant_title}</p>
            </div>
        </div>
    )
}

function History(){
    const [history, setHistory] = useState(null)
    useEffect(()=>{
        sdk.store.order.list().then(({ orders }) => {
      // Display the customer's orders
          console.log(orders)
          setHistory(h=> h= orders)
        })
    },[])

    return(
        <section className='grid gap-5 mx-2'>
            {history?.map(order=> <Order key={order.id} order={order} />)}
        </section>
    )
}

export default History