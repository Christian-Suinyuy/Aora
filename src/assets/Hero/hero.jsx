import sample1 from '../images/hero.webp'
import { Link } from 'react-router-dom'
function Hero(){
    return(
        <section className="hero text-white items-center-safe grid  sm:grid-cols-[1fr_1fr] justify-around gap-4 px-10 bg-purple-600/100 bg-blend-darken h-dvh">
            <div className="">
                <img src={sample1} alt="" />
            </div>
            <div className="row-start-1 sm:col-start-2 grid gap-20">
                <h1 className='text-4xl font-bold'>Welcome to Aora store your all in one stop shop to get you going</h1>
                <p className='text-xl'>From electronics to clothing kitchen ware and .   .   .
                    we have got you covered. We offer delivery to all regions in cameroon using our local agencies, no worries about distance or location try signing up for full experience </p>
            </div>
            <div className='flex justify-center  col-span-2'>
                <Link to='/signup' className='font-bold text-2xl border p-2 hover:scale-120 ease-initial transition-all duration-700 rounded-2xl'>Sign up to get started</Link>
            </div>
        </section>
    )
}

export default Hero