import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { education, experience, languages, training } from '@/lib/data'

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-brand">03 / experience</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Experience &amp; education</h2>

        {experience.map((item) => (
          <div key={item.org} className="mt-10">
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="text-xl font-semibold">{item.org}</h3>
              <span className="font-mono text-sm text-muted-foreground">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {item.workstreams.map((w) => (
                <article key={w.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                  <h4 className="text-lg font-semibold leading-snug tracking-tight">{w.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.summary}</p>

                  <dl className="mt-5 grid grid-cols-3 gap-3">
                    {w.metrics.map((m) => (
                      <div key={m.label} className="rounded-xl border border-border bg-background/60 px-3 py-3">
                        <dt className="text-2xl font-semibold tracking-tight">{m.value}</dt>
                        <dd className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-5 flex-1 space-y-3">
                    {w.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                        <span className="text-foreground/90">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-4 border-t border-border pt-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {w.stack.map((s) => (
                        <li key={s} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link href={w.href} className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline">
                      Case study <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand">Education</p>
            <h3 className="mt-3 font-semibold">{education.school}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{education.degree}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
              <span>{education.period}</span>
              <span>{education.gpa}</span>
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-brand">Training &amp; languages</p>
            <ul className="mt-3 space-y-3">
              {training.map((t) => (
                <li key={t.title}>
                  <p className="text-sm font-medium">{t.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{t.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">{languages}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
