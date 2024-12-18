import React from 'react'

import { gsap } from 'gsap'
import { GiHamburgerMenu } from 'react-icons/gi'
import { navBarLists, pac, pacLogoCash, pacLogoWhite } from '@/constants'
import { cn } from '@/lib/utils'

interface NavBarItem {
    name: string
    path: string
    type: string
}

function Navbar() {
    const [navToggle, setNavToggle] = React.useState(false)
    const dropdownRef = React.useRef<HTMLDivElement | null>(null)
    const hamburgerRef = React.useRef<HTMLDivElement | null>(null)

    const navBarLists: NavBarItem[] = [
        { name: 'Why PAC?', path: 'whypac', type: 'scroll' },
        { name: 'Product', path: 'product', type: 'scroll' },
        { name: 'Ecosystem', path: 'ecosystem', type: 'scroll' },
        { name: 'Fincloud', path: '/fincloud', type: 'router' },
        { name: 'EMoney', path: 'emoney', type: 'scroll' },
        { name: 'Our Customer', path: 'ourcustomer', type: 'scroll' },
        {
            name: 'Carrer',
            path: 'https://id.jobstreet.com/companies/pactindo-facilities-168556022423394',
            type: 'link',
        },
    ]

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target as Node)
            ) {
                setNavToggle(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef])

    const handleMouseEnter = (e: any) => {
        const animationElement =
            e.currentTarget.querySelector('.link-animation')
        gsap.to(animationElement, { width: '100%', duration: 0.3, left: 0 })
    }

    const handleMouseLeave = (e: any) => {
        const animationElement =
            e.currentTarget.querySelector('.link-animation')
        gsap.to(animationElement, { width: '0%', duration: 0.3, left: '100%' })
    }

    return <div className={cn()}>navbar</div>
}

export default Navbar
