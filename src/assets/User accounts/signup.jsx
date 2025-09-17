import { Link } from "react-router-dom"
import BigBlue from "../bigBlue"
import { use, useRef, useState } from "react"
import { sdk } from "../../lib/config"


function SignUp(){
    const formelem = useRef()
    let [email, setMail] = useState("christai@gmail.com")
            let changingMail = (e)=>{
                setMail(m => m = e.target.value)
            }
    
    let [pass, setpass] = useState("pass")
        let changingPass = (e)=>{
            setpass(p => p = e.target.value)
        }

    let [name, setName] = useState("chris")
    let changingName = (e)=>{
        setName(n => n = e.target.value)
    }

    let [lastName, setLastName] = useState("bcs")
    let changingLastName = (e)=>setLastName(n => n = e.target.value)
    

    let [phone,setPhone] = useState('651098669')
    const changingPhone = e=>setPhone(p=> p = e.target.value)
    
    let signUp = {
        email,
        pass,
        name
    }

       let sendInfo = async ()=>{
            // 1) Retrieve registration token
            
            try {
                const token = await sdk.auth.register("customer", "emailpass", {
                email,
                password: pass,
                })
                    
                    // 2) Create customer (token auto‑used by SDK)
                const { customer } = await sdk.store.customer.create({
                email,
                first_name: name,
                last_name:lastName,
                phone,
                },
    
                {},
                { Authorization: `Bearer ${token }`, "x-publishable-api-key": 'pk_823ac7a7bddffea59945a5f89810d7bcc236fcefef8c92d5385d135b4c1e9c75' }
    
                ).then(()=>{
                    alert('succesfull')
                })
                
                // register -> create


                } catch (e) {
                // inspect e.status, e.statusText, e.message
                alert(`${e.message}`)
                // console.log(e.message, 'damn')

            }
            
        }

    const submitform = async()=>{
        // console.log(formelem.current.requestSubmit())
        sendInfo()
        
    }
    return (
        <section className=" grid gap-5 mx-2 sm:mx-50 mb-5">
            <h2 className="font-bold text-2xl mx-auto">SignUp</h2>
            <form ref={formelem} action="" className="grid w-full sm:w-100 gap-3">
                <label htmlFor="name">
                    <p>First Name: {name}</p>
                    <input type="text" value={name} onChange={changingName} required placeholder="Enter name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Second Name: {lastName} </p>
                    <input type="text" value={lastName} onChange={changingLastName} required placeholder="Enter name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Email</p>
                    <input type="email" required value={email} onChange={changingMail} placeholder="Enter name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Phone: {phone}</p>
                    <input type="tel" required value={phone} onChange={changingPhone} placeholder="Enter name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Password</p>
                    <input type="password" value={pass} required onChange={changingPass} placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Confirm Password</p>
                    <input type="password" placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name" className="flex gap-4">
                    <input type="checkbox" required placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800" />
                    <p >I agree to the Terms and Conditions</p>
                </label>

                <BigBlue content="Sign Up" onclick={submitform}/>

            </form>
            <p className="mx-auto">Already have an account? <Link to='/login' className="text-blue-600">Login</Link> </p>
        </section>

    )
}
export default SignUp