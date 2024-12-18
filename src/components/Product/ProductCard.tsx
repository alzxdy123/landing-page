import { Button } from '../custom/button'

interface ProductCardProps {
    image: string
    title: string
    path: string
}

function ProductCard({ image, title }: ProductCardProps) {
    return (
        <div className='flex h-full w-60 flex-col items-center justify-between rounded-3xl bg-white p-8 dark:bg-black'>
            <img
                src={image}
                alt={title}
                className='h-56 rounded-lg object-center'
                width={180}
            />
            <h1 className='mt-4 w-full text-left text-xl font-bold'>{title}</h1>
            <div className='mt-8 flex w-full justify-center'>
                <Button className='mt-20 rounded-3xl bg-[#1e96d1] px-10'>
                    Learn More
                </Button>
            </div>
        </div>
    )
}

export default ProductCard
