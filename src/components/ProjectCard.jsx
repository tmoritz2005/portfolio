import { ExternalIcon, GitHubIcon } from './Icons.jsx'

export default function ProjectCard({ project }) {
  const { title, meta, description, tech, image, imageAlt, github, demo, placeholder } = project

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 transition hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-lg hover:shadow-gold-500/5">
      <div className="relative aspect-video overflow-hidden border-b border-slate-800 bg-slate-900">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
        />
        {placeholder && (
          <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
            Sample project
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {meta && <p className="mt-1 text-sm text-slate-500">{meta}</p>}
        <p className="mt-3 flex-1 leading-relaxed text-slate-400">{description}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t} className="rounded-full bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300 ring-1 ring-gold-400/20">
              {t}
            </li>
          ))}
        </ul>

        {(github || demo) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <GitHubIcon width={16} height={16} /> Code
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gold-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-gold-300"
              >
                Live demo <ExternalIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
