# 04 · Wi-Fi Testing

> **Scope:** everything in this guide is passive scanning of networks you own or are explicitly authorized to test. It does not cover joining, attacking, or interfering with any network.

## What passive Wi-Fi scanning actually reads

Every Wi-Fi access point regularly broadcasts **beacon frames** — this is how your phone finds a network to show you in the list before you've even entered a password. A scanner just listens for these. Nothing is sent to the access point, and no authentication happens. From beacon and probe-response frames alone, you can read:

- **SSID** — the network name, unless the network is configured to hide it (even then, it's often visible when a client actively probes for it).
- **Channel and band** — which 2.4GHz channel the AP is operating on.
- **Signal strength (RSSI)** — a relative measure of how strong the signal is where you're standing, useful for rough proximity and dead-zone mapping.
- **Security type** — whether the network advertises itself as open, WPA2-Personal, WPA2-Enterprise, or WPA3, from information elements in the beacon.
- **BSSID** — the access point's MAC address.

## Running a scan

1. Boot your ESP32-S3 into GhostESP (see [03 · Firmware setup](03-firmware-setup.md)).
2. Open the Wi-Fi module from the device menu or companion app.
3. Start a scan and let it run long enough to pick up beacon intervals from all nearby APs (a few seconds is usually enough; slower or quieter networks may take longer).
4. Review the results list — SSID, channel, RSSI, and security type per network.

## What to actually do with this data

- **Map your own network's coverage.** Walk the scan around your home and note where RSSI drops off — this tells you where a repeater or a relocated router would help.
- **Audit security type.** If your own network shows up as WPA2 instead of WPA3 and your router supports WPA3, that's an easy upgrade.
- **Spot unexpected APs.** A network you don't recognize broadcasting your own SSID could indicate a misconfigured device or, in rare cases, a rogue AP — worth investigating, not worth acting on without further verification.
- **Channel congestion.** In dense apartment buildings, scanning shows you which 2.4GHz channels are already crowded, which is genuinely useful for manually picking a quieter channel on your own router.

## What this guide deliberately does not cover

- Deauthentication or disassociation attacks against any access point or client.
- Attempting to join, decrypt, or brute-force any network you don't have explicit authorization for.
- Capturing or analyzing data-plane traffic (the contents of other people's connections).

These are out of scope for this project entirely — not just untested, but intentionally excluded. See [09 · Ethical use](09-ethical-use.md).

## Next step

Continue to [05 · Bluetooth testing](05-bluetooth-testing.md).
