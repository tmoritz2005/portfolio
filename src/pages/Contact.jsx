import Section from '../components/Section.jsx'
import { contact, profile } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/Icons.jsx'

const methods = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
    href: contact.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: contact.github.replace(/^https?:\/\//, ''),
    href: contact.github,
    Icon: GitHubIcon,
    external: true,
  },
]

export default function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's connect"
      intro="Whether you have an opportunity, a project, or just want to talk analytics, I'd love to hear from you."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {methods.map(({ label, value, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-gold-500/60"
          >
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
              <Icon width={24} height={24} />
            </span>
            <span>
              <span className="block text-sm font-semibold uppercase tracking-wider text-slate-500">{label}</span>
              <span className="mt-1 block break-all font-medium text-slate-200 group-hover:text-gold-400">{value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-gold-400/20 bg-gold-400/5 p-6">
        <p className="text-slate-300">
          <span className="font-semibold text-gold-300">Currently: </span>
          {profile.availability}
        </p>
      </div>
    </Section>
  )
}
