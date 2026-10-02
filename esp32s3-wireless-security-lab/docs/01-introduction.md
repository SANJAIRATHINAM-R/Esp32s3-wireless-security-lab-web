# 01 · Introduction

## What this project is

The **ESP32-S3 Wireless Security Lab** is a hands-on learning project from **DragonByte — Learn. Hack. Defend. Grow.** It walks through setting up an ESP32-S3 development board with [GhostESP](https://ghostesp.net) firmware, then uses that board to learn how Wi-Fi and Bluetooth Low Energy (BLE) actually behave at the protocol level — what a device broadcasts, what scanning reveals, and how a captive portal works — in a lab environment you own or are explicitly authorized to test in.

It exists because most people's mental model of "wireless hacking" comes from movies, not from actually watching management frames and advertising packets go by. Once you've scanned your own home network and seen exactly what's visible to anyone with a radio, the real lesson isn't "how to attack" — it's "how exposed open protocols already are by default," and what that means for how you secure your own devices.

## What this project is not

- It is not a tool for accessing networks you don't own or don't have permission to test.
- It is not a credential-harvesting or phishing kit. The captive-portal material in this repo is a **concept demonstration** with no data collection — see [09 · Ethical use](09-ethical-use.md).
- It is not a guide to deauthentication attacks, traffic interception, or bypassing authentication on devices you don't control.
- It is not a claim that every feature GhostESP documents has been personally verified by us — see [08 · Results](08-results.md) for exactly what we tested.

## Who this is for

- Students and hobbyists getting their first hands-on exposure to wireless protocol behavior.
- Developers who want to understand what their IoT devices are actually broadcasting.
- Anyone studying for a security certification who learns better by doing than by reading slides.

## What you'll need

| Item | Notes |
|---|---|
| ESP32-S3 development board | Native-USB variant recommended for beginners |
| USB-C data cable | Must carry data, not just power |
| A computer with Chrome or Edge | For the browser-based GhostESP flasher |
| A Wi-Fi network and Bluetooth devices you own | For every test in this guide |

## How the guides are organized

1. [Hardware](02-hardware.md) — identify your board and USB interface
2. [Firmware setup](03-firmware-setup.md) — install GhostESP, troubleshoot bootloader issues
3. [Wi-Fi testing](04-wifi-testing.md) — SSID, channel, signal, and security discovery
4. [Bluetooth testing](05-bluetooth-testing.md) — BLE advertisement scanning
5. [Captive portal lab](06-captive-portal-lab.md) — the concept, demonstrated safely
6. [Mobile testing](07-mobile-testing.md) — using your own Android/iOS devices
7. [Results](08-results.md) — what we actually observed on our hardware
8. [Ethical use](09-ethical-use.md) — scope, consent, and hard limits

Start with [02 · Hardware](02-hardware.md).
