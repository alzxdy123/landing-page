import { Element } from 'react-scroll'
import {
    ContactUs,
    Customer,
    Ecosystem,
    EMoney,
    Footer,
    Hero,
    ISO,
    Navbar,
    Product,
    WhyPAC,
} from '../components'

function App() {
    return (
        <div className='relative'>
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
            <Element name='ecosystem'>
                <Ecosystem />
            </Element>
            <Element name='emoney'>
                <EMoney />
            </Element>
            <Element name='customer'>
                <Customer />
            </Element>
            <Element name='iso'>
                <ISO />
            </Element>
            <Footer />
            <ContactUs />
        </div>
    )
}

export default App
