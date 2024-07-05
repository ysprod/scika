import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/Theme/ThemeToggle'
import Link from 'next/link'
import React from 'react'
import { LoginButton } from './auth/LoginButton'

export const Header = async () => {
  return (
    <header className='border-b border-b-accent'>
      <div className='container flex items-center py-2 max-w-lg m-auto gap-1'>
        <h2 className='text-2xl font-bold mr-auto mr-auto '><Link href="/">SCIKA</Link></h2>
        <LoginButton />
        <ThemeToggle></ThemeToggle>
      </div>
    </header>
  )
}
