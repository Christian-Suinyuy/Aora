import Logo from '../images/logo.svg'
import Like from '../images/like.svg'
import CartImage from '../images/cart.svg'
import { cart } from '../cart/cartData'
import { Link } from 'react-router-dom'

function Header(){

    return (
        <header className="bg-white h-12 items-center-safe left-side sticky z-10 top-0 border-1 flex w-full justify-between mb-2 px-2">
            <div className="left-side border-0.5 flex my-auto gap-10 h-9 items-center-safe">
                <img src={Logo} alt="" className='h-full'/>

                <div className='group my-2 sm:my-auto mx-auto hover:cursor-pointer sm:flex '>
                    <p className='sm:hidden'>Pages</p>
                <ul className='relative z-1 p-2 scale-y-0 sm:shadow-none shadow-xl group-hover:scale-y-100 sm:scale-y-100 sm:flex sm:gap-5'>
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
            </div>

            <div className ="right-side  items-center-safe flex gap-3">
                <Link to='/signup' className='hover:scale-110 ease-in-out'>
                        <span className=''>signUp</span>
                </Link>
                <Link to='/login' className='hover:scale-110 ease-in-out'>
                        <span className=''>Login</span>
                </Link >
                <img src={Like} alt= "like" className='hover:scale-110 ease-in-out' />
                <Link to="/cart" className='hover:scale-110 ease-in-out'>
                <div>
                    <span className='bg-blue-600/50 rounded-2xl w-15 h-7 absolute right-0 flex justify-center-safe top-0'>
                        {cart.calculatQuantity()} Cart
                    </span>
                <img src={CartImage} alt= "Cart" />
                </div>
                </Link>
            </div>
        </header>
    )
}

export default Header