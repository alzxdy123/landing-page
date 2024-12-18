import { useRef } from 'react'

import Carousel from '../custom/Carousel'
import { ecoImage1, ecoImage2, ecoImage3 } from '@/constants'
import { useGSAP } from '@gsap/react'
import { animFromTopToBottom } from '@/lib/animations'

function Ecosystem() {
    const slides = [ecoImage1, ecoImage2, ecoImage3]
    const titleRef = useRef(null)

    useGSAP(() => {
        animFromTopToBottom(titleRef.current)
    })

    return (
        <div className='min-h-screen w-full py-20'>
            <div className='mx-auto flex h-screen w-[90%] flex-col py-10'>
                <h1
                    className='mb-10 text-center text-5xl font-bold'
                    ref={titleRef}
                >
                    Ecosystem
                </h1>
                <Carousel content={slides} />
            </div>
        </div>
    )
}

export default Ecosystem
