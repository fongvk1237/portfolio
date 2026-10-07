import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CircleAlert, GitBranch, Images, Lightbulb, Target, Trophy } from 'lucide-react'
import { projects } from '@/lib/data'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FlowDiagram } from '@/components/diagrams'
import { ContextBadge, StatusBadge } from '@/components/badges'
import { Icon } from '@/components/icons'
import { ProjectMedia } from '@/components/media'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.oneLiner,
    alternates: { canonical: `/projects/${slug}` },
  }
}

function SectionTitle({ icon: I, children }: { icon: typeof Target; children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand">
      <I className="size-4" aria-hidden="true" />
      {children}
    </h2>
  )
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()
  const p = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-4xl px-6 py-14">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> All projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          <StatusBadge status={p.status} />
          <ContextBadge>{p.context}</ContextBadge>
          <ContextBadge>{p.period}</ContextBadge>
          <ContextBadge>{p.role}</ContextBadge>
        </div>
        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">{p.title}</h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{p.oneLiner}</p>

        <dl className={`mt-8 grid gap-3 grid-cols-2 ${p.metrics.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          {p.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-border bg-card p-4">
              <dt className="text-3xl font-semibold tracking-tight">{m.value}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</dd>
            </div>
          ))}
        </dl>

        {p.redacted && (
          <p className="mt-6 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            Employer work. Internal names, hostnames, addresses and configuration are left out; figures are real.
          </p>
        )}

        <section className="mt-12">
          <SectionTitle icon={Target}>The problem</SectionTitle>
          <p className="mt-3 text-pretty leading-relaxed">{p.problem}</p>
        </section>

        <section className="mt-10">
          <FlowDiagram diagram={p.diagram} />
        </section>

        {p.media && p.media.length > 0 && (
          <section className="mt-12">
            <SectionTitle icon={Images}>Screenshots</SectionTitle>
            <div className="mt-4">
              <ProjectMedia items={p.media} />
            </div>
          </section>
        )}

        <section className="mt-12">
          <SectionTitle icon={GitBranch}>What I built</SectionTitle>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 sm:[&>li:last-child:nth-child(odd)]:col-span-2">
            {p.built.map((b) => (
              <li key={b.title} className="rounded-2xl border border-border bg-card p-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-brand">
                  <Icon name={b.icon} className="size-5" />
                </span>
                <h3 className="mt-3 font-medium">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {p.decisions.length > 0 && (
          <section className="mt-12">
            <SectionTitle icon={Lightbulb}>Key decisions</SectionTitle>
            <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
              {p.decisions.map((d) => (
                <li key={d.choice} className="grid gap-1 p-5 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-6">
                  <p className="font-medium">{d.choice}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{d.why}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {p.incidents.length > 0 && (
          <section className="mt-12">
            <SectionTitle icon={CircleAlert}>{p.incidentsTitle ?? 'What broke and how I fixed it'}</SectionTitle>
            <ul className="mt-4 space-y-3">
              {p.incidents.map((x) => (
                <li key={x.title} className="rounded-2xl border border-border border-l-2 border-l-primary bg-card p-5">
                  <h3 className="font-medium">{x.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12">
          <SectionTitle icon={Trophy}>Result</SectionTitle>
          <ul className="mt-4 space-y-2">
            {p.results.map((r) => (
              <li key={r} className="flex gap-3 leading-relaxed">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-pretty">{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-mono text-xs uppercase tracking-wider text-brand">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-primary/50"
            >
              View the code on GitHub <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          )}
        </section>

        <Link
          href={`/projects/${next.slug}`}
          className="mt-16 flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
        >
          <span>
            <span className="block text-xs text-muted-foreground">Next project</span>
            <span className="mt-1 block font-medium">{next.title}</span>
          </span>
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
