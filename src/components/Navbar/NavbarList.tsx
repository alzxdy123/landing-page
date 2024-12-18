import React from 'react'
import { cn } from '@/lib/utils'
import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

interface NavBarItem {
    name: string
    path: string
    type: 'scroll' | 'router' | 'link'
}

interface NavbarListProps {
    items: NavBarItem[]
    textColor: string
    fincloud?: boolean
    handleMouseEnter: (e: React.MouseEvent) => void
    handleMouseLeave: (e: React.MouseEvent) => void
}

const NavbarList: React.FC<NavbarListProps> = ({
    items,
    textColor,
    handleMouseEnter,
    handleMouseLeave,
    fincloud,
}) => {
    return (
        <>
            {items.map(({ name, path, type }, index) => (
                <React.Fragment key={index}>
                    {type === 'link' ? (
                        <a
                            href={path}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={cn(
                                'hidden px-2 text-lg font-semibold lg:block',
                                textColor
                            )}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {name}
                            <div
                                className={cn(
                                    'link-animation h-1 dark:bg-slate-800',
                                    fincloud ? 'bg-black' : 'bg-white'
                                )}
                                style={{ width: '0%' }}
                            ></div>
                        </a>
                    ) : type === 'router' ? (
                        <RouterLink
                            to={path}
                            className={cn(
                                'hidden cursor-pointer px-2 text-lg font-semibold lg:block',
                                textColor
                            )}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {name}
                            <div
                                className={cn(
                                    'link-animation h-1 dark:bg-slate-800',
                                    fincloud ? 'bg-black' : 'bg-white'
                                )}
                                style={{ width: '0%' }}
                            ></div>
                        </RouterLink>
                    ) : (
                        <ScrollLink
                            to={path}
                            smooth={true}
                            duration={500}
                            className={cn(
                                'hidden cursor-pointer px-2 text-lg font-semibold lg:block',
                                textColor
                            )}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {name}
                            <div
                                className={cn(
                                    'link-animation h-1 dark:bg-slate-800',
                                    fincloud ? 'bg-black' : 'bg-white'
                                )}
                                style={{ width: '0%' }}
                            ></div>
                        </ScrollLink>
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

export default NavbarList
