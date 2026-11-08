import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">404</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
      <p className="mt-4 text-slate-400">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-gold-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-gold-300"
      >
        Back to home
      </Link>
    </section>
  )
}
