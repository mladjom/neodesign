"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, ChevronRight } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '@/hooks/useNavigation'

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { menuItems, services, activeSubmenu, toggleSubmenu } = useNavigation()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col h-full">
          <AnimatePresence mode="wait">
            {activeSubmenu ? (
              <motion.div
                key={activeSubmenu}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full"
              >
                <button
                  onClick={() => toggleSubmenu(null)}
                  className="flex items-center p-4 text-sm font-medium border-b"
                >
                  <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
                  Back to main menu
                </button>
                <div className="flex-grow overflow-y-auto">
                  {services.map((service) => (
                    <SheetClose asChild key={service.title}>
                      <Link
                        href={service.href}
                        className="block p-4 text-sm hover:bg-accent"
                      >
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="mt-1 text-muted-foreground">{service.description}</p>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="main-menu"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col h-full"
              >
                <div className="flex-grow overflow-y-auto">
                  {menuItems.map((item) => (
                    <div key={item.title} className="border-b last:border-b-0">
                      {item.submenu ? (
                        <button
                          onClick={() => toggleSubmenu(item.title)}
                          className="flex items-center justify-between w-full p-4 text-sm font-medium hover:bg-accent"
                        >
                          {item.title}
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={item.href!}
                            className="block w-full p-4 text-sm font-medium hover:bg-accent"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t mt-auto">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </SheetClose>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </SheetContent>
    </Sheet>
  )
}