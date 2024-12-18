import React from 'react'
import { pacLogoWhite } from '@/constants'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()

    return (
        <div className='w-full bg-[#063757] py-4 text-sm'>
            <div className='mx-auto flex w-[90%] flex-col justify-between text-white md:flex-row'>
                <img
                    src={pacLogoWhite}
                    width={90}
                    alt='PAC'
                    className='cursor-pointer'
                    onClick={() => navigate('/')}
                />

                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold'>PT. Sarana Pactindo</p>

                    <div className='flex gap-10'>
                        <div>
                            <p>Jl. Soekarno Hatta No. 269 Bandung</p>
                            <p>Telp. +6222 - 5229880</p>
                            <p>Fax. +6222 - 5229880</p>
                        </div>
                        <div>
                            <p>Foresta Business Loft 2 Unit 15</p>
                            <p>Jl. BSD Raya Utama Pagedangan</p>
                            <p>Kabupaten Tangerang - Banten 15339</p>
                            <p>Email. info@pactindo.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-end'>
                    Copyright PT. Sarana Pactindo 2022. All Right Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
