import { contact, profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  const iconLink = 'rounded-md p-2 text-slate-400 transition-colors hover:text-gold-400'

  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          <a href={`mailto:${contact.email}`} className={iconLink} aria-label="Email">
            <MailIcon />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={iconLink} aria-label="GitHub">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}
