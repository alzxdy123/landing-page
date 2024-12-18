import { whitepaper, whitepaperPDF } from '@/constants'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '../custom/button'
import { useGSAP } from '@gsap/react'
import { animFromLeft, animFromTopToBottom } from '@/lib/animations'

function WhitePaper() {
    useGSAP(() => {
        animFromTopToBottom('.anim')
        animFromLeft('.anim2')
    }, [])

    return (
        <div className='flex gap-10 rounded-lg bg-slate-200 p-6 dark:bg-slate-800 lg:justify-center'>
            <img src={whitepaper} alt='' className='anim2 hidden lg:block' />
            <div>
                <h1 className='anim text-3xl font-bold'>
                    Read Us on IDC Whitepaper
                </h1>
                <p className='anim mb-5 mt-2'>
                    Kenali PAC lebih dekat dan lebih lengkap
                </p>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='anim rounded-3xl bg-[#1e96d1] p-6 text-lg'>
                            Read Us
                        </Button>
                    </DialogTrigger>
                    <DialogContent className='max-w-4xl'>
                        <DialogTitle className='sr-only'>
                            IDC Whitepaper
                        </DialogTitle>
                        <h2 className='mb-4 text-xl font-bold'>
                            IDC Whitepaper
                        </h2>
                        <div className='h-[600px] w-full overflow-auto'>
                            {whitepaperPDF}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default WhitePaper
