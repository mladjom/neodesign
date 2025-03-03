import { Logo } from '@/components/common/Logo';
import { DesktopNav } from '@/components/core/Header/DesktopNav'
import { MobileNav } from '@/components/core/Header/MobileNav'

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <DesktopNav />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}