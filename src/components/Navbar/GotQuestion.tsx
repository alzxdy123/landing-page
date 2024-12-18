import { cn } from '@/lib/utils'

function GotQuestion({ fincloud = false }: { fincloud?: boolean }) {
    return (
        <div
            className={cn(
                'mx-auto flex w-[90%] justify-end',
                fincloud ? 'text-black' : 'text-white',
                'dark:text-black'
            )}
        >
            Got Question?
            <span className={cn('ml-1 cursor-pointer font-bold')}>
                +6222 - 5229880
            </span>
        </div>
    )
}

export default GotQuestion
