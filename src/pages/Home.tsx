import { Element } from 'react-scroll'
import { Hero, Navbar } from '../components'

function App() {
    return (
        <>
            <Navbar />
            <Element name='hero'>
                <Hero />
            </Element>
        </>
    )
}

export default App
