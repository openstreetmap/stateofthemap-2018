---
layout: event
title: "Human-Centered Data Science and OpenStreetMap: Contributor-Centric OpenStreetMap Analysis Infrastructure"
ref: "A10"
name: "Jennings Anderson"
authors: "Jennings Anderson"
affiliations: "University of Colorado Boulder, United States"
organization: ""
extra_tags:
  - "academic_track"
room: "S.1.3"
sortroom: "3"
length: "30 minutes"
time: "Sunday 11:30"
recording: true
tags:
  - sotmevent
  - slot20
  - academic_track
---
OpenStreetMap is growing rapidly with one million users registering in the past year. As the number of registered users increases, so does the research interest on both the data and the community, anecdotally evidenced by a new research-oriented mailing list and presentations at conferences. With more research attention comes the need for consistent, reproducible, and scalable approaches to analyzing OpenStreetMap data—a massive non-homogeneous database of volunteered geographic information that each researcher approaches differently, many viewing it as just a map. OpenStreetMap, however, is more than a static map of the world: it is the aggregate product of billions of edits by hundreds of thousands of active contributors for over thirteen years. OpenStreetMap data analysis therefore needs to look beneath the current map and account for this rich historical context and evolution of both the data and the community to help researchers understand the complete story of how the map came to be.
We are therefore designing and implementing a contributor-centric OpenStreetMap analysis infrastructure. This involves human-centered data science approaches that reimagine the research process all the way down the stack to preserve and explore the context surrounding the data genesis. This requires enhancing the data schema, extending analysis tools, and creating new interactive visualization tools to conveniently store, reproduce, and efficiently analyze the entire history of individual OpenStreetMap objects and the contributors that edit them.
This infrastructure is built on vector tile analysis. It extends an existing vector tile schema to embed the history of each map object’s individual evolution into the object itself so that analysts can see which contributors modified specific attributes and when. These historically accurate datasets have a number of advantages over current OpenStreetMap datasets. First, they can include a representation of all historical geometries; no current dataset is able to represent this well, especially geometry-only changes. Second, they are optimized for efficient, parallelized processing for data analysis with existing tools. Finally, the approach is simpler than other planet-scale analysis systems: the dataset is one file (no running database), and the processing runs on one machine. This enables data sharing and reproducibility among researchers, improving both the accuracy and the scientific rigor of OpenStreetMap data analysis.
