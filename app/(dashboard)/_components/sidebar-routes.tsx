'use client'

import React from 'react'
import { BarChart, Compass, Layout, List, LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

type Route = {
  href: string
  label: string
  icon: LucideIcon
}

const guestRoutes: Route[] = [
  {
    href: '/',
    label: 'Dashboard',
    icon: Layout,
  },
  {
    href: '/search',
    label: 'Browse',
    icon: Compass,
  },
]

const teacherRoutes: Route[] = [
  {
    href: '/teacher/courses',
    label: 'Courses',
    icon: List,
  },
  {
    href: '/teacher/analytics',
    label: 'Analytics',
    icon: BarChart,
  },
]

export default function SidebarRoutes() {
  const pathname = usePathname()
  const isTeacherPage = pathname.includes('/teacher')
  const routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className='flex flex-col w-full'>
      {routes.map((route) => (
        <SidebarItem key={route.href} route={route} />
      ))}
    </div>
  )
}

function SidebarItem({ route }: { route: Route }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => router.push(route.href)

  const isActive =
    (pathname === '/' && route.href === '/') ||
    pathname === route.href ||
    pathname.startsWith(`${route.href}/`)

  return (
    <button
      onClick={handleClick}
      type='button'
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
        isActive &&
          'text-sky-700 hover:bg-sky-200/20 bg-sky-200/20 hover:text-sky-700',
      )}>
      <div className='flex items-center gap-x-2 py-4'>
        <route.icon
          size={22}
          className={cn('text-slate-500', isActive && 'text-sky-700')}
        />
        {route.label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-sky-700 h-full',
          isActive && 'opacity-100',
        )}
      />
    </button>
  )
}
