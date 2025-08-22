import BigBlue from "../bigBlue"
function LogIn(){
    return (
        <section>
            <section className=" grid gap-5 mx-2 sm:mx-50 mb-5">
            <h2 className="font-bold text-2xl mx-auto">Log in</h2>
            <form action="" className="grid w-full sm:w-100 gap-3">


                <label htmlFor="name">
                    <p>Email</p>
                    <input type="email" placeholder="Entr name" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <label htmlFor="name">
                    <p>Password</p>
                    <input type="password" placeholder=" password" className="focus:outline-0 border-1 p-2 rounded border-blue-800 w-full" />
                </label>

                <BigBlue content="Sign Up"/>

            </form>
            <p className="mx-auto">Dont`t` have an account? <a href="#" className="text-blue-600">Sign-Up </a> </p>
        </section>
        </section>
    )
}

export default LogIn