# 06 · Captive Portal Lab

> **This guide covers concepts and a non-collecting local demonstration only.** It does not include instructions for building a credential-harvesting portal, an "evil twin" network, or a deceptive copy of any real login page. That capability is intentionally out of scope for this project — see [09 · Ethical use](09-ethical-use.md).

## What a captive portal is

A captive portal is the landing page that appears automatically when you join Wi-Fi at a hotel, airport, or coffee shop — the page that asks you to accept terms, enter a room number, or just click "Connect." Mechanically, it works like this:

1. A device joins a Wi-Fi network.
2. Before normal internet access is granted, the network's DNS and HTTP traffic are redirected to a local page served by the access point itself (or a server it points to).
3. Most phones and laptops detect this redirect automatically and pop the page open in a mini in-app browser.
4. Once the user interacts with the page (or the network decides to), normal connectivity is unblocked.

That's the entire mechanism — a DNS/HTTP redirect to a locally-served page. It's the same technique whether the page is a legitimate hotel sign-in screen or, in a malicious "evil twin" setup, a fake login page designed to steal credentials. **The mechanism is neutral; what makes a captive portal harmful is a page designed to deceive and collect data without consent.**

## What this lab demonstrates

This project includes a **static, local, clearly-labeled layout preview** (see the "Captive Portal" section of [`index.html`](../index.html)) that shows what a captive portal's landing page looks like structurally — a network name, a form-shaped element, a continue action — with three hard constraints:

- It is labeled as a demo on every screen, with no attempt to resemble a real provider's login page.
- It has **no password field**, and the one text input it does have is disabled and pre-filled.
- Submitting it does nothing but display an explanatory message in the page itself. No request is sent anywhere, no data is stored, and no network redirect is created.

## If you want to go further on your own hardware

Setting up a real local captive portal — for example, to understand DNS redirection or to build a legitimate guest-network sign-in flow — is a reasonable next step for your own learning, **as long as you keep to the same rules this project follows**:

- Run it only on a network you own, isolated from production traffic.
- Never collect credentials, even "just to see if it works" — use a terms-acceptance or informational page instead of a login form.
- Label the page clearly as a test/demo so anyone who encounters it (including people on your own household network) isn't misled.
- Never point the portal's SSID or branding at a real company, product, or login page you don't own.

## What this explicitly rules out

- Broadcasting a fake "free Wi-Fi" network designed to capture credentials from people who aren't aware it's a test.
- Cloning the look of a real login page (bank, email provider, social network, etc.).
- Logging, storing, or transmitting anything a visitor types into a demo portal.
- Using this material against any network or group of people without their informed consent.

If a tool you're exploring (including optional modules in GhostESP's broader feature set) offers a "credential capture" or similarly named captive-portal mode, that falls outside what this project teaches or endorses — review your local laws and the explicit, informed consent of everyone affected before going anywhere near that territory, and in a community-education context like DragonByte, don't.

## Next step

Continue to [07 · Mobile testing](07-mobile-testing.md).
