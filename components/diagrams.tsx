import { ArrowDown, ArrowRight, ChevronRight } from 'lucide-react'
import type { Diagram, DiagramNode, Project } from '@/lib/data'
import { Icon } from '@/components/icons'

// Card thumbnail: the project's main steps in one row, drawn with icons.
export function FlowThumb({ project }: { project: Project }) {
  return (
    <div
      className="relative flex aspect-[16/7] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--primary)_22%,transparent),_transparent_70%)] px-4"
      role="img"
      aria-label={`${project.title}: ${project.thumb.map((s) => s.label).join(', then ')}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:22px_22px]"
        aria-hidden="true"
      />
      <ol className="relative flex items-center gap-0.5 sm:gap-1.5">
        {project.thumb.map((s, i) => (
          <li key={s.label} className="flex items-center gap-0.5 sm:gap-1.5">
            {i > 0 && <ChevronRight className="size-3 shrink-0 text-muted-foreground/60 sm:size-4" aria-hidden="true" />}
            <span className="flex w-12 flex-col items-center gap-1.5 sm:w-[4.5rem]">
              <span
                className={`flex size-9 items-center justify-center rounded-xl border sm:size-14 sm:rounded-2xl ${
                  s.accent
                    ? 'border-primary/60 bg-primary/20 text-white shadow-[0_0_24px_-6px_var(--primary)]'
                    : 'border-border bg-card text-brand'
                }`}
              >
                <Icon name={s.icon} className="size-4 sm:size-6" />
              </span>
              <span className="text-center font-mono text-[10px] leading-tight text-muted-foreground sm:text-[11px]">{s.label}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Node({ node }: { node: DiagramNode }) {
  return (
    <div
      className={`flex min-w-0 flex-1 items-center gap-3 rounded-xl border px-3 py-2.5 ${
        node.accent ? 'border-primary/50 bg-primary/10' : 'border-border bg-background'
      }`}
    >
      <span
        className={`flex size-8 shrink-0 items-center justify-center rounded-lg ${
          node.accent ? 'bg-primary/25 text-white' : 'bg-muted text-brand'
        }`}
      >
        <Icon name={node.icon} className="size-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium leading-tight">{node.label}</span>
        {node.sub && <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">{node.sub}</span>}
      </span>
    </div>
  )
}

// Full architecture diagram for the case-study page.
export function FlowDiagram({ diagram }: { diagram: Diagram }) {
  return (
    <figure className="rounded-2xl border border-border bg-card/60 p-4 sm:p-6">
      <figcaption className="font-mono text-xs uppercase tracking-wider text-brand">{diagram.caption}</figcaption>
      <div className="mt-4 flex flex-col items-stretch">
        {diagram.rows.map((row, i) => (
          <div key={row.map((n) => n.label).join('|')}>
            {i > 0 && (
              <div className="flex justify-center py-1.5">
                <ArrowDown className="size-4 text-muted-foreground" aria-hidden="true" />
              </div>
            )}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
              {row.map((n, j) => (
                <div key={n.label} className="flex min-w-0 flex-1 items-center gap-2">
                  {j > 0 && <ArrowRight className="hidden size-4 shrink-0 text-muted-foreground sm:block" aria-hidden="true" />}
                  <Node node={n} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {diagram.note && <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{diagram.note}</p>}
    </figure>
  )
}
