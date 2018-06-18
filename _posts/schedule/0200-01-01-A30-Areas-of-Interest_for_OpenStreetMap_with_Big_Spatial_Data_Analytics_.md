---
layout: event
title: "Areas-of-Interest for OpenStreetMap with Big Spatial Data Analytics "
ref: "A30"
name: "Stefan Keller"
authors: "Stefan Keller"
affiliations: "HSR Hochschule für Technik Rapperswil (University of Applyed Sciences), Geometa Lab, Rapperswil, Switzerland"
organization: ""
extra_tags:
  - "academic_track"
room: "S.1.3"
sortroom: "3"
length: "30 minutes"
time: "Sunday 15:00"
recording: true
tags:
  - sotmevent
  - slot26
  - academic_track
---
This is a work-in-progress report about &#34;Areas-of-Interest&#34; (AOI) for OpenStreetMap (OSM) using big spatial data analytics. OSM is a free map of the world based on a collaborative, volunteered effort. OSM is a promising, yet underestimated alternative to Google Maps (GMaps). 

AOI have been introduced in GMaps around mid 2016. They highlight places with the highest concentration of restaurants, shops and bars in an light orange style. In addition it is suspected that traffic of human activities/tracks as well as ratings of Points-of-Interest (POI) are other factors for the algorithm. However, it remains intransparent and non-reproducible how AOIs exactly are defined in GMaps. 

This is where OSM makes a difference among others. We will explain and document the algorithm used in this work. Before all, some design decisions have had to be made: Our AOI concentrates on map visualizations on city and neighbourhood level and leaves buildings and POI as is at street level as part of the base map. We don&#39;t classify nor personalise the AOI to assumed information needs, like travelling, shopping or cultural entertainment, but respect all of them as POI. 

In this work an AOI is defined as  an &#34;Urban area at city or neighbourhood level with a high concentration of POI, and typically located along a street of high spatial importance&#34;. 

The first step of the algorithm is straight forward; it selects relevant POI and leaves out irrelevant ones, like e.g. commercial offices. Then - as simple as the definition sounds - it implies quite some challenges: The first issue is about efficiency and the second one about relevance. The spatial aggregation algorithm of POI and the related building outlines need to efficiently process massive data at worldwide level. As clustering algorithm we choose Density-Based Spatial Clustering of Applications with Noise (DBSCAN). Then, this spatial aggregation outline is being mixed and aligned with streets of high spatial importance. For relevance calculation we used a network centrality algorithm. This centrality measure borrows from research on labelling hierarchies for street maps. From the results, our algorithms select aggregates that break a heuristically found threshold, and it labels them as AOI.

We will evaluate this algorithm to manually selected test areas. This contribution concludes with possible use cases, like tourist maps, and gives an outlook about further use cases, refinements and implementations of AOI.