# Contributing to the ESP32-S3 Wireless Security Lab

Thanks for considering a contribution to this DragonByte project. This is an education-first repository, so contributions are held to a couple of standards beyond normal code quality.

## Ground rules

1. **No fabricated results.** If you're adding to `docs/08-results.md` or anywhere else that describes test outcomes, only include what you personally verified on your own hardware. Mark anything else as untested.
2. **No credential-harvesting or deceptive content.** Pull requests that add working captive-portal credential capture, cloned login pages, deauthentication tooling, or traffic-interception features will be declined — see [`docs/09-ethical-use.md`](docs/09-ethical-use.md) for the full policy. This applies to code, documentation, and images alike.
3. **Keep image references accurate.** If you add or rename an image in `images/`, update every Markdown and HTML reference to it in the same pull request, and confirm relative paths resolve correctly from both the repo root and `docs/`/`blog/`.
4. **Scope testing to owned/authorized targets.** Any new guide or example should explicitly assume the reader is testing their own devices/networks or has explicit authorization, consistent with the rest of the docs.

## How to contribute

1. Fork the repository and create a branch for your change.
2. Make your changes. For documentation, follow the existing structure in `docs/` (one topic per file, numbered in reading order).
3. If you're changing the website, preview locally before opening a PR:
   ```bash
   python3 -m http.server 8080
   ```
4. Check links and images manually — there's no automated link checker in this repo yet (a good first contribution!).
5. Open a pull request describing what changed and, if relevant, what hardware/firmware version you tested it against.

## Reporting issues

- **Bugs or broken links:** open an issue with the page/file and what you expected vs. saw.
- **Ethical concerns about content in this repo:** please open an issue directly — these are treated as priority.
- **GhostESP firmware bugs:** those belong in the [official GhostESP repository](https://ghostesp.net), not here — this repo only documents using it.

## Code of conduct

Be respectful, assume good faith, and keep the project's purpose in mind: teaching real wireless security skills responsibly. Content or conduct that undermines that — including encouraging unauthorized testing — isn't welcome here.
