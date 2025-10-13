import Logo from '../images/logo.svg'
import Like from '../images/like.svg'
import CartImage from '../images/cart.svg'
import { cart } from '../cart/cartData'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext'
import { sdk } from '../../lib/config'

function Header(){
    const user = sessionStorage.getItem("userx")
    const {quantity, updateQuantity }= useContext(AppContext)

    const [quantityOld, setQuantity]= useState(cart.calculatQuantity())
    useEffect(()=>{
        const unsubscribe = cart.subscibe(()=>{
            setQuantity(cart.calculatQuantity())
        })

        setQuantity(cart.calculatQuantity())

        return ()=> unsubscribe()
    }, [])

    const [open, setOpen] =useState(false)
    const signOut = ()=>{
       sdk.auth.logout()
       console.log(sessionStorage.removeItem('userx'))
    }
    
    return (
        <header className="bg-white h-12 items-center-safe left-side sticky z-10 top-0 border-1 flex w-full justify-between mb-0 px-2">
            <div className="left-side border-0.5 flex my-auto gap-10 h-9 items-center-safe">
                <img src={Logo} alt="" className='h-full'/>
                <div className='flex sm:hidden'>
                    <MobileDropDown />
                </div>
                <ul className=' hidden sm:flex sm:gap-5'>
                    <Link to='/' className='hover:scale-110 ease-in-out'>
                        <li className=''>Home</li>
                    </Link>
                    <Link to='/products' className='hover:scale-110 ease-in-out'>
                        <li className=''>Products</li>
                    </Link>
                    <Link to='/cart' className='hover:scale-110 ease-in-out'>
                        <li className=''>Carts</li>
                    </Link>
                    <Link to='/history' className='hover:scale-110 ease-in-out'>
                        <li className=''>History</li>
                    </Link>
                    
                </ul>
            </div>

            <div className ="right-side  items-center-safe flex gap-3">
                <div className={`${user ? "flex" : "hidden"}`} onClick={()=> setOpen(o => !o)}>
                    <img src="/user.svg" alt="" className='h-8' />

                    <div 
                    onClick={signOut}
                    className={`${open ? 'fixed' : "hidden" } hover:scale-105 rounded  bg-slate-300 p-3`}>
                        <p >signOut</p>
                    </div>
                </div>

                <Link to='/login' className={`${user ?"hidden":"flex" } hover:scale-110 ease-in-out`}>
                        <span className=''>Login</span>
                </Link >

                <img src={Like} alt= "like" className='hover:scale-110 ease-in-out' />
                <Link to="/cart" className='hover:scale-110 ease-in-out'>
                <div>
                    <span className='bg-blue-600/50 rounded-2xl w-15 h-7 absolute right-0 flex justify-center-safe top-0'>
                        {quantity} Cart
                    </span>
                <img src={CartImage} alt= "Cart" />
                </div>
                </Link>
            </div>
        </header>
    )
}

function MobileDropDown(){
    let [open, setOpen] = useState(false)

    return(
        <div id="dropdown" className="flex flex-col">
            <div className="stuff" onClick={()=>setOpen(o=> !o)}>
                <p>Pages</p>
            </div>

            <div id="dropContent" className={`${open ? "scale-100" : "scale-0"} absolute bg-slate-200
            transition-all duration-1000 left-0 w-full top-10 `}>
                  <ul className=' p-5 flex flex-col gap-5 rounded' onClick={()=>setOpen(o=> !o)}>
                    <Link to='/' className='hover:scale-110 ease-in-out'>
                        <li className=''>Home</li>
                    <hr />
                    </Link>
                    <Link to='/products' className='hover:scale-110 ease-in-out'>
                        <li className=''>Products</li>
                    <hr />
                    </Link>
                    <Link to='/cart' className='hover:scale-110 ease-in-out'>
                        <li className=''>Carts</li>
                    <hr />
                    </Link>
                    <Link to='/history' className='hover:scale-110 ease-in-out'>
                        <li className=''>History</li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    )
}

export default Header