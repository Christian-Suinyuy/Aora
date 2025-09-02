import { createContext, useState } from "react";

import { sdk } from "./lib/config";

export const AppContext = createContext();

const ContextProvider = (props)=>{
    const cartId = localStorage.getItem('cart_id')

    let [quantity, setQuantity] = useState(0)

    const updateQuantity = ()=>{
        cartId && sdk.store.cart.retrieve(cartId)
            .then(({ cart }) => {
                let accumulator = 0
                cart.items.forEach(variant=>{
                    accumulator += variant.quantity
                })
                setQuantity(q=> q = accumulator)
        })
    }

    updateQuantity()
    
    return (
        <AppContext.Provider value={[quantity,updateQuantity ]}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider
