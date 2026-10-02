# 02 · Hardware

![ESP32-S3 board connected over USB](../images/01-esp32s3-board.jpeg)

## Identifying your ESP32-S3

The ESP32-S3 is a dual-core Xtensa LX7 chip running up to 240MHz, with native 2.4GHz Wi-Fi and Bluetooth LE. It ships on many different board layouts from many manufacturers, so the chip is consistent but the board around it is not. Before doing anything else, confirm:

- **The silkscreen label** on the module itself — look for "ESP32-S3" printed on the metal-can RF shield.
- **The USB interface type** — this determines how you'll enter bootloader mode (see below).
- **Flash size** — most boards are 4MB or 8MB; GhostESP's flasher reports this automatically once connected.

## Native USB vs. USB-UART bridge

This is the single most important distinction for a smooth firmware install.

| | Native USB | USB-UART bridge (CH340/CP210x) |
|---|---|---|
| Driver required | No | Yes (CH340/CH341 or CP210x driver) |
| Enters bootloader | Automatically, when the flasher requests it | Manually — hold BOOT, press RESET, release BOOT |
| How to tell | Board has a single USB-C port wired directly to the S3's native USB pins | Board has a separate USB-to-serial chip visible near the USB port |

If you're not sure which type your board is, connect it and open the GhostESP flasher — the "Install for the first time" flow tells you directly whether it found a native USB device or needs a manual bootloader sequence.

## Cable check

Use a USB-C cable you know carries data. Many cheap cables are charge-only. If your operating system doesn't show a new serial device when you plug the board in, this is the first thing to swap before assuming the board itself is faulty.

## Powering the board

The ESP32-S3 draws power over USB during normal operation and flashing. No external power supply is needed for the setup in this guide. Onboard status LEDs (visible in the photo above) indicate power and, on many boards, a secondary LED for serial activity.

## Next step

Continue to [03 · Firmware setup](03-firmware-setup.md) to install GhostESP.
