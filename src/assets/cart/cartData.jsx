import Products from "../../products"
import sample from "../images/water buttle.svg"

class Cart{
    item = {
        Productname: 'string',
        image: sample,
        price: 1000,
        others: "size 4",
        quantity: 1
    }

    constructor(){
        this.items =JSON.parse(localStorage.getItem("cartItems")) || [this.item]
        this.total
    }
}

export let cart = new Cart
