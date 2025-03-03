import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 gap-2">
      <span className="text-xl font-bold">Neo<span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>Design</span></span>
    </Link>
  )
}