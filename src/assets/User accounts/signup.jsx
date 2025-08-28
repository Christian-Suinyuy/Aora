import { Link } from "react-router-dom"
import BigBlue from "../bigBlue"
import { useState } from "react"
import { sdk } from "../../lib/config"

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

       let sendInfo = async ()=>{
            // 1) Retrieve registration token
            
            try {
                const token = await sdk.auth.register("customer", "emailpass", {
                email: 'b52329871@gmail.com',
                password: 'pass',
                })
                    
                    // 2) Create customer (token auto‑used by SDK)
                const { customer } = await sdk.store.customer.create({
                email: 'b52329871@gmail.com',
                first_name: (name.split(" "))[0],
                last_name:(name.split(" "))[1] ,
                },
    
                {},
                { Authorization: `Bearer ${
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3Rvcl9pZCI6IiIsImFjdG9yX3R5cGUiOiJjdXN0b21lciIsImF1dGhfaWRlbnRpdHlfaWQiOiJhdXRoaWRfMDFLM1JBWDE0Q01RR1ZZQ0U1Slc2Slk5VjIiLCJhcHBfbWV0YWRhdGEiOnt9LCJpYXQiOjE3NTYzODQ2MjUsImV4cCI6MTc1NjQ3MTAyNX0.2x1IcddjMkZK2MpdMFRlZuZZRbREQ2FGglYRXs2QxjI"
                }`, "x-publishable-api-key": 'pk_823ac7a7bddffea59945a5f89810d7bcc236fcefef8c92d5385d135b4c1e9c75' }
    
                )
                
                // register -> create


                } catch (e) {
                // inspect e.status, e.statusText, e.message
                console.log(e.message, 'damn')

            }
            
        }

    return (
        <section className=" grid gap-5 mx-2 sm:mx-50 mb-5">
            <h2 className="font-bold text-2xl mx-auto">SignUp</h2>
            <form action="" className="grid w-full sm:w-100 gap-3">
                <label htmlFor="name">
                    <p>Name</p>
                    <input type="text" placeholder="Enter name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Email</p>
                    <input type="email" placeholder="Enter name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
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

                <BigBlue content="Sign Up" onclick={sendInfo}/>

            </form>
            <p className="mx-auto">Already have an account? <Link to='/login' className="text-blue-600">Login</Link> </p>
        </section>

    )
}
export default SignUp