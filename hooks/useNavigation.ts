import { useState } from 'react'
import { navigation } from '@/config/navigation'

export const useNavigation = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string | null) => {
    setActiveSubmenu(title)
  }

  return {
    menuItems: navigation.menuItems,
    services: navigation.services,
    activeSubmenu,
    toggleSubmenu,
  }
}