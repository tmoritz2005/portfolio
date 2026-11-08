import Section from '../components/Section.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/profile.js'

export default function Projects() {
  return (
    <Section
      eyebrow="Portfolio"
      title="Projects"
      intro="A selection of my work in analytics, data, and software. Each project lists the tools and technologies behind it."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}
