# Fleet Management System — Bachelor's Thesis
**Astana IT University, 2022 · Software Engineering (6B06102)**

## Overview

Built a lightweight fleet management system that collects and processes real-time vehicle telemetry data using a GPS tracker plugged into a car's OBD-II port. The system tracks vehicle location, speed, fuel level, RPM, and other engine parameters — and exposes them through a web dashboard.

## Problem

Existing fleet management platforms (Wialon, Flespi) are feature-heavy and complex. The goal was to build a simpler, self-contained alternative suitable for small car-sharing services, leasing companies, or transport operators.

## What I Built

- **UDP Server** — receives and decodes binary AVL packets from Teltonika FMB003 GPS trackers, deduplicates records, and stores them in Firestore (NoSQL)
- **Web Dashboard** — shows live vehicle positions on Google Maps, device telemetry, historical packets, and trip routes with start/end markers
- **Trips System** — automatically segments driving sessions into trips; renders path as a polyline on the map
- **Data Pipeline** — configured tracker I/O parameters (ignition, speed, altitude, RPM) and tuned acquisition intervals for accuracy vs. bandwidth

## Stack

Go (UDP server + Teltonika packet parser) · Firestore · Google Maps API · Docker / VPS · React (dashboard)

## Key Challenges

- Teltonika devices send duplicate records; solved with timestamp-based deduplication on the server
- Real-time update rate was initially too slow; resolved by tuning the tracker's event triggers (speed delta, heading change, distance delta)
- Trip boundaries were noisy; fixed alongside the duplicate packet issue

## Results

Successfully tested on a personal vehicle (KIA Soul 2010). The system logged trips accurately, displayed live tracking, and handled concurrent device connections via Nginx as a reverse proxy.