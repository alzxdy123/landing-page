import { MdOutlineMail } from 'react-icons/md'

function ContactUs() {
    return (
        <div className='group fixed bottom-10 right-10 flex cursor-pointer items-center space-x-4 overflow-hidden rounded-full bg-[#1e96d1] px-4 py-4 font-bold text-white transition-all'>
            <MdOutlineMail className='text-2xl font-extrabold' />
            <div className='hidden group-hover:block'>Contact Us</div>
        </div>
    )
}

export default ContactUs
