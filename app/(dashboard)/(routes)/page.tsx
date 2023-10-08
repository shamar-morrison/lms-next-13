import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='fex justify-between'>
      <p className='text-3xl text-sky-700 font-medium'>Protected Home</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
