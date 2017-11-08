---
layout: ja/eventja
title: Rethinking binary map data exchange formats
theme: IT and technical, operations
theme_full: GIS, data use and data analysis, IT and technical, operations
category: IT and technical, operations
audience: "(3a) Core OSM: OSM stack developers"
audience_full: "(2a) Data users: Commercial, (2b) Data users: Non-profit and public service, (2c) Data users: Personal, (3a) Core OSM: OSM stack developers"
name: Andrew Byrd
organization: Conveyal LLC
twitter: globalvoid
osm: abyrd
room: Room 5
tags:
  - turn25
youtube_recording:
youtube_time:
slides: https://speakerdeck.com/sotm2017/day3-1515-rethinking-binary-map-data-exchange-formats
---
The PBF format appeared at the end of 2010 as a compact binary alternative to the voluminous XML representation of OSM data. It was a major step forward, drastically reducing the size of files and enabling more efficient data processing. However, some users have come to the conclusion that this format is significantly more complex than necessary to meet its objectives of compactness and speed. We have identified the most advantageous aspects of PBF and proposed a related but simpler format. In this workshop we will discuss the characteristics that developers and users find most important in binary data exchange, consider the social and technical barriers to adoption of new formats, and ask whether the gains in simplicity and maintainability justify format proliferation. If general agreement is reached on the usefulness of a new format, the specification will be finalized and we will plan to provide reusable libraries and integrate this format with tooling such as Osmosis.

