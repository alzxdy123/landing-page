import React, { useState, useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { Link as RouterLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { pac, pacLogoWhite, NavBarLists } from '@/constants'
import NavbarList from './NavbarList'
import GotQuestion from './GotQuestion'
import { GiHamburgerMenu } from 'react-icons/gi'
import DropdownNavbarList from './DropdownNavbarList'
// import ThemeSwitch from '../ThemeSwitch'

const Navbar = ({ fincloud = false }: { fincloud?: boolean }) => {
    const [navToggle, setNavToggle] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const hamburgerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !dropdownRef.current?.contains(event.target as Node) &&
                !hamburgerRef.current?.contains(event.target as Node)
            ) {
                setNavToggle(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleMouseEnter = (e: React.MouseEvent) => {
        const animationElement =
            e.currentTarget.querySelector('.link-animation')
        gsap.to(animationElement, { width: '100%', duration: 0.3, left: 0 })
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
        const animationElement =
            e.currentTarget.querySelector('.link-animation')
        gsap.to(animationElement, { width: '0%', duration: 0.3, left: '100%' })
    }

    const logo = fincloud ? pac : pacLogoWhite
    const textColor = fincloud
        ? 'text-black dark:text-white'
        : 'text-white dark:text-slate-800'

    return (
        <div
            className={cn(
                'absolute top-0 z-50 w-full bg-transparent py-2 pb-11'
            )}
        >
            <GotQuestion fincloud={fincloud} />
            <nav className='relative mx-auto my-5 flex w-[90%] items-center justify-between'>
                <RouterLink to='/'>
                    <img
                        src={logo}
                        alt='PAC Logo'
                        className='w-20 cursor-pointer'
                    />
                </RouterLink>
                <NavbarList
                    items={NavBarLists}
                    textColor={textColor}
                    fincloud={fincloud}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
                <div className='flex gap-5 xl:hidden'>
                    {/* <ThemeSwitch /> */}
                    <div
                        onClick={() => setNavToggle(!navToggle)}
                        className={cn(
                            'cursor-pointer rounded-md border-2 dark:border-slate-800 dark:text-slate-800 lg:hidden',
                            fincloud
                                ? 'border-black text-black'
                                : 'border-slate-200 text-white'
                        )}
                        ref={hamburgerRef}
                    >
                        <GiHamburgerMenu
                            className={cn(
                                'm-2 text-2xl',
                                navToggle === true
                                    ? fincloud
                                        ? ''
                                        : 'text-white'
                                    : ''
                            )}
                        />
                    </div>
                </div>

                {navToggle && (
                    <div
                        ref={dropdownRef}
                        className='absolute top-16 flex w-full flex-col overflow-hidden rounded-xl bg-white dark:bg-slate-800'
                    >
                        <DropdownNavbarList
                            items={NavBarLists}
                            setNavToggle={setNavToggle}
                            textColor={textColor}
                        />
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
