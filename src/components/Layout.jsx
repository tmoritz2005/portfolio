import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

const titles = {
  '/': 'Theo Moritz | Portfolio',
  '/projects': 'Projects | Theo Moritz',
  '/skills': 'Skills | Theo Moritz',
  '/contact': 'Contact | Theo Moritz',
}

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll to top and update the tab title on every route change.
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Page Not Found | Theo Moritz'
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
