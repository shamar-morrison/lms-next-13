import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='flex justify-between'>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
