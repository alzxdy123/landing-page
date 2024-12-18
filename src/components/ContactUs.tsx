import { MdOutlineMail } from 'react-icons/md'

function ContactUs() {
    return (
        <div className='fixed bottom-10 right-10 flex cursor-pointer items-center rounded-full bg-[#1e96d1] px-4 py-4 font-bold text-white'>
            <MdOutlineMail className='text-2xl font-extrabold' />
        </div>
    )
}

export default ContactUs
