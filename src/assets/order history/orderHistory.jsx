import { sdk } from '../../lib/config'
import BigBlue from '../bigBlue'
function History(){
    
    sdk.admin.order.list({ limit: 20, offset: 0, fields: "id,created_at,email" })
  .then(({ orders }) => console.log(orders))

    return(
        <section className='grid gap-9 mb-10'>
            <h2 className="font-bold text-2xl mx-auto">Order History</h2>
            <div className="items grid grid-cols-[1fr_.5fr_.5fr] grid-rows-20px gap-8">
                <div className={`images h-40 bg-blue-600 overflow-hidden`}>
                    <img src='#' alt="product image" className=' h-40 w-full object-cover .'/>
                </div>
                <div>
                    <p>Date: 04-08-2025</p>
                    <p>Product Name</p>
                    <p>type</p>
                </div>
                <BigBlue />

            </div>
            <div className="items grid grid-cols-[1fr_.5fr_.5fr] grid-rows-20px gap-8">
                <div className={`images h-40 bg-blue-600 overflow-hidden`}>
                    <img src='#' alt="product image" className=' h-40 w-full object-cover .'/>
                </div>
                <div>
                    <p>Date: 04-08-2025</p>
                    <p>Product Name</p>
                    <p>type</p>
                </div>
                <BigBlue />

            </div>
        </section>
    )
}

export default History