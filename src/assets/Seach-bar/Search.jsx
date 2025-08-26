import SearcIcon from '../images/search-icon.svg'
function SearchBar(){
    return(
        <div className="flex sticky z-1 top-12 search-container w-full border-0 rounded-2xl bg-blue-900/50 mx-auto h-9 px-1 gap-3 py-2">
            <img src={SearcIcon} alt="icon" />
            <input type="text" placeholder="search" className="w-full focus:outline-0"/>
        </div>
    )
}

export default SearchBar