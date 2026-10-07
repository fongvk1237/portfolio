import { Download, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

const mailBody = 'Hi Warunyu,\n\nRole:\nTeam / company:\nThe problem to solve:\n'
const bare = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '')

export function SiteFooter() {
  const tiles = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedinIcon, label: 'LinkedIn', value: bare(profile.linkedin), href: profile.linkedin, external: true },
    ...(profile.github
      ? [{ icon: GithubIcon, label: 'GitHub', value: bare(profile.github), href: profile.github, external: true }]
      : []),
    { icon: Download, label: 'CV', value: 'Download PDF', href: profile.cv },
  ]

  return (
    <footer id="contact" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-brand">04 / contact</p>
        <h2 className="mt-2 max-w-3xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Let&apos;s talk about what you&apos;re building.
        </h2>
        <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          I&apos;m looking for AI platform, platform engineering and DevSecOps roles, or anything related.
          Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity for Warunyu')}&body=${encodeURIComponent(mailBody)}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" aria-hidden="true" />
            Email me
          </a>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => {
            const Icon = t.icon
            const Tag = (t.href ? 'a' : 'div') as 'a'
            return (
              <li key={t.label}>
                <Tag
                  href={t.href}
                  {...(t.href && t.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`flex h-full items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors ${
                    t.href ? 'hover:border-primary/50' : ''
                  }`}
                >
                  <Icon className="size-5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {t.label}
                    </span>
                    <span className="block break-all text-sm">{t.value}</span>
                  </span>
                </Tag>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
