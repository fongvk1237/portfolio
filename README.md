# Warunyu Threepoom · Portfolio

**Live site: [warunyu-threepoom.vercel.app](https://warunyu-threepoom.vercel.app)**

DevSecOps and platform engineer. This repository is the source of my portfolio: four case studies of systems I built and run, each with the problem, architecture, key decisions, what broke and the measured result.

| Case study | What it shows |
|---|---|
| [AI Agent Platform for IT Operations](https://warunyu-threepoom.vercel.app/projects/agent-platform) | 9 agents for 3 teams behind one MCP gateway; approval pinned to the exact Terraform plan; audits built on live CIS checks |
| [CI/CD & GitOps](https://warunyu-threepoom.vercel.app/projects/secure-cicd) | 8-stage GitLab pipeline, Cosign signing, Kyverno admission, ArgoCD GitOps with no cluster credentials in CI |
| [Home Datacenter](https://warunyu-threepoom.vercel.app/projects/home-datacenter) | A NAS my family uses daily, behind Cloudflare Zero Trust, with log monitoring and attack testing |
| [Cloud & Edge Honeypot](https://warunyu-threepoom.vercel.app/projects/honeypot-lab) | IT/OT honeypots on a Raspberry Pi DMZ and Azure, with segmentation and log pipelines |

## How the site is built

- **Next.js (App Router) + TypeScript + Tailwind CSS**, exported as a fully static site (`output: 'export'`): no server, no database, nothing to attack at runtime.
- **Content is data:** every project lives in [`lib/data.ts`](lib/data.ts), and the components render cards, diagrams and case studies from it.
- **Security headers** (CSP, HSTS, frame and referrer policies) are set in [`vercel.json`](vercel.json).
- **Deployment:** every push to `main` is built and deployed by Vercel.
- **Screenshots** are real, with hostnames, IP and MAC addresses, emails and domains redacted using solid boxes and image metadata stripped.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static output in ./out
```

## Contact

[LinkedIn](https://linkedin.com/in/fong-work) · warunyu2017@gmail.com
