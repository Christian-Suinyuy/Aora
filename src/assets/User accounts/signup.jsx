import BigBlue from "../bigBlue"

function SignUp(){
    return (
        <section className=" grid gap-5 mx-2 sm:mx-50 mb-5">
            <h2 className="font-bold text-2xl mx-auto">Log</h2>
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
            <p className="mx-auto">Already have an account? <a href="#" className="text-blue-600">Log-in </a> </p>
        </section>

    )
}
export default SignUp