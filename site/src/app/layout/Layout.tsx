import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '@/@runlytics.core/components/ScrollToTop'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-navy-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
