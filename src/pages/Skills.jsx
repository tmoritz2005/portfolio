import Section from '../components/Section.jsx'
import SkillBar from '../components/SkillBar.jsx'
import { skillGroups, tools } from '../data/profile.js'

function Chips({ items, muted = false }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className={`rounded-full px-3 py-1.5 text-sm ring-1 ${
            muted
              ? 'bg-slate-800/60 text-slate-300 ring-slate-700'
              : 'bg-gold-400/10 text-gold-300 ring-gold-400/20'
          }`}
        >
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function Skills() {
  return (
    <Section
      eyebrow="Expertise"
      title="Skills"
      intro="The technical skills I bring to analytics and information management work, and the tools I am currently learning."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.category} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="mb-6 text-lg font-semibold text-white">{group.category}</h2>
            <div className="space-y-5">
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Tools I use</h2>
          <Chips items={tools.using} />
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="mb-4 text-lg font-semibold text-white">Currently learning</h2>
          <Chips items={tools.learning} muted />
        </div>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Proficiency scale: <span className="text-slate-300">Learning</span> → <span className="text-slate-300">Intermediate</span> →{' '}
        <span className="text-slate-300">Proficient</span> → <span className="text-slate-300">Advanced</span>
      </p>
    </Section>
  )
}
