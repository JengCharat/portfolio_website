'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type NavigationItem = {
  name: string
  href: string
  current: boolean
}

const navigation: NavigationItem[] = [
  { name: 'About', href: '#about', current: false },
  { name: 'Skill', href: '#skill', current: false },
  { name: 'Project', href: '#myproject', current: false },
  { name: 'Certificate', href: '#certificate', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  const router = useRouter()
  const pathname = usePathname()
  const isEN = pathname.startsWith('/en')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['about', 'skill', 'myproject', 'certificate', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
        navigation.forEach(item => {
          item.current = item.href === `#${currentSection}`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    setActiveSection(sectionId)

    navigation.forEach(item => {
      item.current = item.href === href
    })
  }

  const handleSwitchLanguage = () => {
    const hash = window.location.hash || ''
    router.push(isEN ? `/${hash}` : `/en${hash}`)
  }

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
          : 'bg-gray-900/80 backdrop-blur'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              PORTFOLIO
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex space-x-1">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                    'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Language Switch */}
            <button
              onClick={handleSwitchLanguage}
              className={classNames(
                'relative flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-semibold transition-all duration-200',
                isEN
                  ? 'bg-gradient-to-r from-red-500 to-rose-400 text-white ring-2 ring-red-400'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-400 text-black ring-2 ring-cyan-400',
                'hover:scale-105 active:scale-95'
              )}
            >
              {isEN ? 'TH' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-800 hover:text-white">
              <Bars3Icon className="block size-6 group-data-open:hidden" />
              <XMarkIcon className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <DisclosurePanel className="sm:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-md">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map(item => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={classNames(
                item.current
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                'block rounded-lg px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}

          {/* Mobile Language Switch */}
          <div className="border-t border-gray-800 pt-2 mt-2">
            <button
              onClick={handleSwitchLanguage}
              className="block w-full rounded-lg px-3 py-2 text-left text-base font-medium
                         text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              {isEN ? 'ภาษาไทย' : 'English'}
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
