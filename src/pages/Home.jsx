import { Link } from 'react-router-dom'
import { profile, projects, contact } from '../data/profile.js'
import { ArrowRightIcon, GitHubIcon, LinkedInIcon, MapPinIcon } from '../components/Icons.jsx'

const highlights = [
  {
    to: '/projects',
    title: 'Projects',
    text: 'Analytics, data, and software work, with the tools behind each one.',
  },
  {
    to: '/skills',
    title: 'Skills',
    text: 'The technical skills and tools I use, and how proficient I am with each.',
  },
  {
    to: '/contact',
    title: 'Contact',
    text: 'Get in touch by email, LinkedIn, or GitHub.',
  },
]

export default function Home() {
  const featured = projects[0]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero_grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl sm:h-[36rem] sm:w-[36rem]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pt-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            {profile.headline}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m {profile.name}.
            <span className="mt-2 block bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text pb-2 text-transparent">
              {profile.valueProp}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">{profile.intro}</p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500">
            <MapPinIcon /> {profile.location}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-gold-300"
            >
              View my projects <ArrowRightIcon />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Get in touch
            </Link>
            <div className="flex justify-center gap-1 sm:ml-2">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-md p-3 text-slate-400 transition-colors hover:text-gold-400"
              >
                <LinkedInIcon width={22} height={22} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-md p-3 text-slate-400 transition-colors hover:text-gold-400"
              >
                <GitHubIcon width={22} height={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="explore_heading">
        <h2 id="explore_heading" className="mb-6 text-sm font-semibold uppercase tracking-widest text-gold-400">
          Explore
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <Link
              key={h.to}
              to={h.to}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-gold-500/60"
            >
              <h3 className="flex items-center justify-between text-lg font-semibold text-white">
                {h.title}
                <ArrowRightIcon className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-gold-400" />
              </h3>
              <p className="mt-2 text-slate-400">{h.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured project */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8" aria-labelledby="featured_heading">
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">Featured project</p>
            <h2 id="featured_heading" className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">{featured.description}</p>
            <Link
              to="/projects"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-400 hover:text-gold-300"
            >
              See all projects <ArrowRightIcon />
            </Link>
          </div>
          <img
            src={featured.image}
            alt={featured.imageAlt}
            loading="lazy"
            className="w-full rounded-lg border border-slate-800 shadow-2xl shadow-black/40"
          />
        </div>
      </section>
    </>
  )
}
