import Image from 'next/image'
import { ArrowDown, Download, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Icon } from '@/components/icons'
import { pillars, profile } from '@/lib/data'

export function HeroSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
      <div
        className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className={profile.photo ? 'grid items-center gap-10 md:grid-cols-[1fr_auto]' : ''}>
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <span className="inline-block size-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
            {profile.status}
          </div>

          <p className="animate-fade-up mt-8 font-mono text-sm text-brand [animation-delay:80ms]">{profile.role}</p>
          <h1 className="animate-fade-up mt-3 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight [animation-delay:140ms] sm:text-6xl md:text-7xl">
            {profile.greeting}
          </h1>
          <div className="animate-fade-up mt-6 max-w-3xl [animation-delay:200ms] md:text-lg">
            <p className="font-medium text-foreground">{profile.summaryLead}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {profile.summaryLines.map((line) => (
                <span key={line} className="lg:block lg:whitespace-nowrap">
                  {line}{' '}
                </span>
              ))}
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" /> {profile.location}
            </p>
          </div>

          <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              See my work <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
            >
              <Download className="size-4" aria-hidden="true" /> Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary/50"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary/50"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>
        </div>
        {profile.photo && (
          <div className="animate-fade-up size-44 shrink-0 overflow-hidden rounded-full border border-border bg-white md:size-56">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={448}
              height={448}
              priority
              className="size-full origin-top scale-[1.2] object-cover object-top"
            />
          </div>
        )}
      </div>

      <ul className="animate-fade-up mt-12 grid gap-4 [animation-delay:280ms] md:grid-cols-3">
        {pillars.map((p) => (
          <li key={p.title} className="flex gap-3 rounded-2xl border border-border bg-card/40 p-5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-brand">
              <Icon name={p.icon} className="size-5" />
            </span>
            <span>
              <h2 className="text-sm font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </span>
          </li>
        ))}
      </ul>

    </section>
  )
}
