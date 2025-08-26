import { Link } from "react-router-dom"
import BigBlue from "../bigBlue"
import { useState } from "react"

function SignUp(){

    let [email, setMail] = useState("")
            let changingMail = (e)=>{
                setMail(m => m = e.target.value)
            }
    
    let [pass, setpass] = useState("")
        let changingPass = (e)=>{
            setpass(p => p = e.target.value)
        }

    let [name, setName] = useState("")
    let changingName = (e)=>{
        setName(n => n = e.target.value)
    }

    let signUp = {
        email,
        pass,
        name
    }

    return (
        <section className=" grid gap-5 mx-2 sm:mx-50 mb-5">
            <h2 className="font-bold text-2xl mx-auto">SignUp</h2>
            <form action="" className="grid w-full sm:w-100 gap-3">
                <label htmlFor="name">
                    <p>Name</p>
                    <input type="text" placeholder="Entr name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Email</p>
                    <input type="email" placeholder="Entr name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Password</p>
                    <input type="password" placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Confirm Password</p>
                    <input type="password" placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name" className="flex gap-4">
                    <input type="checkbox" placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800" />
                    <p >I agree to the Terms and Conditions</p>
                </label>

                <BigBlue content="Sign Up"/>

            </form>
            <p className="mx-auto">Already have an account? <Link to='/login' className="text-blue-600">Login</Link> </p>
        </section>

    )
}
export default SignUp