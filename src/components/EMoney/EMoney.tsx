import {
    emoAppStore,
    emoGooglePlay,
    emoneyImages,
    pacLogoCash,
} from '@/constants'
import Carousel from '../custom/Carousel'
import { useEffect, useRef } from 'react'
import { animFromBottomToTop } from '@/lib/animations'

function EMoney() {
    const animRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        animRefs.current.forEach((ref) => {
            if (ref) animFromBottomToTop(ref)
        })
    }, [])

    const registerRef = (index: number) => (el: HTMLDivElement | null) => {
        animRefs.current[index] = el
    }

    return (
        <div className='py-10 pt-20'>
            <div className='container flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-6 flex w-full justify-center lg:mb-0 lg:w-1/2'>
                    <div className='w-[450px] max-w-full'>
                        <Carousel content={emoneyImages} />
                    </div>
                </div>

                <div className='flex w-full flex-col items-center gap-6 px-4 lg:w-1/2'>
                    <div ref={registerRef(0)}>
                        <img src={pacLogoCash} alt='PAC Logo' />
                    </div>
                    <h5 ref={registerRef(1)} className='text-4xl font-bold'>
                        eMoney
                    </h5>
                    <p ref={registerRef(2)} className='text-center'>
                        PAC CASH is an e-money service published by PT Sarana
                        Pactindo. PAC Cash can be used for payment transactions,
                        purchases, and cash withdrawals using a mobile
                        application. PAC Cash has the latest security technology
                        that ensures all user data and transactions are always
                        safe.
                    </p>
                    <div ref={registerRef(3)} className='flex gap-5'>
                        <a href='#' className='cursor-pointer'>
                            <img
                                width={270}
                                src={emoGooglePlay}
                                alt='Google Play Store'
                            />
                        </a>
                        <a href='#' className='cursor-pointer'>
                            <img
                                width={270}
                                src={emoAppStore}
                                alt='Apple Store'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EMoney
