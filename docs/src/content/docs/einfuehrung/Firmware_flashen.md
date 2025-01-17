---
title: Firmware flashen
sidebar:
  order: 4
---

## Hardware identifizieren oder auswählen

:::caution
_Vorweg, Geräte nur mit angeschlossener Antenne einschalten! Anderenfalls kann das Gerät sich im schlimmsten Fall selber zerstören._
:::

Meshtastic wird offiziell nur von bestimmten Geräten welche ein LoRa Modul innehaben supportet.

Es ist darauf zu achten, dass jedes Gerät welches im Meshnetz betrieben werden soll auf der _gleichen_ Frequenz arbeitet. Hier gibt es unterschiede!

In deutschland können die freien Frequenzbänder 433 MHz und 868MHz, auf welchen Lora operiert, ohne Lizenzkosten oder Amateurfunklizenz genutzt werden.

Solange WLAN Verbindung zu einem Device nicht notw. ist und Bluetooth ausreicht, sollte ein nRF52 Chip gewählt werden, da diese energieffizienter als ESP32 Chips und einfacher zu flashen sind. Es gibt auch noch Geräte auf Basis des RP2040, diese haben wir allerdings nicht getestet.

Eine Liste mit unterstützer Hardware findet sich hier:

https://meshtastic.org/docs/hardware/devices/

## Serial Treiber

### ESP32

Einen für das eigene Betriebssystem passenden Treiber auf folgender Seite identifizieren, herunterladen und Installieren:

https://meshtastic.org/docs/getting-started/serial-drivers

### nRF52

nRF52 Chips benötigen normalerweise _keinen_ Serial Treiber. Sie benutzen einen UF2 bootloader, welche das Gerät als USB-Stick vom Betriebssystem erkennen lassen.

_Auf keinen Fall folgenden USB geräte treiber herunterladen, es sei denn es wird UF2 support benötigt_

https://meshtastic.org/docs/getting-started/serial-drivers/nrf52

## Firmware Flashen

### ESP32

https://meshtastic.org/docs/getting-started/flashing-firmware/esp32/
Da es bei uns auf verschieden PCs probleme gab haben wir zum Flashen unter Linux eine [Nix-Flake](https://github.com/go3ranh/meshtastic-flasher) erstellt, die Python mit den richtigen Paketen installiert und eine kleine Anleitung (auch zum selber Compilieren der Firmware) für esp32 und nRF52 Geräte enthät.

### nRF52

https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/
Beim diesen Geräten ist es bei uns manchmal vorgekommen, dass das Flashen von Firmware zwar bis zu dem "Drag und Drop"-Schritt funktioniert und dann aber nicht wirklich mit der neuen Version neu startet. Falls das passiert muss man sich mit einer seriellen Konsole mit dem Gerät verbinden und einfach nur einmal Enter drücken, besonders nachdem Factory-Erase. Das steht unter dem Punkt Factory-Erase auch dokumentiert, aber man benötigt nicht zwingend die Meshtastic CLI, sondern lediglich ein Programm wie z. B. minicom unter Linux.
