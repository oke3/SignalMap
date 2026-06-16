# SignalMap 🗺️

> **The fastest way to find quality tech news sources across any vertical.**

[![Live Site](https://img.shields.io/badge/Live-SignalMap-2563eb?style=flat-square&logo=github&logoColor=white)](https://oke3.github.io/SignalMap/)
[![Outlets](https://img.shields.io/badge/Outlets-640+-22c55e?style=flat-square)](#)
[![Verticals](https://img.shields.io/badge/Verticals-36-8b5cf6?style=flat-square)](#)
[![Build](https://img.shields.io/badge/Build-Astro-ff4500?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=flat-square)](#license)

![SignalMap Hero](https://oke3.github.io/SignalMap/hero.svg)
[![Outlets](https://img.shields.io/badge/Outlets-640+-22c55e?style=flat-square)](#)
[![Verticals](https://img.shields.io/badge/Verticals-36-8b5cf6?style=flat-square)](#)
[![Build](https://img.shields.io/badge/Build-Astro-ff4500?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![License](https://img.shields.io/badge/License-MIT-3b82f6?style=flat-square)](#license)

---

## 📡 The Short Version

640+ hand-curated tech news outlets. 36 verticals. One directory that doesn't suck.

SignalMap is a fast, searchable, PWA-ready directory built for people who need to stay across the tech landscape — researchers, journalists, investors, engineers, and anyone who's tired of the algorithmic feed. Find outlets by category, type (Website/Newsletter/Podcast), or tier (Primary/Niche). Bookmark them. Export them. Open them all at once.

---

## 📊 By the Numbers

| Metric | Count |
|--------|-------|
| **Outlets** | 640+ |
| **Verticals** | 36 |
| **Types** | Websites, Newsletters, Podcasts |
| **Tiers** | Primary (flagship) & Niche (deep-dive) |
| **Build Time** | ~seconds (static site) |
| **JavaScript** | Zero until you interact |

### The 36 Verticals

| | | |
|---|---|---|
| Artificial Intelligence | Cybersecurity | Cloud Computing |
| Software Engineering | Consumer Electronics | FinTech |
| HealthTech | Biotech | Gaming & XR |
| Web3 & Blockchain | SpaceTech | GovTech & RegTech |
| CleanTech & Energy | Data Science & Analytics | DevOps & SRE |
| Quantum Computing | Robotics & Automation | Semiconductors & Hardware |
| Telecommunications & 5G | Automotive Tech & EVs | EdTech |
| InsurTech & LegalTech | HRTech & Future of Work | PropTech |
| FoodTech & AgriTech | MarTech & AdTech | Open Source |
| Venture Capital & Startups | Tech Policy & Law | IoT & Edge Computing |
| Design & UX | No Code & Low Code | API Economy |
| Enterprise SaaS | Tech Careers & Culture | Science & Research |

---

## ✨ Features

### 🔍 Search & Discovery
- **Full-text search** across all 640+ outlets — typeahead with keyboard navigation (`/` or `⌘K` to focus)
- **Filter by type** (Website / Newsletter / Podcast), **category**, and **tier** (Primary / Niche)
- **Surprise Me** — random outlet picker to break out of your echo chamber
- **Headline previews** in the search dropdown

### 📌 Personal Toolkit
- **Bookmark outlets** with one click; export as markdown
- **Open all bookmarks** at once for a curated reading session
- **Recently viewed** — auto-tracked so you never lose a tab you closed
- **Dark/light theme** (respects system preference, toggles manually too)

### 🧭 Navigate Like a Power User
- **Collapsible vertical cards** with tier separators for dense scanning
- **URL state sync** — every filter lives in the query string (`?q=&type=&cat=`) — share filtered views as links
- **Anchor links** per outlet (`#outlet-name`) — link directly to any source
- **Keyboard cheat sheet** — press `?` to see every shortcut

### 📦 Developer & Data Features
- **JSON feed** at [`/SignalMap/outlets.json`](https://oke3.github.io/SignalMap/outlets.json) — consume the directory programmatically
- **Open Graph tags** per category — share links that actually preview
- **PWA** — installable on mobile home screen, works offline with cached data
- **Daily URL health check** via GitHub Actions — dead links get flagged automatically

---

## 🚀 Quick Start for Users

| Action | How |
|--------|-----|
| **Browse** | Open [SignalMap](https://oke3.github.io/SignalMap/) — everything loads instantly |
| **Search** | Press `/` or `⌘K`, start typing |
| **Filter** | Use the dropdowns above the grid |
| **Bookmark** | Click the bookmark icon on any outlet card |
| **Share a filtered view** | Just copy the URL — all filters are in the query string |
| **Install as app** | On mobile: Add to Home Screen (Chrome/Safari). On desktop: install prompt in supported browsers |
| **Get the data** | Fetch `https://oke3.github.io/SignalMap/outlets.json` |

---

## 🤝 Contributing

SignalMap is open-source and community-fed. Contributions are welcome — whether you're fixing a dead link, suggesting a new outlet, or adding a whole category.

### How to Add an Outlet

1. **Fork** this repo.
2. **Edit** [`data/directory.json`](data/directory.json) — find the right vertical, add your outlet with name, URL, type, tier, and focus description.
3. **Submit a PR** with a brief note on why it belongs.

### Bounties 🏆

We flag priority gaps as **bounties** — see [`BOUNTIES.md`](BOUNTIES.md) for the current wishlist. Claim one and get your name in [`CONTRIBUTORS.md`](CONTRIBUTORS.md).

### Criteria for Inclusion

- **Reliability**: track record of accurate, sourced reporting
- **Focus**: deep coverage of its vertical, not a general news aggregator
- **Consistency**: publishes on a regular cadence

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

The build output goes to `docs/`, which is GitHub Pages-ready from the `main` branch.

---

## 🏗️ Tech Stack

| Layer | Choice |
|-------|--------|
| **Framework** | [Astro](https://astro.build) — zero-JS-by-default, island architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) — utility-first, tree-shaken |
| **Deployment** | [GitHub Pages](https://pages.github.com) — push-to-deploy from `main` |
| **Data** | Static JSON in `data/directory.json` — no database, no backend |
| **Health Check** | GitHub Actions — lychee link checker + custom Node script |

---

## 📄 License

MIT — use it, fork it, build on it. A link back is appreciated but not required.

---

**Maintained by [Omar](https://github.com/oke3) at Ground Zero LLC.**

[![GitHub Repo](https://img.shields.io/badge/GitHub-oke3/SignalMap-181717?style=flat-square&logo=github)](https://github.com/oke3/SignalMap)
