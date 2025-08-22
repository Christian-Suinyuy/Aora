import SearchBar from "./assets/Seach-bar/Search"
import Card from "./assets/Item card/itemCard"

function Aside(){
    return (
        <div className="filter h-fit sm:sticky top-10">
                <h1 className="font-bold text-xl">filter</h1>
                <form className=" grid gap-5">
                    <label htmlFor="category" className="flex flex-col gap-2">
                        <p className="font-bold">Category</p>
                        <select id="category" className="w-full border-1 p-2 rounded">
                            <option value="clothing">Select category</option>
                            <option value="clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Pc">Comuters</option>
                        </select>
                    </label>

                    <label htmlFor="price range" className="flex flex-col gap-2">
                        <p className="font-bold">Price Range</p>
                        <div className="flex gap-4">
                        <div className="flex gap-2"> <p>min</p> <input type="number" className=" border-1 rounded p-1 w-15"/></div>
                        <div className="flex gap-2"> <p>min</p> <input type="number" className=" border-1 rounded p-1 w-15"/></div>
                        </div>
                    </label>
                    
                <label htmlFor="category" className="flex flex-col gap-2">
                        <p className="font-bold">Brand</p>
                        <select id="category" className="w-full border-1 p-2 rounded">
                            <option value="clothing">Select category</option>
                            <option value="clothing">Clothing</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Pc">Comuters</option>
                        </select>
                    </label>
                </form>

        </div>
    )
}

function Grid(){
    return(
        <section className="product-main">
            <SearchBar />
            <h1 className="font-bold text-xl">Featured Products</h1>
            <div className="product-list grid gap-5">
                <label htmlFor="sort">
                    <p className="text-2xl">sort by</p>
                    <input type="text" placeholder="...Sort by" className="border-1 p-1" />
                </label>

            <div className="product-grid grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
        </section>
    )
}
function Products(){
    return (
        <section className=" flex flex-col gap-3 px-10">
            <div className="grid sm:grid-cols-[1fr_4fr] gap-10">
            <Aside />
            <Grid />
            <div></div>
            </div>
        </section>
    )
}

export default Products