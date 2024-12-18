import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/contexts/ThemeProvider'
import { cn } from '@/lib/utils'

export default function ThemeSwitch({ fincloud }: { fincloud?: boolean }) {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    size='icon'
                    className={cn(
                        'h-11 w-11 border-slate-200 bg-transparent hover:bg-transparent dark:border-slate-800',
                        fincloud ? 'text-black' : 'text-white'
                    )}
                >
                    <Sun
                        className={cn(
                            'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all',
                            fincloud
                                ? 'text-black dark:text-black'
                                : 'text-white dark:-rotate-90 dark:scale-0 dark:text-slate-800'
                        )}
                    />
                    <Moon
                        className={cn(
                            'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all',
                            fincloud
                                ? 'text-black dark:rotate-0 dark:scale-100 dark:text-black'
                                : 'dark:rotate-0 dark:scale-100 dark:text-slate-800'
                        )}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
