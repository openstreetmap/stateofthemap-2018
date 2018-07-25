---
layout: event
title: "A new lightning fast .osm parser"
ref: "L037"
name: "ikushan@me.com"
authors: "ikushan@me.com"
affiliations: "Mapbox"
organization: "Mapbox"
category: lightning
day: 
lightning_talks_block: 2
extra_tags:
  - "lightning_talk"
  - "lightning_talks_block_2"
room: "De Donato"
sortroom: "1"
length: "5 minutes"
time: "Sunday 10:00"
recording: true
tags:
  - sotmevent
  - slot17
  - lightning_talk
  - lightning_talks_block_2
  - lightning_talk
---
Downloading and processing OSM XML are some of the slowest tasks in the iD editor.  As a user navigates around the map, this activity can block other work, causing delayed rendering and unresponsiveness.  However, OSM XML files follow a well-defined format that can be easily parsed, and modern browsers are able to execute tasks asynchronously in multiple threads using a feature called web workers.  

This talk showcases several techniques for improving the performance of downloading and parsing data from the OSM API.  We’ll do a quick overview of how this faster parser works, discuss performance tricks used, and evaluate the resulting speed and size benefits of the new parser.