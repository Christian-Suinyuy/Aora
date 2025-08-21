import Section from './assets/homeSection/Section'
import SearchBar from './assets/Seach-bar/Search'

function Home(){
    return (
      <section className="body2 sm:mx-50">
        <SearchBar />
        <Section Title='New Arivals' />
        <Section Title='Special Products' />
      </section>
    )
}

export default Home