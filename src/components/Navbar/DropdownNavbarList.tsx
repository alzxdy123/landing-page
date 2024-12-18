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
    setNavToggle: React.Dispatch<React.SetStateAction<boolean>>
    textColor: string
}

const DropdownNavbarList: React.FC<NavbarListProps> = ({
    items,
    setNavToggle,
    textColor,
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
                                'cursor-pointer p-5 text-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-700'
                            )}
                            onClick={() => setNavToggle(false)}
                        >
                            {name}
                        </a>
                    ) : type === 'router' ? (
                        <RouterLink
                            to={path}
                            onClick={() => setNavToggle(false)}
                            className={cn(
                                'cursor-pointer p-5 text-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-700'
                            )}
                        >
                            {name}
                        </RouterLink>
                    ) : (
                        <ScrollLink
                            to={path}
                            smooth
                            duration={500}
                            onClick={() => setNavToggle(false)}
                            className={cn(
                                'cursor-pointer p-5 text-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-700'
                            )}
                        >
                            {name}
                        </ScrollLink>
                    )}
                </React.Fragment>
            ))}
        </>
    )
}

export default DropdownNavbarList
