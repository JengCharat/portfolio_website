'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'About', href: '#about', current: false },
  { name: 'Skill', href: '#skill', current: false },
  { name: 'Project', href: '#myproject', current: false },
  { name: 'Certificate', href: '#certificate', current: false },
  { name: 'Contact', href: '#contact', current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['about', 'skill', 'certificate', 'myproject', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
        // Update navigation items
        navigation.forEach(item => {
          item.current = item.href === `#${currentSection}`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle click on nav items
  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)
    
    // Update navigation items
    navigation.forEach(item => {
      item.current = item.href === href
    })
  }

  return (
    <Disclosure as="nav" className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
        : 'bg-gray-900/80 backdrop-blur'
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <DisclosurePanel className="sm:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-md">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                'block rounded-lg px-3 py-2 text-base font-medium transition-all duration-200'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
