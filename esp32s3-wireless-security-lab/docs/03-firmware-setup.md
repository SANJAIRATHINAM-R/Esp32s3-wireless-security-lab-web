# 03 · Firmware Setup

GhostESP is installed through its official browser-based flasher at [ghostesp.net](https://ghostesp.net), using WebSerial/WebUSB — no local toolchain install is required for a standard flash. Use Chrome or Edge; Safari and Firefox do not currently support WebSerial.

> Always install from the official site and official documentation linked from it. Do not flash firmware binaries from untrusted third-party sources.

![GhostESP project homepage](../images/02-ghostesp-platform-homepage.png)

## Step 1 — Connect

Open the flasher and connect your ESP32-S3 over USB. The flasher's first screen asks whether you're **updating** an existing GhostESP install (via Connect & Detect) or **installing for the first time**.

![GhostESP flasher connect step](../images/03-ghostesp-flasher-connect-step.png)

For a first install, choose **Install for the first time**.

## Step 2 — Select your chip

Pick **ESP32-S3** from the chip list (or filter by board brand under "By Brand" if your exact board is listed). The flasher shows guidance specific to native-USB vs. bridge-chip boards at this step.

![GhostESP flasher with ESP32-S3 selected](../images/04-ghostesp-board-selection-esp32s3.png)

### Entering bootloader mode

- **Native USB boards:** no action needed — download mode is automatic when the flasher connects.
- **CH340/CP210x bridge boards:** install the [CH340/CH341 driver](https://ghostesp.net) or [CP210x driver](https://ghostesp.net) if you haven't already, then: hold **BOOT**, press **RESET**, then release **BOOT**.

Click **Connect Bootloader** once the board is ready.

## Step 3 — Flash

Review the flash summary before confirming:

| Component | Offset | Notes |
|---|---|---|
| Bootloader | `0x0` | Auto-detected |
| Partition table | `0x8000` | Auto-detected |
| Application (`firmware.bin`) | `0x10000` | Auto-detected |
| Settings | DIO, 80MHz, 4MB, 115200 baud | Default for most ESP32-S3 boards |

Enable **Erase all flash before programming** on a first install, or if you're recovering from a failed previous flash. Click **Flash Firmware** and wait for completion — the progress bar and ETA are shown live.

![GhostESP flasher mid-flash with progress bar](../images/05-ghostesp-flashing-in-progress.png)

A successful flash ends with the board automatically rebooting into GhostESP. You can confirm this over serial or by checking for the GhostESP Wi-Fi AP/BLE presence it creates on boot, per the official docs.

## The companion app (optional)

GhostESP also has a companion mobile app, distributed as release builds on GitHub (debug and release `.apk` builds). It talks to the board over its own interface and mirrors the on-device menu for Wi-Fi, BLE, and other modules.

![GhostESP companion app release assets on GitHub](../images/06-ghostesp-companion-app-release.png)

Only install the companion app from the official GhostESP GitHub releases page, and verify the published checksum if you want to confirm the download wasn't altered in transit.

## Troubleshooting

### Board not detected / serial port doesn't appear
- Try a different, known-good USB-C **data** cable.
- Try a different USB port, preferably a direct port rather than a hub.
- On bridge-chip boards, confirm the CH340/CP210x driver is installed and your OS shows a new serial device.

### "Connect Bootloader" fails or times out
- Re-run the manual BOOT+RESET sequence — timing matters; release BOOT only after pressing RESET.
- Close any other program (serial monitor, Arduino IDE) that might already have the port open.

### Flash completes but the board doesn't boot into GhostESP
- Re-flash with **Erase all flash before programming** enabled to clear a partial previous write.
- Confirm you selected ESP32-S3 specifically, not a different ESP32 variant — wrong chip selection can write an incompatible image.

### Flashing is extremely slow or stalls
- Lower the baud rate in Flash Options and retry.
- Use a shorter, higher-quality USB cable; long or low-quality cables introduce errors at high baud rates.

## Next step

Continue to [04 · Wi-Fi testing](04-wifi-testing.md).
