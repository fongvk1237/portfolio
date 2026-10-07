import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '@/lib/data'
import { FlowThumb } from '@/components/diagrams'
import { ContextBadge, StatusBadge } from '@/components/badges'
import { Icon } from '@/components/icons'

// Real screenshot when we have one; otherwise the icon flow of the project's main steps.
function Cover({ p }: { p: Project }) {
  const img = p.media?.find((m) => m.src === p.cover) ?? p.media?.find((m) => m.type === 'image')
  if (!img) return <FlowThumb project={p} />
  return (
    <div className="aspect-[16/8] overflow-hidden bg-muted">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        decoding="async"
        className="size-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  )
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-30px_var(--primary)]"
    >
      <div className="relative border-b border-border">
        <Cover p={p} />
        <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/90 opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={p.status} />
          <ContextBadge>{p.context}</ContextBadge>
          <span className="font-mono text-[11px] text-muted-foreground">{p.period}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.oneLiner}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3 border-y border-border py-4">
          {p.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="min-w-0">
              <dt className="text-2xl font-semibold tracking-tight text-foreground">{m.value}</dt>
              <dd className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{m.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
          {p.stack.slice(0, 6).map((s) => (
            <li key={s} className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              {s}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
          Read the case study <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}

function SmallCard({ p }: { p: Project }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/50"
    >
      {p.media?.[0] && (
        <div className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-2xl border-b border-border">
          <Cover p={p} />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-background text-brand">
          <Icon name={p.icon} className="size-5" />
        </span>
        <StatusBadge status={p.status} />
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.oneLiner}</p>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="text-lg font-semibold">{p.metrics[0].value}</span>
        <span className="text-xs text-muted-foreground">{p.metrics[0].label}</span>
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs text-brand">
        {p.context} · {p.period} <ArrowUpRight className="size-3" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-brand">01 / projects</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Selected work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Each card links to a short case study: the problem, what I built, the trade-offs, what broke and the
          result. Status labels say honestly whether something is in daily use, a pilot or a lab build.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <FeaturedCard key={p.slug} p={p} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-14 font-mono text-xs uppercase tracking-wider text-muted-foreground">More projects</h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {others.map((p) => (
                <SmallCard key={p.slug} p={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
