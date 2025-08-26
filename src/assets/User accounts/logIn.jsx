import { Link } from "react-router-dom"
import BigBlue from "../bigBlue"
import { useState } from "react"
function LogIn(){

    let [email, setMail] = useState("")
        let changingMail = (e)=>{
            setMail(m => m = e.target.value)
        }

    let [pass, setpass] = useState("")
        let changingPass = (e)=>{
            setpass(p => p = e.target.value)
        }

    let login = {
        email,
        pass
    }

    return (
        <section>
            <section className=" grid gap-5 mx-2 sm:mx-50 mb-5">
            <h2 className="font-bold text-2xl mx-auto">Log in</h2>
            <form action="" className="grid w-full sm:w-100 gap-3">


                <label htmlFor="name">
                    <p>Email: {email}</p>
                    <input type="email" value={email} onChange={(e)=> changingMail(e)} required placeholder="Entr name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Password</p>
                    <input type="password" value={pass} onChange={(e)=>changingPass(e)} required placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <BigBlue content="Sign Up"/>

            </form>
            <p className="mx-auto">Dont`t` have an account? <Link to='/signup' className="text-blue-600">signUp</Link> </p>
        </section>
        </section>
    )
}

export default LogIn