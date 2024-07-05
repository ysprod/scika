import { buttonVariants } from '@/components/ui/button'
import clsx from 'clsx'
import { Home, PenSquare, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div className='flex py-2 justify-between container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-accent'>
            <Link href="/" className={clsx(buttonVariants({ variant: 'ghost' }), 'flex-1')}>
                <Home size={20} className=''></Home>
            </Link>
            <Link href="/write" className={clsx(buttonVariants({ variant: 'ghost' }), 'flex-1')}>
                <PenSquare size={20} className=''></PenSquare>
            </Link>
            <Link href="/profile" className={clsx(buttonVariants({ variant: 'ghost' }), 'flex-1')}>
                <User size={20} className=''></User>
            </Link>
        </div>
    )
}
