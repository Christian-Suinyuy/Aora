import { Link } from "react-router-dom"

function BigBlue({onclick = ()=>{}, content = "click me", kind = "button", rout= "#"}){
    return(
        <Link to={rout}>
        <button type={kind} onClick={onclick} className="border-0 active:scale-90 duration-75 ease-in-out rounded px-2 text-black bg-blue-500 h-8 w-full">{content}</button>
        </Link>
    )
}
export default BigBlue