import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import logo from '@/assets/images/logos/runlytics-logo.jpg'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 shadow-lg shadow-black/20 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <a
          href="#"
          onClick={e => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Run-lytics" className="h-10 w-auto rounded md:h-12" />
          <span className="hidden text-lg font-bold text-white sm:inline">Run-lytics</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="rounded-lg bg-gradient-to-r from-runlytics-blue to-runlytics-blue-light px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <IconButton
          className="md:hidden"
          sx={{ display: { md: 'none' }, color: 'white' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/10 bg-navy-900/98 backdrop-blur-md md:hidden"
        >
          <div className="section-container flex flex-col gap-4 py-6">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-base font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 rounded-lg bg-gradient-to-r from-runlytics-blue to-runlytics-blue-light px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
