# 07 · Mobile Testing (Android &amp; iOS)

> Use only personally owned devices, or devices whose owner has explicitly authorized testing.

## Why involve a phone at all

A phone is the most convenient second device for this lab: it's a client you fully control, it shows you the consumer-facing side of Wi-Fi/BLE discovery (what a "Connect to Wi-Fi" or "Pair new device" screen actually shows), and — if you install the GhostESP companion app — it can act as a controller for the board instead of a serial console.

## Android

- The GhostESP companion app is distributed as debug and release `.apk` builds from the official GitHub releases page. Sideloading requires enabling installs from the browser/file manager you download it with.
- Once installed and connected to the board (over its documented interface), the app mirrors the on-device menu structure: Wi-Fi, BLE, and other modules.
- Use Android's own Wi-Fi and Bluetooth settings screens alongside the app to cross-check what your phone sees against what the board reports — this is a good sanity check that scanning is working correctly.

## iOS

- iOS does not support sideloading the companion app the way Android does, and GhostESP's primary control surface is the companion app and on-device web dashboard.
- You can still use an iPhone as a **target** for discovery exercises: toggling Bluetooth/AirDrop visibility and watching how (and whether) it appears in a BLE scan is a useful, device-agnostic lesson in advertising behavior and platform-level privacy defaults.
- For anything beyond passive observation, rely on the on-device GhostESP dashboard reachable over Wi-Fi from any phone's browser, rather than a native app.

## A good first mobile exercise

1. Put your own phone in Bluetooth pairing/visible mode.
2. Run a BLE scan from the board and confirm you can see it — note what name, if any, it advertises.
3. Turn off Bluetooth visibility (or Bluetooth entirely) and re-scan — confirm it disappears.
4. Repeat with Wi-Fi: join your own test network with the phone, then scan and confirm the SSID and security type reported match what you configured on the router.

This closes the loop: you're not just reading scanner output in the abstract, you're verifying it against a device whose actual settings you control.

## Next step

Continue to [08 · Results](08-results.md).
