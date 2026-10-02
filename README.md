# ESP32-S3 Wireless Security Lab

A hands-on, ethics-first learning project from **DragonByte — Learn. Hack. Defend. Grow.**

Set up an ESP32-S3 development board with [GhostESP](https://ghostesp.net) firmware and use it to learn how Wi-Fi and BLE discovery actually work — SSIDs, channels, signal strength, security indicators, BLE advertisements — plus the mechanics behind captive portals, all on networks and devices you own or are explicitly authorized to test.

🔗 **Live site:** open `index.html` locally, or deploy the static site anywhere (GitHub Pages, Netlify, any static host).
📖 **Start here:** [`docs/01-introduction.md`](docs/01-introduction.md)
📝 **Full write-up:** [`blog/complete-guide.md`](blog/complete-guide.md)

---

## What's in this repository

```
esp32s3-wireless-security-lab/
├── README.md                    ← you are here
├── index.html                   ← the website
├── style.css                    ← dark cybersecurity design system
├── script.js                    ← nav + small UI behavior, no backend
├── LICENSE                      ← MIT
├── CONTRIBUTING.md
├── .gitignore
├── images/                      ← real photos/screenshots used across the site & docs
│   ├── 01-esp32s3-board.jpeg
│   ├── 02-ghostesp-platform-homepage.png
│   ├── 03-ghostesp-flasher-connect-step.png
│   ├── 04-ghostesp-board-selection-esp32s3.png
│   ├── 05-ghostesp-flashing-in-progress.png
│   └── 06-ghostesp-companion-app-release.png
├── docs/
│   ├── 01-introduction.md
│   ├── 02-hardware.md
│   ├── 03-firmware-setup.md
│   ├── 04-wifi-testing.md
│   ├── 05-bluetooth-testing.md
│   ├── 06-captive-portal-lab.md
│   ├── 07-mobile-testing.md
│   ├── 08-results.md
│   └── 09-ethical-use.md
└── blog/
    └── complete-guide.md
```

## Previewing the site locally

No build step and no backend — it's plain HTML/CSS/JS. From the project root:

```bash
# Option 1: Python's built-in server
python3 -m http.server 8080
# then open http://localhost:8080

# Option 2: Node, if you have it
npx serve .

# Option 3: just open it directly
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

## Hardware &amp; firmware quick start

1. Identify your board — see [`docs/02-hardware.md`](docs/02-hardware.md).
2. Flash GhostESP using the official browser flasher at [ghostesp.net](https://ghostesp.net) — full steps in [`docs/03-firmware-setup.md`](docs/03-firmware-setup.md).
3. Work through the Wi-Fi, BLE, captive-portal, and mobile guides in `docs/`, in order or as needed.

## Pushing this project to GitHub

If you're starting from this folder on your own machine:

```bash
cd esp32s3-wireless-security-lab

# Initialize git (skip if already a repo)
git init
git add .
git commit -m "Initial commit: ESP32-S3 Wireless Security Lab"

# Create the repo on GitHub first (via github.com or `gh repo create`),
# then point this local repo at it:
git branch -M main
git remote add origin https://github.com/<your-username>/esp32s3-wireless-security-lab.git
git push -u origin main
```

For subsequent changes:

```bash
git add .
git commit -m "Describe your change here"
git push
```

### Enabling GitHub Pages (optional)

Repo **Settings → Pages → Source**, select the `main` branch and `/ (root)` folder, save. The site will be live at `https://<your-username>.github.io/esp32s3-wireless-security-lab/` within a few minutes.

## Project integrity checklist

Before pushing, this project was checked for:

- [x] No duplicate nested project folder — this is the repository root.
- [x] Every image referenced in `index.html` and the docs exists in `images/` with a matching filename.
- [x] All internal links between the homepage, `docs/`, and `blog/` use relative paths and were checked against the actual file tree.
- [x] No fabricated test results — see [`docs/08-results.md`](docs/08-results.md) for what's independently verified vs. left as a template for your own data.
- [x] No credential-harvesting functionality anywhere in the repo — see [`docs/09-ethical-use.md`](docs/09-ethical-use.md).

## License

MIT — see [`LICENSE`](LICENSE).

## Ethical use

This project is for authorized security testing and education only. Read [`docs/09-ethical-use.md`](docs/09-ethical-use.md) before using any part of it. In short: your own devices, your own network, or explicit written authorization — nothing else.

## Community

Built by **DragonByte — Learn. Hack. Defend. Grow.** Contributions welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md).
#
