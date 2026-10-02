# 08 · Results

This page records what was actually verified while building this project, and is structured as a template so you can log your own results as you work through the guides. **Do not fill in a row with a result you haven't actually observed on your own hardware.** An honest "not yet tested" is more useful to the next reader than a fabricated success.

## What we verified directly

| Step | Status | Notes |
|---|---|---|
| Board identification (ESP32-S3, native USB) | ✅ Verified | Confirmed via silkscreen and automatic bootloader entry in the GhostESP flasher — no manual BOOT/RESET sequence needed. |
| GhostESP flash via official web flasher | ✅ Verified | Completed through all three flasher steps (Connect → Firmware → Flash); flash summary showed bootloader at `0x0`, partition table at `0x8000`, application at `0x10000`, DIO/80MHz/4MB/115200 baud. |
| Board reboots into GhostESP after flashing | ✅ Verified | Confirmed by the flasher's own post-flash state. |
| Companion app release build availability | ✅ Verified | Confirmed current release assets (debug and release `.apk`) published on the official GhostESP GitHub releases page. |
| Wi-Fi SSID/channel/RSSI/security-type scanning | ⬜ Log your own result | Record firmware version, scan duration, and sample output here. |
| BLE advertisement scanning | ⬜ Log your own result | Record which of your own devices were detected and what fields were visible. |
| Local captive-portal concept demo | ✅ Verified | Confirmed the static demo in `index.html` performs no network requests and stores no input — by design, not by firmware testing. |
| Android companion app pairing/control | ⬜ Log your own result | Record app version and connection method used. |
| iOS interaction (dashboard-only) | ⬜ Log your own result | Record browser and dashboard behavior observed. |

## Firmware version used

Record the exact GhostESP version/build shown in the flasher or on-device dashboard here before publishing your own results — firmware behavior changes between releases, and a result without a version number is hard to reproduce or trust.

```
GhostESP version: <fill in>
Flash date: <fill in>
Board: <fill in exact model/vendor>
```

## Known limitations of this write-up

- This repository documents the **setup and flashing process** in full, based on direct hands-on use of the official GhostESP flasher.
- Specific Wi-Fi/BLE scan results are intentionally left as a template rather than invented, because results depend entirely on what networks and devices are actually in range of your hardware when you test.
- Any capability documented on the official GhostESP site that isn't listed as "✅ Verified" above should be treated as **documented by GhostESP, not independently confirmed by this project** — check the [official docs](https://ghostesp.net) directly for authoritative capability claims.

## Next step

Continue to [09 · Ethical use](09-ethical-use.md).
