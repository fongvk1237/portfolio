import { skills } from '@/lib/data'
import { Icon } from '@/components/icons'

export function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-brand">02 / skills</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Tech stack</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Only tools I have used in the projects above.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-brand">
                  <Icon name={g.icon} className="size-4" />
                </span>
                <h3 className="text-sm font-medium">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <li key={item} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
