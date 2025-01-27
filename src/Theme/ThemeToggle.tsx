'use client';
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import React from 'react'
import { Moon, SunMedium } from 'lucide-react'

export const ThemeToggle = () => {
    const { setTheme, theme } = useTheme()
    return (
        <Button size="sm" variant="ghost" onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
        }}>
            <SunMedium size={20} className='rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0'></SunMedium>
            <Moon size={20} className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'></Moon>
        </Button>
    )
}
