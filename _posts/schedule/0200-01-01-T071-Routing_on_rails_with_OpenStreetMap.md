---
layout: event
title: "Routing on rails with OpenStreetMap"
ref: "T071"
name: "Michael Reichert"
authors: "Michael Reichert"
affiliations: ""
organization: ""
extra_tags:
  - ""
room: "De Donato"
sortroom: "1"
length: "30 minutes"
time: "Monday 14:30"
recording: true
tags:
  - sotmevent
  - slot40
  - 
---
People have been computing routes on roads using OSM for about ten years now, but open source software for finding routes on railway tracks is still in the early stages of development. Existing solutions are either very hacky or proprietary. However, there&#39;s clearly demand for that: Itineraries want to be illustrated, train movements tracked on maps. Hauliers want to estimate travel times of freight trains, and so on.

Routing on railway tracks is not as simple as it may seem. Every track is mapped as a single way in OSM. But some features of rail vehicles are not that easy to model. They cannot turn in arbitrary angles, they have much longer stopping distances and accelerate slower. Structure gauges, axle loads and inclines should be taken into account. Only some of that information is available in OSM.

This talk will present an open source railway routing engine using the Graphhopper library, explain how it works, and what modifications were necessary.