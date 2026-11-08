import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MenuIcon } from './Icons.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive ? 'text-gold-400' : 'text-slate-300 hover:text-white'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
        <Link to="/" onClick={close} className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gold-400 text-sm font-extrabold text-slate-950">
            TM
          </span>
          Theo Moritz
        </Link>

        {/* Desktop / tablet links */}
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.end} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:text-white sm:hidden"
          aria-expanded={open}
          aria-controls="mobile_menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      {open && (
        <ul id="mobile_menu" className="space-y-1 border-t border-slate-800 px-4 pb-4 pt-2 sm:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                onClick={close}
                className={({ isActive }) => `block ${linkClass({ isActive })} text-base`}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
