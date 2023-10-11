'use client'

import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavbarRoutes() {
  const pathname = usePathname()

  const isTeacherPage = pathname.startsWith('/teacher')
  const isPlayerPage = pathname.includes('/chapter')

  return (
    <div className='flex gap-x-2 ml-auto'>
      {isTeacherPage || isPlayerPage ? (
        <Link href='/'>
          <Button size={'sm'} variant={'ghost'}>
            <LogOutIcon className='h-4 w-4 mr-2' />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href='/teacher/courses'>
          <Button size={'sm'} variant={'ghost'}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
