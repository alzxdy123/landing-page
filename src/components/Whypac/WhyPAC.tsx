import { whyPac } from '@/constants'
import { animateWithGsap, animFromLeft } from '@/lib/animations'
import { useGSAP } from '@gsap/react'
import WhypacCard from './WhypacCard'
import WhitePaper from './WhitePaper'

function WhyPAC() {
    useGSAP(() => {
        animFromLeft('.anim-text')
        animateWithGsap(
            '.whypac-box-image',
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 },
            { start: 'top 90%' }
        )

        animateWithGsap(
            '.whypac-box-content',
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 },
            { start: 'top 90%' }
        )
    }, [])

    return (
        <div className='min-h-screen w-full'>
            <div className='anim-text flex h-32 w-52 items-center justify-end bg-[#e2f4ff] dark:bg-slate-800'>
                <span className='anim-text absolute right-[-110px] w-60 text-5xl font-bold'>
                    Why PAC?
                </span>
            </div>

            <div className='mx-auto my-16 w-[90%]'>
                <div className='mb-20 flex flex-col gap-10 xl:flex-row'>
                    <WhypacCard whyPac={whyPac} />
                </div>
                <WhitePaper />
            </div>
        </div>
    )
}

export default WhyPAC
