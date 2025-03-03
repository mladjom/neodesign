import { useState } from 'react'
import { navigation } from '@/config/navigation'

export const useNavigation = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (title: string | null) => {
    setActiveSubmenu(title)
  }

  return {
    // Existing properties
    menuItems: navigation.menuItems,
    services: navigation.services,
    activeSubmenu,
    toggleSubmenu,
    
    companyLinks: navigation.company,
    legalLinks: navigation.legal,
  }
}