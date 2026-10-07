import type { Project } from '@/lib/data'

const statusStyle: Record<Project['status'], string> = {
  'In daily use': 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Pilot: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  Lab: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  Prototype: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  'Past project': 'border-border bg-muted text-muted-foreground',
}

export function StatusBadge({ status }: { status: Project['status'] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${statusStyle[status]}`}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  )
}

export function ContextBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  )
}
