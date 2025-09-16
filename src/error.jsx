import error from './assets/images/error.svg'
export function ProductsError(){
  return(  <div className="area mx-auto">
        <img src={error} alt="" className='mx-auto' />
        <p className="text-center text-2xl">opps we encountered an error fetching data from store try refreshing your page</p>
    </div>)
}

