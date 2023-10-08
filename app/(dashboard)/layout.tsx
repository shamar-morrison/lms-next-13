import SidebarRoutes from '@/app/(dashboard)/_components/sidebar-routes'
import NavbarRoutes from '@/components/navbar-routes'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full'>
      <div className='h-[80px] md:pl-56 fixed inset-y-0 w-full z-50'>
        <Navbar />
      </div>
      <div className='z-50 hidden md:flex h-full w-56 flex-col fixed inset-y-0'>
        <Sidebar />
      </div>
      <main className='md:pl-56 h-full'>{children}</main>
    </div>
  )
}

function Navbar() {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={'left'} className='p-0 bg-white'>
        <Sidebar />
      </SheetContent>
    </Sheet>
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
