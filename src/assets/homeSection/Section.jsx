import Card from "../Item card/itemCard"

function Section({Title= "Products"}){
    return(
        <section className="flex flex-col gap-3 my-8">
            <h2 className="font-bold">{Title}</h2>
            <div className="cart-container grid   gap-5 mx-2 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default Section