# 05 · Bluetooth Low Energy (BLE) Testing

> **Scope:** passive observation of BLE advertising packets from your own devices or devices you're explicitly authorized to test. No pairing, connection, or data access beyond what a device already broadcasts publicly.

## What a BLE advertisement actually contains

BLE devices that want to be discoverable — headphones in pairing mode, fitness trackers, smart-home sensors, beacons — periodically transmit **advertising packets** on a small set of dedicated channels. This is the mechanism that lets your phone show "AirPods Pro" or "Mi Band 7" in a list before you've paired anything. A scanner listening for these packets can typically see:

- **Device name**, if the device includes one in its advertisement (many don't, or use a generic name).
- **MAC address** (increasingly randomized/rotating on modern devices for privacy).
- **Manufacturer data**, which can sometimes identify the device type or vendor.
- **Advertised service UUIDs** — which Bluetooth services the device is offering, without connecting to use them.
- **Signal strength (RSSI)** — rough proximity.

## Running a BLE scan

1. Boot into GhostESP and open the BLE module.
2. Start a scan. Unlike Wi-Fi, BLE devices advertise on a rotating schedule, so a longer scan window picks up more devices.
3. Review the device list — name (if present), address, RSSI, and advertised services.

## What this is useful for

- **Inventorying your own smart home.** Seeing exactly what your BLE devices broadcast — and realizing how identifiable an un-randomized MAC address or verbose device name can be — is a genuinely useful privacy exercise.
- **Understanding device fingerprinting.** Manufacturer data and service UUIDs are often enough to identify a device model even without a device name, which is worth knowing if you care about tracking resistance.
- **Signal mapping.** Same RSSI-based proximity logic as Wi-Fi, useful for things like locating a misplaced BLE tracker you own.

## What this does not do

- It does not connect to any device, read GATT characteristics, or access data beyond the advertisement itself.
- It does not pair, bond, or attempt to bypass any pairing requirement.
- It does not target devices you don't own or haven't been authorized to test.

## A note on scope creep

BLE scanning tools often support more than passive discovery — some firmware stacks include active connection and characteristic-read features. This project's documented workflow stops at passive advertisement scanning. If you explore further capabilities in GhostESP yourself, keep the same ownership/authorization rule from [09 · Ethical use](09-ethical-use.md) in mind.

## Next step

Continue to [06 · Captive portal lab](06-captive-portal-lab.md).
