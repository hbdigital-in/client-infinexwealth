# CLAUDE.md — Infinex Wealth

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

- **Client:** Infinex Wealth Capital Private Limited
- **Founder:** Nikhil Bhatia
- **Live URL:** https://infinexwealth.com
- **GitHub Repo:** [create: hbdigital-in/client-infinexwealth]
- **Package:** Pro bono (friend)
- **Client record:** `C:\dev\internal-docs\clients\infinexwealth\client.md`

## Tech Stack

Pure static HTML/CSS/JS — no npm, no build step.

Preview locally:
```bash
python -m http.server 8000
# Open http://localhost:8000/www/
```

## File Structure

```
index.html           # Full single-page site
style.css            # Light theme — all custom (not from template-static)
script.js            # Navbar dark→light, FAQ accordion, form async, scroll reveal
CNAME                # infinexwealth.com
CLAUDE.md            # This file
images/
  logo.png           # Transparent PNG (from InfinexWealth_logo.jpeg via remove.bg)
  logo.jpeg          # Original JPEG (kept for reference)
  nikhil-headshot.jpeg
  infographic.jpeg   # Used in How We Work section
```

All web files are at the **repo root** — GitHub Pages serves from `main` branch, root folder (`/`).

## Brand

| Variable | Value |
|---|---|
| `--color-accent` | `#2EBD59` (Infinex green) |
| `--color-bg` | `#0A0A0A` |
| `--color-bg-alt` | `#111111` |
| `--color-bg-card` | `#1A1A1A` |
| `--color-heading` | `#F5F5F5` |
| Font | Manrope (Google Fonts, all weights 400–800) |

## Pending Before Go-Live

1. **Images** — copy to `www/images/` (see above)
2. **Formspree** — create form at formspree.io → replace `[FORMSPREE_ID]` in `index.html` line ~175
3. **Email** — confirm preferred address for Formspree notifications
4. **DNS** — move from GoDaddy to Cloudflare, add GitHub Pages A records
5. **GitHub Pages** — enable in repo settings, set source to `/www` (or `main` branch root if moved)

## Deployment

- GitHub Pages: `main` branch, root folder (`/`) — not `/www`
- Branch `main` → auto-deploys live at https://infinexwealth.com
- DNS managed in Cloudflare (DNS-only, not proxied)
- HTTPS auto-managed by GitHub Pages

## Contact

- WhatsApp: +91 93265 46372
- Form submissions → [email TBD, set in Formspree]
- Social: linkedin.com/in/nikhilbhatia27/ | instagram.com/financebynikhil/ | youtube.com/@financebynikhilbhatia

## Key Notes

- Dark theme is fully custom — not using template-static variables. All CSS is in `style.css`.
- FAQ accordion uses JS toggle (`.faq-item.open` class) — no external library.
- The hero right-side card (`hero-card`) is hidden on mobile (`display: none` at 900px breakpoint).
- Footer has multi-paragraph legal disclaimer — required for SEBI/IRDAI compliance per client's request.
- Logo in navbar is a JPEG (`images/logo.jpeg`) — if client provides SVG or PNG later, swap the `src`.
