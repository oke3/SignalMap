# SignalMap 🗺️

> **The definitive map of technology news — 1,000 curated outlets across 50 verticals.**

[![Live Site](https://img.shields.io/badge/Live-SignalMap-2563eb?style=flat-square&logo=github&logoColor=white)](https://oke3.github.io/SignalMap/)
[![Outlets](https://img.shields.io/badge/Outlets-1000-22c55e?style=flat-square)](#)
[![Verticals](https://img.shields.io/badge/Verticals-50-8b5cf6?style=flat-square)](#)
[![Build](https://img.shields.io/badge/Build-Astro-ff4500?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![WCAG](https://img.shields.io/badge/WCAG-2.2_AA-6f42c1?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=flat-square)](#license)

![SignalMap Hero](https://oke3.github.io/SignalMap/hero.svg?v=3)

---

## 📡 The Signal

1,000 hand-curated tech news outlets. 50 verticals. Zero algorithmic feed.

SignalMap is a fast, searchable, PWA-ready directory for people who need to navigate the tech landscape — researchers, journalists, investors, engineers, and anyone tired of the algorithmic feed. Find outlets by vertical, type (Website / Newsletter / Podcast), tier (Primary ⭐ / Niche), or language. Bookmark them. Export them. Share them.

[**Launch SignalMap →**](https://oke3.github.io/SignalMap/) · [**Browse the data →**](https://oke3.github.io/SignalMap/outlets.json)

---

## 📊 By the Numbers

| Metric | Count |
|--------|-------|
| **Outlets** | 1,000+ |
| **Verticals** | 50 |
| **Types** | Website · Newsletter · Podcast |
| **Tiers** | Primary (flagship) · Niche (deep-dive) |
| **Languages** | English (primary), expanding regionally |
| **Build** | ~5s static site, ~100 KB JS first paint |
| **Accessibility** | WCAG 2.2 AA — audited and verified |

### The 50 Verticals

#### AI & Infrastructure ⚙️
Artificial Intelligence · Cloud Computing · Software Engineering · DevOps & SRE · Open Source · API Economy

#### Security & Data 🛡️
Cybersecurity · Data Science & Analytics · Quantum Computing · Semiconductors & Hardware · Telecommunications & 5G · IoT & Edge Computing · Industrial IoT & Industry 4.0 · Digital Identity & Privacy

#### Consumer & Design 🎨
Consumer Electronics · Gaming & XR · Design & UX · No Code & Low Code · Digital Media & Streaming · Creator Economy

#### Science & Sustainability 🌿
Biotech · HealthTech · Digital Health · Science & Research · SpaceTech · Space Commerce · CleanTech & Energy · Alternative Energy · Climate Tech · FoodTech & AgriTech · Robotics & Automation · NeuroTech · Materials Science

#### Business & Finance 💰
FinTech · Crypto-Native Finance · InsurTech · Venture Capital & Startups · Enterprise SaaS · MarTech & AdTech · HRTech & Future of Work · PropTech · Supply Chain & Logistics Tech · LegalTech · API Economy

#### Policy & Society 📜
Tech Policy & Law · GovTech & RegTech · Defense Tech · Tech Careers & Culture · Web3 & Blockchain · EdTech · Automotive Tech & EVs

---

## ✨ Features

### 🔍 Search & Discovery
- **Full-text search** across all 1,000 outlets — typeahead with keyboard navigation (`/` or `⌘K` to focus)
- **Filter by type** (Website / Newsletter / Podcast), **category** (6 meta-groups), and **tier** (Primary / Niche)
- **Primary Only toggle** — hide niche sources, focus on flagship outlets only
- **Surprise Me** — random outlet picker to break out of your echo chamber
- **Language filter** — narrow by region as coverage expands

### 📌 Personal Toolkit
- **Bookmark outlets** with one click; export as markdown or copy to clipboard
- **Open all bookmarks** at once for a curated reading session
- **Recently viewed** — auto-tracked so you never lose a tab you closed
- **Dark / light theme** — respects system preference, toggles manually too

### 🧭 Navigate Like a Power User
- **Collapsible vertical cards** with tier separators (Primary / Niche) for dense scanning
- **URL state sync** — every filter lives in the query string (`?q=&type=&cat=`) — share filtered views as links
- **Anchor links** per outlet (`#outlet-name`) — link directly to any source
- **Keyboard cheat sheet** — press `?` to see every shortcut
- **Scroll progress bar** — never lose your place in long browsing sessions

### ♿ Accessibility (WCAG 2.2 AA)
- **Skip-to-content link** — bypass navigation on first tab
- **ARIA roles and states** — `role="tablist"`, `aria-selected`, `aria-expanded`, `aria-pressed` on all interactive elements
- **Live regions** — search result count, toast messages, and loading states announced by screen readers
- **Focus management** — drawer and modal focus traps with return focus restoration
- **Touch targets** — minimum 44×44 px on all mobile interactive elements
- **Reduced motion** — all animations respect `prefers-reduced-motion`
- **Color contrast** — verified against WCAG 2.2 AA thresholds for both themes

### 📦 Developer & Data Features
- **JSON feed** at [`/SignalMap/outlets.json`](https://oke3.github.io/SignalMap/outlets.json) — consume the full directory programmatically
- **Open Graph tags** per category — share links that actually preview
- **PWA** — installable on mobile home screen, works offline with cached data

---

## 🚀 Quick Start for Users

| Action | How |
|--------|-----|
| **Browse** | Open [SignalMap](https://oke3.github.io/SignalMap/) — loads instantly |
| **Search** | Press `/` or `⌘K`, start typing |
| **Filter** | Use the category tabs, type pills, and Primary toggle above the grid |
| **Bookmark** | Click the bookmark icon on any outlet card |
| **Share a filtered view** | Just copy the URL — all filters are in the query string |
| **Install as app** | On mobile: Add to Home Screen (Chrome/Safari). Desktop: install prompt in supported browsers |
| **Get the data** | Fetch [`outlets.json`](https://oke3.github.io/SignalMap/outlets.json) |

---

## 🤝 Contributing

SignalMap is open-source and community-fed. Spot a dead link? Know an outlet that belongs? Open an issue or submit a PR.

### How to Suggest an Outlet

1. **Open an issue** using the [Suggest Outlet](https://github.com/oke3/SignalMap/issues/new?template=outlet-suggestion.md) template.
2. Include the outlet name, URL, type (Website / Newsletter / Podcast), and a brief focus description.
3. The editorial board reviews suggestions weekly.

### Bounties 🏆

Priority gaps are flagged as **bounties** — see [`BOUNTIES.md`](BOUNTIES.md) for the current wishlist. Claim one and get your name in [`CONTRIBUTORS.md`](CONTRIBUTORS.md).

### Criteria for Inclusion

- **Reliability**: track record of accurate, sourced reporting
- **Focus**: deep coverage of its vertical, not a general news aggregator
- **Consistency**: publishes on a regular cadence (at least monthly)
- **Originality**: produces original reporting or analysis, not press release republishing

> Have an idea for a new vertical? Open an issue first to discuss it.

---

## 🛠️ Development Setup

```bash
# Prerequisites: Node.js >= 22.12.0
git clone https://github.com/oke3/SignalMap.git
cd SignalMap
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the build
npm run preview
```

### Scripts Reference

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Astro dev server with HMR |
| `npm run build` | Generate JSON feed + build static site to `docs/` |
| `npm run verify` | Validate outlet data structure |
| `npm run check-urls` | Run URL health check across all outlets |
| `npm run rss` | Fetch RSS headlines for search previews |

> **Note**: The canonical dataset (`data/directory.json`) and automation scripts (`scripts/`) are local-only per the project's thin-repo architecture. The public repo contains only `README.md` and `docs/` (the built site).

---

## 🏗️ Tech Stack

| Layer | Choice |
|-------|--------|
| **Framework** | [Astro](https://astro.build) — zero-JS-by-default, island architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) — utility-first, tree-shaken |
| **Deployment** | [GitHub Pages](https://pages.github.com) — push-to-deploy from `main` |
| **Data** | Static JSON — no database, no backend |
| **Accessibility** | WCAG 2.2 AA — audited with manual keyboard + screen reader testing |

---

## 📄 License

MIT — use it, fork it, build on it. A link back is appreciated but not required.

---

**Maintained by [Omar](https://github.com/oke3) at Ground Zero LLC.**

[![GitHub Repo](https://img.shields.io/badge/GitHub-oke3/SignalMap-181717?style=flat-square&logo=github)](https://github.com/oke3/SignalMap)
