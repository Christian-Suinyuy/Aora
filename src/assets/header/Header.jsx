import Logo from '../images/logo.svg'
import Like from '../images/like.svg'
import CartImage from '../images/cart.svg'
function Header(){
    return (
        <header className="left-side sticky top-0 bg-white border-1 flex w-full justify-between mb-2 px-2">
            <div className="left-side border-0.5 flex my-auto gap-10 h-9 items-center-safe">
                <img src={Logo} alt="" className='h-full'/>
                <ul className='text-xl bg-white flex justify-between gap-5'>
                    <li className=''>Home</li>
                    <li>Eloctronics</li>
                    <li>Clothing</li>
                    <li>Books</li>
                    <li>Sale</li>
                </ul>
            </div>

            <div className ="right-side flex gap-3">
                <img src={Like} alt= "like" />
                <img src={CartImage} alt= "like" />
            </div>
        </header>
    )
}

export default Header