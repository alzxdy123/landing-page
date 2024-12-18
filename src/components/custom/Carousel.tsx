import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type CarouselType = {
    content: (JSX.Element | string)[]
}

function Carousel({ content }: CarouselType) {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % content.length)
    }

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + content.length) % content.length)
    }

    const handleIndicatorClick = (index: number) => {
        setCurrentSlide(index)
    }

    React.useEffect(() => {
        const slideInterval = setInterval(() => {
            handleNext()
        }, 6000)

        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className='relative flex h-full w-full items-center justify-center overflow-hidden'>
            <div className='relative flex h-full w-full items-center justify-center'>
                {typeof content[currentSlide] === 'string' ? (
                    <img
                        src={content[currentSlide] as string}
                        alt={`Slide ${currentSlide + 1}`}
                        className='max-h-full max-w-full object-contain'
                    />
                ) : (
                    content[currentSlide]
                )}
            </div>

            <button
                onClick={handlePrev}
                className='absolute left-20 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-slate-200 p-4 text-black shadow-2xl dark:bg-slate-800 xl:block'
            >
                <FaArrowLeft className='dark:text-white' />
            </button>

            <button
                onClick={handleNext}
                className='absolute right-20 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-slate-200 p-4 text-black shadow-2xl dark:bg-slate-800 xl:block'
            >
                <FaArrowRight className='dark:text-white' />
            </button>

            <div className='absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2'>
                {content.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleIndicatorClick(index)}
                        className={`h-4 w-4 rounded-full ${
                            index === currentSlide
                                ? 'bg-[#1e96d1]'
                                : 'bg-gray-300'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default Carousel
