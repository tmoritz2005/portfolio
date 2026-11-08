export default function SkillBar({ name, level, label }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="text-sm text-gold-300">{label}</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-slate-800"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={label}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}
