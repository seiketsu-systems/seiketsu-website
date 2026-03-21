# 🚀 Seiketsu Systems — Vercel Deployment Handleiding

> Gratis forever op Vercel Hobby plan. Geen creditcard vereist.

---

## Stap 1 — GitHub Repository aanmaken

1. Ga naar [github.com/new](https://github.com/new)
2. Naam: `seiketsu-website`
3. Zet op **Private** (aanbevolen) of Public
4. Klik **Create repository**

### Code uploaden naar GitHub

Open een terminal in de `pipeline/seiketsu-website/` map:

```bash
# Initialiseer git
git init
git add .
git commit -m "feat: initial Seiketsu Systems website"

# Koppel aan GitHub (vervang USERNAME met uw GitHub gebruikersnaam)
git remote add origin https://github.com/USERNAME/seiketsu-website.git
git branch -M main
git push -u origin main
```

---

## Stap 2 — Vercel account en import

1. Ga naar [vercel.com](https://vercel.com) en klik **Sign Up**
2. Kies **Continue with GitHub** (gratis)
3. Na inloggen: klik **Add New Project**
4. Kies **Import Git Repository**
5. Selecteer `seiketsu-website` uit de lijst
6. Klik **Import**

### Build instellingen (automatisch herkend)

Vercel herkent Next.js automatisch. De instellingen zijn:

| Instelling | Waarde |
|-----------|--------|
| Framework | Next.js |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

7. Klik **Deploy** — de site is live binnen ~2 minuten

---

## Stap 3 — Eigen domein koppelen (seiketsu-systems.nl)

1. In Vercel dashboard: klik op uw project → **Settings** → **Domains**
2. Typ: `seiketsu-systems.nl` → klik **Add**
3. Vercel toont de benodigde DNS records (zie Stap 4)

---

## Stap 4 — DNS records instellen bij uw domeinregistrar

Ga naar het DNS-beheer van uw domeinregistrar (bijv. TransIP, Antagonist, Cloudflare).

### Te verwijderen records

Verwijder eventuele bestaande A-records of CNAME-records voor `@` en `www`.

### Toe te voegen records

| Type | Naam | Waarde | TTL |
|------|------|--------|-----|
| **A** | `@` (of leeg) | `76.76.21.21` | 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com.` | 3600 |

> **Let op:** Vercel kan andere IP-adressen tonen in de dashboard. Gebruik altijd het adres dat Vercel zelf aangeeft, niet het bovenstaande.

### DNS propagatie

DNS-wijzigingen duren **5 tot 48 uur** voordat ze wereldwijd actief zijn. Gemiddeld: ~30 minuten bij moderne registrars.

---

## Stap 5 — SSL certificaat (automatisch)

Vercel regelt SSL/HTTPS automatisch via Let's Encrypt. Na DNS propagatie is uw site bereikbaar via:

- `https://seiketsu-systems.nl`
- `https://www.seiketsu-systems.nl` (redirect naar non-www)

---

## Klaar! ✅

Uw website is live op:
- **https://seiketsu-systems.nl**

Vercel Hobby plan is **gratis voor altijd** inclusief:
- SSL certificaat
- Automatische deploys bij elke GitHub push
- CDN wereldwijd
- 100 GB bandbreedte/maand
- Serverless functions

---

## Updates deployen

Elke keer dat u code pusht naar GitHub wordt automatisch een nieuwe versie gedeployed:

```bash
git add .
git commit -m "update: [beschrijving van de wijziging]"
git push
```

Vercel detecteert de push en deployt automatisch binnen ~1 minuut.

---

## Lokaal testen voor deployment

```bash
cd pipeline/seiketsu-website
npm install
npm run dev
```

Site is dan bereikbaar op: `http://localhost:3000`

---

## GHL Kalender iframe — Domein whitelist

Na deployment, voeg `seiketsu-systems.nl` toe als toegestaan domein in uw GHL instellingen:

1. HighLevel → Settings → Calendars → [uw kalender]
2. Embed Settings → Allowed Domains → voeg `seiketsu-systems.nl` toe

---

*Opgesteld door Kenji — Seiketsu Systems COE — 2026-03-21*
