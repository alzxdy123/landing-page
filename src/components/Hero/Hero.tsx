import { HeroCarouselSlides } from '@/constants'
import Carousel from '../custom/Carousel'

function Hero() {
    return (
        <div className='h-screen w-full'>
            <Carousel
                content={HeroCarouselSlides.map((slide) => slide.content)}
            />
        </div>
    )
}

export default Hero
