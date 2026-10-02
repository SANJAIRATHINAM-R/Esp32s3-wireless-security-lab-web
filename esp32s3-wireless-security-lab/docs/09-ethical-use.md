# 09 · Ethical Use

This document is not boilerplate — it defines the actual scope of what this project builds, teaches, and refuses to include.

## Core rule: ownership or explicit authorization, always

Every exercise in this repository assumes you are testing against:

- A network you personally own and administer, **or**
- A device you personally own, **or**
- A network/device you have **explicit, informed, written authorization** to test (e.g., a formal penetration-testing engagement with signed scope).

"I'm just curious" is not authorization. Neither is "it's an open network" or "I was only scanning, not connecting." Passive scanning of networks you don't own, in a jurisdiction where that's regulated, can still carry legal risk depending on local law — know the rules where you are.

## What this project will never include

- **Credential harvesting or phishing pages.** No deceptive copy of a real login page, no fake "free Wi-Fi" portal designed to capture passwords, no hidden logging of anything a visitor types. See [06 · Captive portal lab](06-captive-portal-lab.md) for how the captive-portal concept is taught without this.
- **Unauthorized deauthentication.** Disassociating or deauthenticating clients from a network you don't control and don't have authorization to test is out of scope, full stop.
- **Private traffic interception.** This project covers broadcast/advertisement data only (beacon frames, BLE advertisements) — never the contents of someone else's connection.
- **Hidden data collection.** Every tool and demo in this repo either collects nothing, or — where it legitimately needs to log something for your own review (e.g., a scan result list) — stores it only locally, visibly, and under your control.
- **Fabricated results.** See [08 · Results](08-results.md) — claims in this repo are either marked as independently verified on our own hardware, or explicitly marked as not yet tested.

## Responsible disclosure

If, while using this lab on your own equipment, you discover a real vulnerability in a device or network you don't own, don't exploit it further. Most vendors and organizations have a responsible-disclosure or security-contact process — use it.

## Why DragonByte builds labs this way

"Learn. Hack. Defend. Grow." is about building real technical skill without normalizing harm. A community that teaches wireless security well should produce people who are *more* careful with others' data and access after going through the material, not less. That's the bar every guide in this repository is held to.

## Questions or concerns

If you believe any part of this project crosses a line described above, open an issue — see [CONTRIBUTING.md](../CONTRIBUTING.md).
