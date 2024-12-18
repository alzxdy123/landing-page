import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

type ImageDisplayType = {
    images: string[]
    title: string
}

function ImageDisplay({ images, title }: ImageDisplayType) {
    useEffect(() => {
        const elements = document.querySelectorAll('.anim')
        gsap.fromTo(
            elements,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: elements,
                    start: 'top 10%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    return (
        <div className='mb-10'>
            <h2 className='mb-6 text-xl font-semibold'>{title}</h2>
            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4'>
                {images.map((image, i) => (
                    <div
                        key={i}
                        className='anim flex h-32 items-center justify-center rounded bg-gray-100 p-4 shadow-md dark:bg-gray-800'
                    >
                        <img
                            src={image}
                            alt={`Image ${i}`}
                            className='max-h-20 object-contain'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImageDisplay
