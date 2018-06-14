---
layout: event
title: "Verifying Our Edits"
ref: "T114"
name: "Bogdan Petrea and Armin Gheorghina"
authors: "Bogdan Petrea and Armin Gheorghina"
affiliations: "Telenav"
organization: "Telenav"
extra_tags:
  - ""
room: "S.0.2"
sortroom: "2"
length: "30 minutes"
time: "Saturday 16:10"
recording: true
tags:
  - sotmevent
  - slot13
  - 
---
In this talk, the Telenav Mapping team will present a workflow that lets us regularly check how the OSM community edits our map contributions. The process is based on comparing two OSM PBF files from different times using PostgreSQL queries. The output contains both the the current and previous states of map features edited by us, even if they have been deleted since. This method is a viable alternative for using the big OSM planet history. It does not require a lot of processing power or any big data knowledge. Anyone could use this method to compare a selection of edits to a previous state.