// Shared page-section wrapper with a consistent heading style.
export default function Section({ eyebrow, title, intro, children, className = '' }) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      {(eyebrow || title || intro) && (
        <header className="mb-10 max-w-2xl">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gold-400">{eyebrow}</p>
          )}
          {title && <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>}
          {intro && <p className="mt-4 text-lg leading-relaxed text-slate-400">{intro}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
