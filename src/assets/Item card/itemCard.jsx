import sample from '../images/sample.svg'
function Card(){
    return(
        <div className='flex flex-col w-55 '>
            <img src={sample} alt="" />
            <div className=''>
                <h3 className="font-bold">Wireless HeadPhones</h3>
                <div className="details text-gray-600">
                    <span>$499.99 • ★ 4.3 (90)</span>
                </div>
            </div>
        </div>
    )
}

export default Card