"use client"

import { useState } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      href: "/services#web-development",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that drive engagement",
      href: "/services#design",
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning and consulting for digital transformation",
      href: "/services#strategy",
    },
  ];

  const menuItems = [
    { title: 'Services', submenu: services },
    { title: 'Projects', href: '/projects' },
    { title: 'Blog', href: '/blog' },
    { title: 'About', href: '/about' },
  ];

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const ListItem = ({ className, title, children, ...props }: React.ComponentPropsWithoutRef<"a"> & { title: string }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 gap-2">
            <span className="text-xl font-bold">Neo<span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>Design</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {menuItems.slice(1).map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href || '#'} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

 {/* Mobile Navigation */}
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
                        onClick={() => setActiveSubmenu(null)}
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
        </div>
      </div>
    </header>
  );
};

export default Header;