import { sdk } from '../../lib/config'
import BigBlue from '../bigBlue'
import sample from '../images/trash.jpeg'
import {useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../AppContext'


function Variants(){
    const [quantity, updateQuantity ]= useContext(AppContext)
    let [item, setItem] = useState(0)
    let [variantItem,setVariant] =useState(JSON.parse(localStorage.getItem('variantsPage')) || {})
    let [selected, setSelected] = useState(variantItem.variants[0].id)
    let [itemQuantity, setQuantity] = useState(1)
    const cartId = localStorage.getItem('cart_id')
    useEffect(()=>{
        sdk.store.product.retrieve(variantItem.id, {
        fields: `*variants.calculated_price`,
        region_id: "reg_01K5CS3Y8E61H68KNHWKKDRAPY",
        country_code: 'cm',
        }).then(({ product }) => {
            // console.log(product)
            setVariant(product)
            // console.log(product.variants[0].calculated_price.calculated_amount)
            // Check calculated_price.price_list_type === "sale" for sale price
            // Use calculated_price.calculated_amount for the price
            // Use calculated_price.original_amount for the original price (if on sale)
    })
    }, [])

        const addToCart = (variant_id, quantity = 1)=>{
        updateQuantity()
        if(!cartId){
            console.log("could not add to cart")
            return
        }
        
        sdk.store.cart.createLineItem(cartId, {
            variant_id,
            quantity,
        })
    }

    let animate = useRef(null)
    let animation = ()=>{
        
        animate.current.style.display = 'flex'
        animate.current.style.opacity = 1
        setTimeout(()=>{
            animate.current.style.opacity = 0
        }, 2000)
        setTimeout(()=>{
            animate.current.style.display = 'none'
        }, 4000)
    }
    
    return(
        <section className="mx-1 min-h-100 sm:m-h-dvh  sm:mx-10 lg:mx-50 gap-2 grid sm:grid-cols-3">
            <div className="flex flex-col gap-4 sm:gap-8">
                <div className="group border-t border-b flex flex-col text-xl justify-center items-center-safe ">
                    <p className="font-bold text-blue-800  sm:text-2xl">{variantItem.title}</p>
                    <p className="text-lg">{variantItem.description}</p>
                </div>

                <div className='grid group  gap-2 border-t border-b'>
                    <div className=" flex text-xl gap-3 hover:cursor-pointer justify-center items-center-safe " >
                    <p>Product Information </p><em className="font-bold">+</em>
                    </div>
                    <div className="hidden group-hover:flex gap-2 flex-wrap">
                        {variantItem.weight && <p><b>Weight:</b> {variantItem.weight}</p>}
                        {variantItem.handle && <p><b>Handle:</b> {variantItem.handle}</p> }
                        {variantItem.type &&<p><b>Type:</b> {variantItem.type}</p>}
                        {variantItem.width && <p><b>Width:</b> {variantItem.width}</p> }
                        {variantItem.height && <p><b>Height:</b> {variantItem.height}</p>}
                        {variantItem.length && <p><b>Lenght:</b> {variantItem.length}</p>}
                    </div>
                </div>
            </div>
            <div className='flex overflow-x-scroll  overflow-y-hidden whitespace-nowrap
             space-x-4 w-full sm:grid sm:scrollbar-hide sm:overflow-y-scroll h-50 sm:h-70'>
                {variantItem.images.map((image, idx)=>
                <div key={idx}>
                    <img src={image.url} alt=""  className='w-50 sm:w-full'/>
                </div>
                )}
            </div>
            <div className='flex flex-col  gap-3'>
                
                <div className="group border-b grid text-xl gap-1">
                    <p className='text-blue-800 font-bold'>Select Variant</p>
                    <div className='flex flex-wrap text-sm gap-2'>  
                            {
                                variantItem.variants.map((variant,idx)=>{
                                    let details= []
                                    return (
                                        <p key={idx} onClick={()=> setSelected(s=> s = variant.id)} className={`shadow-2xl bg-black/50 ${variant.id === selected && 'bg-white'} hover:scale-95 hover:cursor-pointer ease-in-out duration-75 grid p-1 mb-5 sm:px-2 w-fit rounded-xl`}>
                                        <span>{variant.title}</span>
                                        <span>{variant.calculated_price ? variant.calculated_price.calculated_amount+' -XAF' : '--XAF' }</span>
                                        </p>)
                                })
                            }         
                    </div>
                </div >
                <div className='grid sm:grid-cols-2 gap-2'>
                    <p ref={animate}  className='text-green-500 hidden transition-opacity duration-2000 shadow-2xl  w-fit p-2 relative'>Added {itemQuantity} to cart !</p>
                    <div className='flex w-fit  bg-gray-400/45 rounded-2xl  p-1 px-2'>
                            <p className='w-fit'>Quantity</p>
                            <select value={itemQuantity} onChange={(e)=> setQuantity(q=> q = e.target.value)} name="productQuantity" id="selectQuantity" className='w-fit hover:scale-95 cursor-pointer'>
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
                    <BigBlue content='Add to Cart' onclick={()=>{ addToCart(selected, Number(itemQuantity)), animation()}}/>
                </div>
            </div>
        </section>
    )
}

export default Variants