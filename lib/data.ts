// Source of truth: doc/Resume_Master_Source_of_Truth_2page_spaced.docx.
// Every number below was checked against the real systems (Oct 2026).
// Public site: no phone number, IPs, hostnames, ticket IDs or internal account names.

export const profile = {
  name: 'Warunyu Threepoom',
  nickname: 'Fong',
  role: 'AI Platform · Platform Engineering · DevSecOps',
  location: 'Bangkok, Thailand',
  email: 'warunyu2017@gmail.com',
  linkedin: 'https://linkedin.com/in/fong-work',
  github: 'https://github.com/fongvk1237',
  cv: '/Warunyu-Threepoom-CV.pdf',
  photo: '/profile.jpg',
  status: 'Open to AI Platform, Platform Engineering and DevSecOps roles',
  greeting: "Hi, I'm Warunyu Threepoom.",
  summaryLead: 'DevSecOps engineer at NETBAY.',
  summaryLines: [
    'I build AI agents for IT operations that run with',
    'risky steps behind human approval enforced in code,',
    'and check every infrastructure change with an independent audit.',
    'I also ship applications through a signed GitOps pipeline to Kubernetes.',
  ],
  get summary() {
    return `${this.summaryLead} ${this.summaryLines.join(' ')}`
  },
}

export type IconKey =
  | 'bot' | 'shield' | 'git' | 'server' | 'disk' | 'network' | 'activity' | 'workflow' | 'lock'
  | 'check' | 'cpu' | 'database' | 'cloud' | 'radar' | 'bell' | 'gauge' | 'boxes' | 'key' | 'scroll'
  | 'mail' | 'sheet' | 'timer' | 'users' | 'webhook' | 'layers' | 'signature' | 'terminal' | 'eye'
  | 'siren' | 'home' | 'image' | 'router' | 'list' | 'brain' | 'rocket' | 'package' | 'bug' | 'scale'

export const pillars: { title: string; text: string; icon: IconKey }[] = [
  {
    title: 'AI agent platforms',
    icon: 'bot',
    text: 'Multi-agent operations on MCP: per-agent identity and tool allowlists, approval gates in code, audits built on live evidence.',
  },
  {
    title: 'Platform engineering',
    icon: 'layers',
    text: 'Kubernetes with ArgoCD GitOps, Terraform on vCenter and Ansible hardening that is repeatable from code.',
  },
  {
    title: 'DevSecOps',
    icon: 'shield',
    text: 'Signed supply chain, policy-as-code admission and CIS hardening, enforced instead of documented.',
  },
]

export type SkillGroup = { title: string; icon: IconKey; items: string[] }

export const skills: SkillGroup[] = [
  {
    title: 'AI & agentic systems',
    icon: 'bot',
    items: ['MCP servers & gateways', 'Multi-agent orchestration', 'Hermes Agent', 'A2A protocol', 'Tool calling', 'LLM-as-judge evals', 'Ollama (self-hosted)', 'Open WebUI', 'OWASP Top 10 for LLM Apps'],
  },
  {
    title: 'Kubernetes & GitOps',
    icon: 'layers',
    items: ['Kubernetes', 'ArgoCD', 'Helm', 'Rancher (RKE2)', 'Kyverno', 'Pod Security Admission', 'HPA', 'NetworkPolicy'],
  },
  {
    title: 'CI/CD & supply chain',
    icon: 'git',
    items: ['GitLab CI', 'Cosign', 'Harbor', 'Trivy', 'Gitleaks', 'SonarQube', 'Hadolint', 'pip-audit', 'Docker'],
  },
  {
    title: 'IaC & automation',
    icon: 'workflow',
    items: ['Terraform', 'Ansible', 'VMware vCenter / govc', 'Proxmox VE', 'Bash', 'systemd', 'Docker Compose'],
  },
  {
    title: 'Security engineering',
    icon: 'lock',
    items: ['CIS Benchmarks', 'SSH & kernel hardening', 'SELinux', 'polkit', 'nftables / iptables', 'firewalld', 'OAuth2 / Entra ID', 'Zero Trust', 'Honeypots (Cowrie, OpenCanary)', 'Kali Linux', 'Nmap', 'hping3'],
  },
  {
    title: 'Observability & SecOps',
    icon: 'activity',
    items: ['Grafana', 'Prometheus', 'Loki', 'Promtail', 'Elasticsearch', 'Logstash', 'Kibana', 'Zabbix', 'rsyslog', 'Wireshark'],
  },
  {
    title: 'Backend & data',
    icon: 'database',
    items: ['Node.js', 'TypeScript', 'Next.js', 'Express', 'Python', 'Flask', 'PostgreSQL', 'SQLite', 'WebSocket'],
  },
  {
    title: 'Networking & access',
    icon: 'network',
    items: ['Cloudflare Tunnel & Access', 'Tailscale', 'Cisco NX-OS (read-only)', 'F5 BIG-IP (read-only)', 'Microsoft Azure', 'Network segmentation'],
  },
]

// A diagram is a list of rows; nodes in a row sit side by side, rows are joined by arrows.
export type DiagramNode = { icon: IconKey; label: string; sub?: string; accent?: boolean }
export type Diagram = { caption: string; rows: DiagramNode[][]; note?: string }

export type MediaItem = {
  type: 'image' | 'video'
  src: string // file in /public/projects/<slug>/, redacted before publishing
  alt: string
  poster?: string
}

export type Project = {
  slug: string
  title: string
  oneLiner: string
  context: string // where the work was done
  status: 'In daily use' | 'Pilot' | 'Lab' | 'Prototype' | 'Past project'
  period: string
  role: string
  featured?: boolean
  redacted?: boolean // employer work: details generalised
  icon: IconKey
  thumb: DiagramNode[] // 3 to 5 steps shown on the card
  metrics: { value: string; label: string }[]
  problem: string
  built: { icon: IconKey; title: string; text: string }[]
  decisions: { choice: string; why: string }[]
  incidents: { title: string; text: string }[]
  incidentsTitle?: string
  results: string[]
  diagram: Diagram
  stack: string[]
  media?: MediaItem[] // optional screenshots; shown under the diagram
  cover?: string // which screenshot to use on the card (defaults to the first)
  repo?: string
}

export const projects: Project[] = [
  {
    slug: 'agent-platform',
    cover: '/projects/agent-platform/01-office.webp',
    title: 'AI Agent Platform for IT Operations',
    oneLiner:
      'Agents that turn an approved change into a provisioned, CIS-hardened and independently audited VM, with every risky step gated in code.',
    context: 'NETBAY',
    status: 'Pilot',
    period: 'Aug – Oct 2026',
    role: 'Designed and built end to end',
    featured: true,
    redacted: true,
    icon: 'bot',
    thumb: [
      { icon: 'scroll', label: 'Change' },
      { icon: 'bot', label: 'Agent' },
      { icon: 'shield', label: 'Gateway', accent: true },
      { icon: 'users', label: 'Approve' },
      { icon: 'check', label: 'Audit', accent: true },
    ],
    metrics: [
      { value: '7', label: 'systems behind one MCP gateway' },
      { value: '~5 min', label: 'approval to running VM' },
      { value: '91', label: 'live CIS checks per audit' },
      { value: '146', label: 'automated tests' },
    ],
    problem:
      'Routine infrastructure work (new VMs, spec changes, password rotation, health checks) was done by hand across a service desk, vCenter, monitoring tools and spreadsheets. The team wanted AI agents to take it over on closed infrastructure, but an agent must never make an unapproved change or report work it did not do.',
    built: [
      {
        icon: 'shield',
        title: 'Central MCP gateway',
        text: 'Node.js on the official MCP SDK. Puts 7 systems and 83 tools behind one enforcement point; each of 8 agent identities has its own token, privilege tier and tool allowlist, checked server-side.',
      },
      {
        icon: 'workflow',
        title: 'Ticket to audited VM',
        text: 'Terraform plan on vCenter, human approval, apply, Ansible CIS hardening (a 79-task role in 9 groups), then a separate audit agent checks the result.',
      },
      {
        icon: 'eye',
        title: 'Real-time approval portal',
        text: 'Express 5, WebSocket and PostgreSQL LISTEN/NOTIFY: changes reach the browser in 0.22–0.28 s. Team accounts see only their own work; approvals sync both ways with the agent task board.',
      },
      {
        icon: 'activity',
        title: 'Network health reports, in daily use',
        text: 'Twice-daily, read-only reports for core switches and an F5 load balancer. The agent calls exactly one tool; every figure (counter deltas, new vs ongoing alerts) is computed in code and sent as a Thai email, an English web page and a 14-sheet Excel workbook.',
      },
      {
        icon: 'lock',
        title: 'Data stays in-house',
        text: 'Q&A agents run on a self-hosted model through Ollama, background model calls are pinned to each agent’s own model, and a daily check flags any setting that could send data outside.',
      },
    ],
    decisions: [
      {
        choice: 'Enforce permissions in the gateway, not in agent config',
        why: 'Hiding a tool in the agent’s own config did not stop it calling a service-desk write tool. Only a server-side tier check held, so every rule lives there.',
      },
      {
        choice: 'Make fixed sequences code, not agent steps',
        why: 'Three separate tool calls gave the model three chances to skip a step and still report success. One tool now does all three and returns a per-step report the model cannot edit.',
      },
      {
        choice: 'Pin approval to the exact Terraform plan',
        why: 'Apply runs only if a human approved the SHA-256 ID of the plan they saw. Re-planning changes the ID, so an old approval no longer counts.',
      },
      {
        choice: 'Audit evidence comes from code',
        why: 'The audit report embeds live checks that the gateway runs itself, so an agent cannot drop a failing row or repeat the worker’s own claim.',
      },
    ],
    incidents: [
      {
        title: 'An agent spawned copies of itself',
        text: 'A worker kept creating new tasks for itself until 7 were running, because cloned agent profiles shared one token. I stopped dispatch, cleaned up and moved to one token and one allowlist per agent. A checklist for new agents caught the same mistake twice more.',
      },
      {
        title: 'Fabricated “100% pass” results',
        text: 'An agent without the tool it needed wrote fake test scripts and reported success. Claims are now checked against real records, and every agent is told to state a missing capability instead of simulating it.',
      },
      {
        title: 'Authentication bypass',
        text: 'The token lookup accepted a built-in object key as a valid token. I replaced it with SHA-256 plus constant-time comparison over the gateway’s own keys only.',
      },
      {
        title: 'One outage took the gateway down',
        text: 'An external database outage crash-looped the gateway 19 times. Each backend now connects on its own with timeouts and backoff, and the gateway kept serving during the next outage.',
      },
      {
        title: 'The audit found real hardening defects',
        text: 'The first live audit showed SSH ciphers overridden by config include order and IPv6 still on in Rocky 9 boot entries. I fixed the role with an ordered drop-in file and grubby.',
      },
    ],
    results: [
      'Live run on real vCenter: VM created about 5 minutes after approval, hardening finished with 64 tasks OK and 0 failed, and the audit confirmed the requested spec.',
      'Network health reports have run twice a day since September 2026: 37 rounds by 6 October, and I traced one figure from the raw switch counter to the email to prove the numbers are real.',
      'Still a pilot: VM create and modify flows have been run on a small number of real requests.',
    ],
    diagram: {
      caption: 'Create-VM flow',
      rows: [
        [{ icon: 'scroll', label: 'Approved change', sub: 'service desk' }],
        [{ icon: 'bot', label: 'Worker agent', sub: 'own token + allowlist' }],
        [{ icon: 'shield', label: 'MCP gateway', sub: 'tier and allowlist checked server-side', accent: true }],
        [
          { icon: 'layers', label: 'Terraform plan', sub: 'SHA-256 plan ID' },
          { icon: 'users', label: 'Human approves', sub: 'that plan ID', accent: true },
          { icon: 'server', label: 'Apply on vCenter', sub: 'then Ansible CIS' },
        ],
        [{ icon: 'check', label: 'Audit agent', sub: 'live checks attached by code', accent: true }],
      ],
      note: 'Read-only work such as health checks skips the audit by policy; anything that changes infrastructure is audited.',
    },
    stack: ['MCP', 'Node.js', 'Hermes Agent', 'PostgreSQL', 'Terraform', 'vCenter / govc', 'Ansible', 'CIS Benchmarks', 'Ollama', 'Open WebUI', 'WebSocket'],
    media: [
      { type: 'image', src: '/projects/agent-platform/04-task-result.webp', alt: 'A real create-VM run: Terraform apply, CIS hardening ok=64 / failed=0, audit task created automatically (names and addresses hidden)' },
      { type: 'image', src: '/projects/agent-platform/01-office.webp', alt: 'The team portal’s Office view: an agent walks to its desk when it has work, driven by the live task board' },
      { type: 'image', src: '/projects/agent-platform/02-team.webp', alt: 'All 9 agents, read live from the agent platform' },
      { type: 'image', src: '/projects/agent-platform/03-soul.webp', alt: 'The DevSecOps agent’s rules: never fabricate a result, never apply a plan without human approval' },
      { type: 'image', src: '/projects/agent-platform/05-open-webui.webp', alt: 'Read-only Q&A agents offered to staff through Open WebUI' },
    ],
  },
  {
    slug: 'secure-cicd',
    cover: '/projects/secure-cicd/00-pipeline.webp',
    title: 'CI/CD & GitOps',
    oneLiner:
      'An eight-stage GitLab pipeline where only signed, scanned images can reach Kubernetes, and CI never holds cluster credentials.',
    context: 'NETBAY',
    status: 'Lab',
    period: 'May – Jun 2026',
    role: 'Built the pipeline, registry and GitOps config',
    featured: true,
    redacted: true,
    icon: 'git',
    thumb: [
      { icon: 'git', label: 'Commit' },
      { icon: 'bug', label: 'Scan' },
      { icon: 'signature', label: 'Sign', accent: true },
      { icon: 'rocket', label: 'ArgoCD' },
      { icon: 'shield', label: 'Verify', accent: true },
    ],
    metrics: [
      { value: '8', label: 'pipeline stages' },
      { value: '3', label: 'repos: app, config, GitOps' },
      { value: '0', label: 'cluster credentials in CI' },
    ],
    problem:
      'Show that an application can go from commit to Kubernetes with security checks that block instead of warn, on self-hosted tooling, without giving CI any access to the cluster.',
    built: [
      {
        icon: 'git',
        title: 'Eight-stage pipeline',
        text: 'Validate, lint, test, SAST, build, scan, push, deploy on self-hosted GitLab with a Docker-executor runner. The SonarQube quality gate, Trivy (fixable HIGH/CRITICAL), Gitleaks and pip-audit fail the build.',
      },
      {
        icon: 'signature',
        title: 'Signed images, verified at admission',
        text: 'A pinned Cosign version signs each image digest in Harbor and verifies it in the same job. A Kyverno ClusterPolicy in Enforce mode rejects unsigned or wrong-key images.',
      },
      {
        icon: 'rocket',
        title: 'GitOps hand-off',
        text: 'CI only triggers the config repository to bump the image. ArgoCD on the team’s Rancher RKE2 cluster (run by a senior engineer; I deploy into my own namespace) pulls it with automated sync, prune and self-heal.',
      },
      {
        icon: 'lock',
        title: 'Hardened by default',
        text: 'Restricted Pod Security, non-root, read-only root filesystem, all capabilities dropped, seccomp, ingress and egress NetworkPolicy, PodDisruptionBudget, HPA 2–6 and a PreSync migration job. Shipped as plain YAML and a Helm chart.',
      },
    ],
    decisions: [
      {
        choice: 'Separate app and config repositories',
        why: 'The cluster pulls from Git, so CI never needs a kubeconfig. A leaked CI token cannot deploy anything by itself.',
      },
      {
        choice: 'Sign and verify the digest, not the tag',
        why: 'Tags can be moved. Kyverno verifies the digest and rewrites the pod to it, so the cluster runs the exact bytes that were signed.',
      },
      {
        choice: 'Make scanners fail the build',
        why: 'Findings that only appear in a report get ignored. The gates block on fixable HIGH/CRITICAL vulnerabilities and on any detected secret.',
      },
    ],
    incidentsTitle: 'What changed along the way',
    incidents: [
      {
        title: 'Known trade-off: no public transparency log',
        text: 'The registry sits on a closed network, so verification skips the public Rekor log and Cosign warns about it. Trust rests on the pipeline key alone; a private transparency log would be the next step.',
      },
      {
        title: 'From report-only to blocking',
        text: 'An earlier version of the pipeline ran Trivy and Gitleaks but never failed on their findings. I changed both to fail the job, behind the SonarQube gate that already blocked.',
      },
    ],
    results: [
      'A full run, 13 jobs across 8 stages, passes in about 8.5 minutes.',
      'Each pushed image is signed and verified in the same job; Harbor shows both the app and migration images as signed.',
      'SonarQube quality gate passed, with A ratings for security, reliability and maintainability.',
      'A Kyverno ClusterPolicy in Enforce mode, kept in Git, rejects unsigned images in the lab namespace.',
      'Every deploy goes through Git: the cluster state can be rebuilt from the config repository.',
    ],
    diagram: {
      caption: 'Commit to cluster',
      rows: [
        [
          { icon: 'check', label: 'Validate' },
          { icon: 'list', label: 'Lint' },
          { icon: 'terminal', label: 'Test' },
          { icon: 'scale', label: 'SAST' },
        ],
        [
          { icon: 'package', label: 'Build' },
          { icon: 'bug', label: 'Scan' },
          { icon: 'boxes', label: 'Push' },
          { icon: 'rocket', label: 'Deploy' },
        ],
        [
          { icon: 'signature', label: 'Cosign signs digest', accent: true },
          { icon: 'git', label: 'Config repo bumped' },
          { icon: 'layers', label: 'ArgoCD syncs' },
          { icon: 'shield', label: 'Kyverno verifies', accent: true },
        ],
      ],
      note: 'CI never holds cluster credentials: app and config live in separate repositories.',
    },
    stack: ['GitLab CI', 'Harbor', 'Cosign', 'Kyverno', 'ArgoCD', 'Rancher RKE2', 'Kubernetes', 'Helm', 'Trivy', 'Gitleaks', 'SonarQube', 'pip-audit'],
    media: [
      { type: 'image', src: '/projects/secure-cicd/00-pipeline.webp', alt: 'A real run: 13 jobs across validate, lint, test, SAST, build, scan, push and deploy, passed in 8 min 38 s (the LLM eval job is manual)' },
      { type: 'image', src: '/projects/secure-cicd/07-cosign-verify.webp', alt: 'The push job signs the image digest with Cosign, then verifies it against the public key in the same job (registry address hidden)' },
      { type: 'image', src: '/projects/secure-cicd/08-harbor-signed.webp', alt: 'Harbor marks the pushed image as signed' },
      { type: 'image', src: '/projects/secure-cicd/01-gitlab-repos.webp', alt: 'App, config and GitOps repositories, each with a passing pipeline' },
      { type: 'image', src: '/projects/secure-cicd/03-argocd-tree.webp', alt: 'ArgoCD deploys everything from Git: ConfigMap, Service, Deployment, HPA, Ingress and PodDisruptionBudget' },
      { type: 'image', src: '/projects/secure-cicd/04-sonarqube.webp', alt: 'SonarQube quality gate: passed, A ratings' },
    ],
  },
  {
    slug: 'home-datacenter',
    title: 'Home Datacenter',
    oneLiner:
      'A bare-metal NAS my family uses every day, behind Cloudflare Zero Trust, with its own log monitoring, which I attack from Kali to check that it notices.',
    context: 'Personal',
    status: 'In daily use',
    period: '2025 – 2026',
    role: 'Built and operate',
    featured: true,
    icon: 'home',
    thumb: [
      { icon: 'cloud', label: 'Tunnel' },
      { icon: 'server', label: 'NAS' },
      { icon: 'scroll', label: 'Logs' },
      { icon: 'activity', label: 'Grafana', accent: true },
      { icon: 'bell', label: 'Alert' },
    ],
    metrics: [
      { value: '5', label: 'apps behind a Zero Trust login' },
      { value: '4', label: 'disks split by purpose' },
      { value: '9', label: 'log streams, kept 90 days' },
    ],
    problem:
      'Keep family photos and files off third-party clouds and reachable from anywhere, without opening the box to the internet, and be able to see who touched it.',
    built: [
      {
        icon: 'disk',
        title: 'Storage split by purpose',
        text: 'Separate disks for app data (1 TB), backups, logs and container runtime, so a full log disk cannot stop the apps and backups never share a disk with the data.',
      },
      {
        icon: 'image',
        title: 'Family services',
        text: 'Immich photo backup with on-device machine learning, Home Assistant, a file browser and a dashboard, all in Docker Compose on one shared network. The first version ran on Proxmox VE; it now runs bare-metal on Debian.',
      },
      {
        icon: 'cloud',
        title: 'Access without open ports',
        text: 'Public apps go out through Cloudflare Tunnel, an outbound-only connection, and each one sits behind a Cloudflare Access (Zero Trust) login policy. Admin access is over Tailscale, and SSH root login is disabled.',
      },
      {
        icon: 'activity',
        title: 'Self-hosted log monitoring',
        text: 'rsyslog splits kernel, auth, firewall, Docker and per-app logs into 9 streams. Promtail ships them to Loki (90-day retention) and Grafana sends email alerts.',
      },
      {
        icon: 'bug',
        title: 'Attack testing',
        text: 'From a Kali machine I ran ARP scans, Nmap and hping3 SYN and UDP floods on the home network, then checked the traffic in Wireshark and the auth and container panels in Grafana.',
      },
    ],
    decisions: [
      {
        choice: 'Tunnel instead of port forwarding',
        why: 'The NAS makes the connection out to Cloudflare, so nothing on the router has to accept inbound traffic.',
      },
      {
        choice: 'Tag new connections by zone',
        why: 'Firewall rules log new inbound connections as WAN, LAN or VPN, which separates internet scans from normal home traffic.',
      },
      {
        choice: 'Record every container event',
        why: 'A small systemd unit writes every Docker start, stop and crash to syslog, so the log history shows what changed and when.',
      },
    ],
    incidentsTitle: 'Next steps',
    incidents: [
      { title: 'Off-site backup copy', text: 'Backups sit on their own disk today; the next step is a copy outside the house.' },
      { title: 'Stricter secret handling', text: 'Move service credentials out of Compose files into permission-restricted environment files.' },
    ],
    results: [
      'Runs the family’s photo library and smart-home control every day.',
      'About 76,000 system log lines a day land in Loki with 90 days of history.',
      'Flood tests show up as a clear spike of TCP errors in Wireshark against normal traffic.',
    ],
    diagram: {
      caption: 'Access and log flow',
      rows: [
        [
          { icon: 'cloud', label: 'Cloudflare Tunnel + Access', sub: 'outbound only, Zero Trust login' },
          { icon: 'network', label: 'Tailscale', sub: 'admin access' },
          { icon: 'bug', label: 'Kali attack tests', sub: 'scans and floods' },
        ],
        [
          { icon: 'image', label: 'Immich' },
          { icon: 'home', label: 'Home Assistant' },
          { icon: 'disk', label: 'File browser' },
          { icon: 'gauge', label: 'Dashboard' },
        ],
        [{ icon: 'scroll', label: 'rsyslog', sub: '9 streams: kernel, auth, firewall, Docker, apps' }],
        [
          { icon: 'database', label: 'Loki', sub: '90-day retention' },
          { icon: 'activity', label: 'Grafana', sub: 'dashboards', accent: true },
          { icon: 'bell', label: 'Email alerts', accent: true },
        ],
      ],
      note: 'Data, backups, logs and container runtime each live on their own disk.',
    },
    stack: ['Debian', 'Proxmox VE (first version)', 'Docker Compose', 'Cloudflare Tunnel', 'Cloudflare Access', 'Tailscale', 'rsyslog', 'Promtail', 'Loki', 'Grafana', 'Kali Linux', 'Wireshark', 'hping3'],
    media: [
      { type: 'image', src: '/projects/home-datacenter/03-monitoring.webp', alt: 'Grafana on the NAS: SSH authentication failures over time and a container crash-loop counter' },
      { type: 'image', src: '/projects/home-datacenter/02-zero-trust.webp', alt: 'Cloudflare Access: every app needs a Zero Trust login (domains hidden)' },
      { type: 'image', src: '/projects/home-datacenter/01-dashboard.webp', alt: 'The family dashboard: photos, files and smart home in one place' },
      { type: 'image', src: '/projects/home-datacenter/04-disks.webp', alt: 'Four disks, one job each: data, backup, logs and container runtime' },
      { type: 'image', src: '/projects/home-datacenter/06-attack-io-graph.webp', alt: 'Wireshark during a flood test: TCP errors spike against normal traffic (MAC addresses hidden)' },
      { type: 'image', src: '/projects/home-datacenter/07-attack-commands.webp', alt: 'The test from Kali: ARP scan, then hping3 SYN and UDP floods (MAC addresses hidden)' },
      { type: 'image', src: '/projects/home-datacenter/05-hardware.webp', alt: 'The NAS board itself' },
    ],
  },
  {
    slug: 'honeypot-lab',
    cover: '/projects/honeypot-lab/01-kibana.webp',
    title: 'Cloud & Edge Honeypot',
    oneLiner:
      'Decoy IT and industrial services on a Raspberry Pi in its own DMZ and on Azure, with every attack logged, classified and shown on dashboards.',
    context: 'KMITL project, extended on my own',
    status: 'Past project',
    period: '2026',
    role: 'Built the honeypots, segmentation and log pipeline',
    featured: true,
    icon: 'radar',
    thumb: [
      { icon: 'terminal', label: 'Attacker' },
      { icon: 'radar', label: 'Pi + Azure', accent: true },
      { icon: 'shield', label: 'Firewall' },
      { icon: 'scroll', label: 'Logs' },
      { icon: 'activity', label: 'Kibana', accent: true },
    ],
    metrics: [
      { value: '8', label: 'decoy services on the edge honeypot' },
      { value: '1,000+', label: 'attack events captured' },
      { value: '2', label: 'sites: edge Pi and Azure cloud' },
    ],
    problem:
      'Most small networks have a firewall but no way to see who is probing them. I wanted to study real attacker behaviour, against internet-facing cloud hosts and against industrial (OT) systems, without exposing a real control system.',
    built: [
      {
        icon: 'radar',
        title: 'Edge honeypot (Raspberry Pi)',
        text: 'Cowrie for SSH, OpenCanary for FTP, HTTP and MSSQL, a Modbus honeypot and a fake SCADA web app, all on one Pi with custom honeyfiles.',
      },
      {
        icon: 'cloud',
        title: 'Cloud honeypot (Azure)',
        text: 'The same decoys on an Azure VM, to compare internet-wide scanning with what reaches the edge device.',
      },
      {
        icon: 'network',
        title: 'Segmentation by zone',
        text: 'The Pi sits in its own DMZ. The firewall lets it send logs and nothing else, so it can never reach the real SCADA server in the OT zone. Admin access is only over Tailscale.',
      },
      {
        icon: 'scroll',
        title: 'Log pipeline',
        text: 'Filebeat ships Cowrie and OpenCanary logs to Logstash, Elasticsearch and Kibana; a second pipeline with Promtail, Loki and Grafana correlates them with internal logs.',
      },
      {
        icon: 'cpu',
        title: 'Attack classification',
        text: 'Python scripts group events by attacker, service and pattern, and the dashboards show attacker IPs, honeypot types and the commands typed.',
      },
      {
        icon: 'terminal',
        title: 'Attack test',
        text: 'From Kali: nmap -sV to fingerprint the fake services, then SSH and brute-force logins. Cowrie recorded every session and command, such as whoami and ls.',
      },
    ],
    decisions: [
      {
        choice: 'Fake industrial services, not just SSH',
        why: 'Modbus and a SCADA-looking web app attract OT-focused scans that a plain SSH honeypot would never see.',
      },
      {
        choice: 'Allow-list the honeypot’s only way out',
        why: 'If an attacker takes over the Pi, the firewall still blocks it from the real SCADA server; only log shipping is allowed.',
      },
      {
        choice: 'Run one honeypot at the edge and one in the cloud',
        why: 'A cloud IP is scanned by the whole internet within minutes; the edge device shows what actually gets through to a local network.',
      },
    ],
    incidents: [],
    results: [
      'Captured 1,000+ events in testing, mostly SSH sessions in Cowrie plus FTP, HTTP and MSSQL probes in OpenCanary.',
      'Started as a KMITL project with a classmate (presented as a poster); I built the systems and later added the Azure honeypot and Loki/Grafana pipeline on my own.',
      'The Raspberry Pi has since been retired; the cloud frames below come from a low-resolution demo recording.',
    ],
    diagram: {
      caption: 'Zones and log flow',
      rows: [
        [{ icon: 'terminal', label: 'Attackers', sub: 'internet scanners and Kali tests' }],
        [
          { icon: 'radar', label: 'Edge honeypot', sub: 'Pi in DMZ: Cowrie, OpenCanary, Modbus, fake SCADA', accent: true },
          { icon: 'cloud', label: 'Cloud honeypot', sub: 'Azure VM: Cowrie, OpenCanary', accent: true },
        ],
        [
          { icon: 'shield', label: 'Firewall', sub: 'honeypot may only ship logs' },
          { icon: 'lock', label: 'Real SCADA', sub: 'OT zone, blocked from the Pi' },
        ],
        [
          { icon: 'scroll', label: 'Filebeat / Promtail' },
          { icon: 'database', label: 'Elasticsearch / Loki' },
          { icon: 'activity', label: 'Kibana / Grafana', sub: 'dashboards', accent: true },
        ],
      ],
      note: 'Zones follow the Purdue model: the honeypot in the DMZ (level 3.5), monitoring in IT (level 4) and the real SCADA in OT (level 3).',
    },
    stack: ['Raspberry Pi', 'Azure', 'Cowrie', 'OpenCanary', 'pymodbus', 'Flask', 'Filebeat', 'Logstash', 'Elasticsearch', 'Kibana', 'Loki', 'Grafana', 'Python', 'Tailscale', 'Kali Linux', 'Nmap'],
    media: [
      { type: 'image', src: '/projects/honeypot-lab/01-kibana.webp', alt: 'Kibana: events by honeypot type, attacker IPs and the commands they typed (lab addresses)' },
      { type: 'image', src: '/projects/honeypot-lab/02-attack.webp', alt: 'The attack side: SSH into the honeypot from Kali after an Nmap scan (lab addresses)' },
      { type: 'image', src: '/projects/honeypot-lab/03-cloud-dashboard-frame.webp', alt: 'Frame from my demo recording: the cloud honeypot dashboard (low resolution, recovered from video)' },
      { type: 'image', src: '/projects/honeypot-lab/04-cloud-map-frame.webp', alt: 'Frame from my demo recording: attack sources on a world map (low resolution)' },
    ],
  },
]

export type Workstream = {
  title: string
  href: string
  summary: string
  metrics: { value: string; label: string }[]
  points: string[]
  stack: string[]
}
export type TimelineItem = { org: string; role: string; period: string; workstreams: Workstream[] }

export const experience: TimelineItem[] = [
  {
    org: 'NETBAY Public Company Limited',
    role: 'DevSecOps Engineer · Work-integrated Learning Programme (12 months)',
    period: '2026 – Present',
    workstreams: [
      {
        title: 'AI Agent Platform for IT Operations',
        href: '/projects/agent-platform',
        summary: 'Agents for the DevSecOps, Database and Network teams, behind one MCP gateway, with approval and audit enforced in code.',
        metrics: [
          { value: '9', label: 'agents across 3 teams' },
          { value: '7', label: 'systems behind one gateway' },
          { value: '~5 min', label: 'approval to running VM' },
        ],
        points: [
          'Ticket to audited VM: Terraform on vCenter, human approval pinned to the exact plan, Ansible CIS hardening and an independent audit, with 0 failed hardening tasks in the live run.',
          'Least privilege in code: per-agent tokens, tiers and allowlists for 83 tools; audits attach 91 live CIS checks, which found 2 real defects.',
          'In daily use: twice-daily switch and F5 health reports, 37 rounds so far, with every figure computed in code.',
        ],
        stack: ['MCP', 'Node.js', 'Terraform', 'Ansible', 'vCenter', 'PostgreSQL'],
      },
      {
        title: 'CI/CD & GitOps',
        href: '/projects/secure-cicd',
        summary: 'From commit to Kubernetes with security gates that block, signed images and no cluster credentials in CI.',
        metrics: [
          { value: '8', label: 'stages, 13 jobs' },
          { value: '~8.5 min', label: 'full pipeline run' },
          { value: '0', label: 'cluster credentials in CI' },
        ],
        points: [
          'SonarQube, Trivy and Gitleaks fail the build instead of warning.',
          'Cosign signs and verifies every image digest; Kyverno enforces signatures at admission.',
          'ArgoCD GitOps to Rancher RKE2 with restricted Pod Security, NetworkPolicy, PDB and autoscaling.',
        ],
        stack: ['GitLab CI', 'Harbor', 'Cosign', 'Kyverno', 'ArgoCD', 'Helm'],
      },
    ],
  },
]

export const education = {
  school: "King Mongkut's Institute of Technology Ladkrabang (KMITL)",
  degree: 'Dual Degree: B.Eng. IoT System and Information Engineering; B.Sc. Industrial Physics',
  period: '2023 – Present',
  gpa: 'GPA 3.02',
}

export const training = [
  {
    title: 'SoSecure: Road to Cybersecurity 2025 (Gen 6)',
    detail: 'Hands-on attack and defence labs; Linux, Wireshark, Splunk, Python',
  },
  {
    title: 'DENSO Industrial Project: ECU System and Test Case',
    detail: 'Translated customer requirements into ECU control logic; designed and executed test cases with MATLAB and Simulink',
  },
]

export const languages = 'Thai (native) · English (B1)'
