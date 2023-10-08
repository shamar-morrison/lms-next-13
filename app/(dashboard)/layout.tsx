import SidebarRoutes from '@/app/(dashboard)/_components/sidebar-routes'
import Image from 'next/image'
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className='z-50 hidden md:flex h-full w-56 flex-col fixed inset-y-0'>
        <Sidebar />
      </div>
      {children}
    </div>
  )
}

function Sidebar() {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm'>
      <div className='p-6'>
        <Logo />
      </div>
      <div className='flex flex-col w-full'>
        <SidebarRoutes />
      </div>
    </div>
  )
}

function Logo() {
  return <Image src={'/next.svg'} height={130} width={130} alt='logo' />
}
