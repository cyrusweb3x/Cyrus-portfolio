"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Check if at top
      setIsAtTop(currentScrollY < 50)
      
      // Show/hide based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling up or at top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false)
        setIsMobileMenuOpen(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    
    if (element) {
      const offset = 80 // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
              isAtTop ? "bg-transparent" : "bg-[#0A0A0F]/80 backdrop-blur-md border-b border-white/5"
            }`}
          >
            <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
              {/* Logo */}
              <Link 
                href="#" 
                onClick={(e) => {
                  e.preventDefault()
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className="group relative"
              >
                <span className="text-xl md:text-2xl font-bold tracking-tight">
                  <span className="text-white group-hover:text-purple-400 transition-colors">CW</span>
                  <span className="text-purple-400 group-hover:text-white transition-colors">3X</span>
                </span>
                {/* Glow effect on hover */}
                <div className="absolute -inset-2 bg-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative text-sm text-gray-400 hover:text-white transition-colors font-medium group"
                  >
                    {link.label}
                    {/* Underline effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-violet-400 group-hover:w-full transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  className="w-6 h-0.5 bg-white block origin-center"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                  className="w-6 h-0.5 bg-white block"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  className="w-6 h-0.5 bg-white block origin-center"
                />
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-[#0A0A0F]/95 backdrop-blur-lg border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-lg text-gray-300 hover:text-purple-400 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
