import twitterLogo from './twitter.svg'
import igLogo from './instagram.svg'
import fbLogo from './facebook.svg'
function Footer(){
    return(
        <footer className="flex flex-col gap-3 relative bottom-0 w-full text-#61758A">
            <hr className='w-11/12 mx-auto'/>
            <ul className='flex justify-around hover:cursor-pointer'>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>

            <div className="flex justify-center">
                <img src={twitterLogo} alt="" />
                <img src={igLogo} alt="" />
                <img src={fbLogo} alt="" />
            </div>
            <p className=' mx-auto'>@2025 ShopSmart. All rights reserved.</p>
        </footer>
    )
}

export default Footer