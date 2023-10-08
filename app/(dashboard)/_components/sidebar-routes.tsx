'use client'

import React from 'react'
import { Compass, Layout, LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

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

export default function SidebarRoutes() {
  const routes = guestRoutes

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

  const isActive =
    (pathname === '/' && route.href === '/') ||
    pathname.startsWith(`${route.href}/`) ||
    pathname === route.href

  return <div>SidebarItem</div>
}
