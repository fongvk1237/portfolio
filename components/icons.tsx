import {
  Activity, BellRing, Boxes, Bot, Brain, Bug, CircleCheck, Cloud, Cpu, Database, Eye, FileSpreadsheet,
  Gauge, GitBranch, HardDrive, House, Image, KeyRound, Layers, ListChecks, Lock, Mail, Network, Package,
  Radar, Rocket, Router, Scale, ScrollText, Server, ShieldCheck, Signature, Siren, Terminal, Timer, Users,
  Webhook, Workflow, type LucideIcon,
} from 'lucide-react'
import type { IconKey } from '@/lib/data'

const map: Record<IconKey, LucideIcon> = {
  bot: Bot, shield: ShieldCheck, git: GitBranch, server: Server, disk: HardDrive, network: Network,
  activity: Activity, workflow: Workflow, lock: Lock, check: CircleCheck, cpu: Cpu, database: Database,
  cloud: Cloud, radar: Radar, bell: BellRing, gauge: Gauge, boxes: Boxes, key: KeyRound, scroll: ScrollText,
  mail: Mail, sheet: FileSpreadsheet, timer: Timer, users: Users, webhook: Webhook, layers: Layers,
  signature: Signature, terminal: Terminal, eye: Eye, siren: Siren, home: House, image: Image, router: Router,
  list: ListChecks, brain: Brain, rocket: Rocket, package: Package, bug: Bug, scale: Scale,
}

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const C = map[name]
  return <C className={className} aria-hidden="true" />
}
