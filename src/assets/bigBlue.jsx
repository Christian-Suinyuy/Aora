import { Link } from "react-router-dom"

function BigBlue({onclick = ()=>{ console.log('works')}, content = "click me", kind = "button", rout= "#"}){
    return(
        <Link to={rout}>
        <button type={kind} onClick={onclick} className="border-0 rounded px-2 text-black bg-blue-500 h-8 w-full">{content}</button>
        </Link>
    )
}
export default BigBlue