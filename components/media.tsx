import type { MediaItem } from '@/lib/data'
import { mediaSizes } from '@/lib/media-sizes'

// Screenshots for a case study. Every file is redacted before it is added (names, IPs, MACs, emails).
// Layout keeps rows symmetric: very wide shots (logs, pipelines) take a full row at their natural height;
// everything else sits in pairs inside identical 16:10 frames (contained, never cropped, so evidence stays whole).
const WIDE = 2.2

function ratio(src: string) {
  const s = mediaSizes[src]
  return s ? s[0] / s[1] : 16 / 10
}

export function ProjectMedia({ items }: { items: MediaItem[] }) {
  if (items.length === 0) return null
  const normal = items.filter((m) => ratio(m.src) < WIDE)
  const lonely = normal.length % 2 === 1 ? normal[normal.length - 1].src : null

  return (
    <div className="grid grid-flow-row-dense gap-x-5 gap-y-8 sm:grid-cols-2">
      {items.map((m) => {
        const wide = ratio(m.src) >= WIDE || m.src === lonely
        const [w, h] = mediaSizes[m.src] ?? [1600, 1000]
        return (
          <figure key={m.src} className={`flex flex-col ${wide ? 'sm:col-span-2' : ''}`}>
            <a
              href={m.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open full size: ${m.alt}`}
              className={`group block overflow-hidden rounded-xl border border-border bg-[#0b0c10] transition-colors hover:border-primary/50 ${
                wide ? '' : 'aspect-[16/10] p-2'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.src}
                alt={m.alt}
                width={w}
                height={h}
                loading="lazy"
                decoding="async"
                className={wide ? 'h-auto w-full' : 'size-full object-contain'}
              />
            </a>
            <figcaption className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{m.alt}</figcaption>
          </figure>
        )
      })}
    </div>
  )
}
