import Products from "../Products page/products"


class Cart{

    constructor(){
        this.items =JSON.parse(localStorage.getItem('cart')) || []
        this.total
        this.subscibers = new Set();
    }

    notify(){
        for( const fn of this.subscibers) fn()
    }

    subscibe(fn){
        this.subscibers.add(fn);
        return()=>this.subscibers.delete(fn)
    }

    saveToStorage(){
        localStorage.setItem("cart", JSON.stringify(this.items))
        this.notify();
    }

    calculateTotal(){
        let total = 0
        this.items.forEach(product=>{
            total += (product.price * product.quantity)
        })

        return (total + this.calculateTax())
    }

    calculatQuantity(){
        let quantity = 0
        this.items.forEach(item=>{
           quantity += item.quantity
        })
        return quantity
    }
    
    updateQuantity(name, quantity){
        this.items.forEach(item=>{
                (name=== item.id) && (item.quantity = quantity)
            })
            this.saveToStorage()
    }

    calculateTax(){
        let total = 0
        this.items.forEach(product=>{
            total += (product.price * product.quantity)
        })

        return ((2/100) * total)
    }

    removeFromCart(id){
        this.items = this.items.filter((product)=>product.id != id)
        this.saveToStorage()
        console.log(this.items)
    }

    addToCart(product){
            let notFount = true
            this.items.forEach(item=>{
                (product.id=== item.id) && (item.quantity += 1,notFount = false)
            })

        if (notFount){
            this.items.push(product)
        }

        this.saveToStorage()
    }

    
    
}

export let cart = new Cart
