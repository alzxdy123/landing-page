import { useRef } from 'react'
import { MdOutlineMail } from 'react-icons/md'
import gsap from 'gsap'

function ContactUs() {
    const contactRef = useRef(null)

    const handleMouseEnter = () => {
        gsap.to(contactRef.current, {
            width: '150px',
            duration: 0.7,
            ease: 'power2.out',
        })
    }

    const handleMouseLeave = () => {
        gsap.to(contactRef.current, {
            width: '60px',
            duration: 0.5,
            ease: 'power2.in',
        })
    }

    return (
        <div
            ref={contactRef}
            className='group fixed bottom-10 right-10 flex cursor-pointer items-center space-x-4 overflow-hidden rounded-full bg-[#1e96d1] px-4 py-4 font-bold text-white'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <MdOutlineMail className='text-2xl font-extrabold' />
            <div className='hidden group-hover:block'>Contact</div>
        </div>
    )
}

export default ContactUs
