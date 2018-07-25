---
layout: event
title: "Solving vehicle routing problems with OpenStreetMap and VROOM"
ref: "T053"
name: "Julien Coupey"
authors: "Julien Coupey"
affiliations: "VERSO"
organization: "VERSO"
extra_tags:
  - ""
room: "S.0.2"
sortroom: "2"
length: "30 minutes"
time: "Sunday 10:30"
recording: true
tags:
  - sotmevent
  - slot18
  - 
---
VROOM is an open-source software written in C++ to solve vehicle routing problems (VRP) arising in logistics and more widely in any context with geographically distributed tasks. Using OpenStreetMap data to solve real-life problems, VROOM offers an out-of-the-box integration with OSRM and is extensible to work on top of any routing engine.

The solving approach aims at providing high quality solutions efficiently by using dedicated (meta-)heuristics. This allows to get solutions very fast and/or to scale to huge problem sizes. Testing against TSPLIB, the reference benchmark for the Traveling salesman problem, shows an average optimal gap of only +2.47% while solving most instances in a few (milli)seconds.

We will describe the different ways to use VROOM by going through sample use-cases, and present the recent work toward supporting more VRP variants.