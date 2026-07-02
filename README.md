# ⚡ sushmanth AWS Gaming — Cloud Gaming Platform Website

A fully modern, responsive, multi-page static website for a fictional **AWS-powered cloud gaming platform**. Built with HTML5, CSS3, and Vanilla JavaScript — no frameworks required.

---

## 🚀 Live Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero, features, stats, game showcase, testimonials |
| **Games** | `games.html` | Full game library, featured banner, genre filters, modal |
| **Pricing** | `pricing.html` | Plans, comparison table, add-ons, FAQ |
| **Contact** | `contact.html` | Contact form, offices, response times, social links |

---

## ✅ Completed Features

### 🏠 Home Page (`index.html`)
- Animated hero section with particle effects and floating cards
- Announcement banner with CTA
- Trust bar with platform badges
- 6 feature cards with hover effects
- Animated stat counters (500+ games, 2M players, 30 regions, 99.9% uptime)
- 3 featured game cards with images
- "How it works" 4-step section
- Player testimonials
- Platform compatibility strip (Windows, Mac, Android, iOS, TV, Browser)
- CTA section with gradient

### 🎮 Games Page (`games.html`)
- Search bar + filter buttons (All, New, Top, Free)
- Genre tab navigation (RPG, FPS, Racing, Horror, MOBA, Sports, Strategy, Adventure)
- Featured game hero banner with metadata
- 8-game grid with real screenshots
- Horizontal "Most Played" quick-access list
- Game detail modal popup (click any card to open)
- CTA strip to pricing

### 💎 Pricing Page (`pricing.html`)
- Monthly/Annual billing toggle with 25% savings
- 4 plan tiers: Starter (Free), Pro ($19), Ultra ($39), Enterprise (Custom)
- 30-day money-back guarantee badge
- Full comparison table with 15+ features
- 4 add-on cards (Extra Game, Extra Device, Stream Pack, Tournament Pass)
- Interactive FAQ accordion (6 questions)
- CTA section

### 📬 Contact Page (`contact.html`)
- Live system status indicator
- 4 contact method cards (Email, Chat, Discord, Phone)
- Social media quick links
- 4-tab contact form (General, Billing, Technical, Enterprise)
- Contextual form fields based on selected tab
- Form success state with animation
- Response time grid (5 channels)
- 6 global office cards
- CTA section

### ⚙️ Global Features
- Sticky navbar with blur/scroll effect
- Mobile hamburger menu with animation
- Back-to-top button (auto-injected)
- Scroll-triggered fade-in animations
- Animated counters
- Hero particle system
- Smooth anchor scrolling
- Keyboard navigation (Escape closes modals/menus)
- Lazy image loading
- Custom scrollbar styling
- Fully responsive (mobile, tablet, desktop)

---

## 🗂️ File Structure

```
/
├── index.html          # Home page
├── games.html          # Game library page
├── pricing.html        # Pricing & plans page
├── contact.html        # Contact us page
├── css/
│   └── style.css       # All global styles, components, responsive
├── js/
│   └── main.js         # Shared JavaScript (navbar, particles, animations)
└── README.md
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary color | `#ff6b00` (orange) |
| Accent color | `#00d4ff` (cyan) |
| Purple | `#8b5cf6` |
| Background | `#050810` (near-black) |
| Card bg | `#0d1117` / `#111827` |
| Font (headings) | Orbitron, Rajdhani |
| Font (body) | Inter |

---

## 📦 CDN Dependencies

- **Font Awesome 6.4** — Icons
- **Google Fonts** — Orbitron, Rajdhani, Inter

---

## 🔮 Recommended Next Steps

- [ ] Add a user authentication/login modal
- [ ] Connect to a real game catalog API
- [ ] Implement dark/light theme toggle
- [ ] Add a newsletter subscription section with API integration
- [ ] Create individual game detail pages
- [ ] Add a blog/news section
- [ ] Implement video background option for hero
- [ ] Add cookie consent banner
- [ ] Create a 404 error page

---

## 📌 Notes

- All game images are sourced from licensed/royalty-free CDNs via Genspark image search
- No server-side code — fully static and deployable to any CDN
- Designed and tested for Chrome, Firefox, Safari, and Edge

---

*© 2025 AWS Gaming. Built with ❤️ for the gaming community.*
