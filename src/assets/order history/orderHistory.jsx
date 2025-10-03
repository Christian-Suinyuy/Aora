import { useEffect } from 'react'
import { sdk } from '../../lib/config'
import BigBlue from '../bigBlue'
import { useState } from 'react'

function Order({order}){
    return <section className='border-1 p-2 rounded border-purple-400'>
        <div className="topbar relative">
            <h1>order Id: {order.id}</h1>
            <h1>order Total:{order.total} </h1>
            <p className={`w-30 absolute top-2 right-3 ${order ?"bg-purple-400": "bg-green-400"}`}>
            {order.status === "pending" ? 'On the way ...' : "Delivered" }</p>
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