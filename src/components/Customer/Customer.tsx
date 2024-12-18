import { useEffect } from 'react'
import ImageDisplay from './ImageDisplay'
import { BPD, BANK_UMUM } from '@/constants'
import { animFromTopToBottom } from '@/lib/animations'

function OurCustomer() {
    useEffect(() => {
        const elements = document.querySelectorAll('.text-anim')
        elements.forEach((el) => animFromTopToBottom(el))
    }, [])

    return (
        <div className='min-h-screen py-10'>
            <div className='mx-auto flex w-[90%] flex-col gap-10'>
                <h1 className='text-anim text-center text-4xl font-bold lg:text-6xl'>
                    Our Customer
                </h1>
                <p className='text-anim px-5 text-center lg:px-20'>
                    Since our founding, PT. Sarana Pactindo (PAC) has quickly
                    become well-known as a trusted partner of many banks and
                    billers. We have worked closely and successfully with
                    government departments and major companies, and pride
                    ourselves on exceeding our clients' high expectations. Here,
                    you can find a selection of the customers we already work
                    closely alongside.
                </p>

                <ImageDisplay title='BPD' images={BPD} />
                <ImageDisplay title='BANK UMUM' images={BANK_UMUM} />
            </div>
        </div>
    )
}

export default OurCustomer
