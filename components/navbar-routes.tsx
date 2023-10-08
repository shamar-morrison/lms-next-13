'use client'

import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Link, LogOutIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function NavbarRoutes() {
  const pathname = usePathname()
  const router = useRouter()

  const isTeacherPage = pathname.startsWith('/teacher')
  const isPlayerPage = pathname.includes('/chapter')

  return (
    <div className='flex gap-x-2 ml-auto'>
      {isTeacherPage || isPlayerPage ? (
        <Button>
          <LogOutIcon className='h-4 w-4 mr-2' />
          Exit
        </Button>
      ) : (
        <Link href='/teacher/courses'>
          <Button>Teacher Mode</Button>
        </Link>
      )}
      <UserButton />
    </div>
  )
}
