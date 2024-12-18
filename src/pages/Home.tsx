import { Element } from 'react-scroll'
import { Hero, Navbar, Product, WhyPAC } from '../components'

function App() {
    return (
        <>
            <Navbar />
            <Element name='hero'>
                <Hero />
            </Element>
            <Element name='whypac'>
                <WhyPAC />
            </Element>
            <Element name='product'>
                <Product />
            </Element>
        </>
    )
}

export default App
