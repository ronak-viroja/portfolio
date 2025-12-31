"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { navItems } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault()
      const id = href.replace("/#", "")
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        const startPosition = window.pageYOffset
        const distance = offsetPosition - startPosition
        const duration = 500
        let start: number | null = null

        const easeInOutCubic = (t: number): number => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        }

        const animation = (currentTime: number) => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const progress = Math.min(timeElapsed / duration, 1)
          const easedProgress = easeInOutCubic(progress)

          window.scrollTo(0, startPosition + distance * easedProgress)

          if (timeElapsed < duration) {
            requestAnimationFrame(animation)
          }
        }

        requestAnimationFrame(animation)
      }
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#0A1028]/95 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-[#0A1028]"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Left: Name/Logo */}
            <Link
              href="/"
              className="text-xl font-semibold text-white hover:text-white/80 transition-colors"
            >
              Ronak Viroja
            </Link>

            {/* Desktop Navigation - Simple Text Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#87CEEB] group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              ))}
              {/* Connect Link - Points to Footer */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/#footer"
                  onClick={(e) => handleNavClick(e, "/#footer")}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group"
                >
                  Connect
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#87CEEB] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-white/10 bg-[#0A1028]"
              >
                <div className="py-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href)
                          setIsMobileMenuOpen(false)
                        }}
                        className="block py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  {/* Connect Link - Points to Footer */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  >
                    <Link
                      href="/#footer"
                      onClick={(e) => {
                        handleNavClick(e, "/#footer")
                        setIsMobileMenuOpen(false)
                      }}
                      className="block py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                    >
                      Connect
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}
