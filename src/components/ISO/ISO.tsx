import { isoLogo, saasLogo } from '@/constants'
import { animFromTopToBottom } from '@/lib/animations'
import { useGSAP } from '@gsap/react'

function ISO() {
    useGSAP(() => {
        animFromTopToBottom('.anim')
        animFromTopToBottom('.anim2')
    }, [])

    return (
        <>
            <div className='mt-5 bg-slate-100 dark:bg-slate-900'>
                <div className='mx-auto flex h-screen w-[90%] flex-col items-center justify-center gap-10 py-10'>
                    <h1 className='anim text-center text-4xl font-bold'>
                        SASS <br /> (Compliance Infrastructure)
                    </h1>
                    <img src={saasLogo} alt='SASS' width={500} />
                </div>
            </div>

            <div className='flex items-center justify-center py-32 dark:bg-slate-900'>
                <div className='flex w-1/2 flex-col items-center justify-center gap-5'>
                    <img
                        src={isoLogo}
                        alt=''
                        width={130}
                        className='anim2 rounded-3xl p-2 dark:bg-slate-300'
                    />

                    <h1 className='anim2 text-3xl font-bold'>
                        Terverifikasi ISO/IEC 27001:2013
                    </h1>
                    <p className='anim2 text-center'>
                        PT. Sarana Pactindo has been certified to the ISO/IEC
                        27001:2013 standard with the scope The information
                        security management system in the provision of managed
                        services digital banking and IT operations of the
                        electronic money platform.
                    </p>

                    <button className='anim2 mt-5 rounded-3xl bg-[#1e96d1] px-14 py-2 text-white dark:text-black'>
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}

export default ISO
