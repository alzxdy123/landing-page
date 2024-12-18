import { useEffect } from 'react'

import { ProductServices } from '@/constants'
import ProductCard from './ProductCard'
import { animateWithGsap } from '@/lib/animations'

function Product() {
    useEffect(() => {
        animateWithGsap(
            '.card-anim',
            { y: 0, duration: 0.9, opacity: 1, stagger: 0.3 },
            {}
        )

        animateWithGsap(
            '.text-anim',
            {
                y: 0,
                duration: 1,
                opacity: 1,
            },
            {}
        )
    }, [])

    return (
        <div
            className='w-full p-16'
            style={{
                background: 'linear-gradient(to bottom left, #3cb4ff, #342b88)',
            }}
        >
            <h1 className='text-anim mb-10 translate-y-[-50px] text-center text-4xl font-bold text-white opacity-0 dark:text-slate-800'>
                Our Product & Services
            </h1>
            <div className='flex flex-wrap justify-center gap-14'>
                {ProductServices.map((item, i) => (
                    <div
                        className='card-anim translate-y-[50px] opacity-0'
                        key={i}
                    >
                        <ProductCard
                            image={item.image}
                            title={item.title}
                            path={item.path}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
