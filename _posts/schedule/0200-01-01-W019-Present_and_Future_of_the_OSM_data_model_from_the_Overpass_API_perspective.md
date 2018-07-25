---
layout: event
title: "Present and Future of the OSM data model from the Overpass API perspective"
ref: "W019"
name: "Roland Olbricht"
authors: "Roland Olbricht"
affiliations: ""
organization: ""
extra_tags:
  - "workshop"
  - ""
room: "S.1.5"
sortroom: "4"
length: "60 minutes"
time: "Monday 14:00"
recording: false
tags:
  - sotmevent
  - slot39
  - slot40
  - workshop
  - 
---
*Note: Previous title was &#34;Areas, Routing, and Diffs: Can we have Something Better than Relations?&#34;*

This workshop has two goals: First it is a follow-up of Jochen&#39;s talk about getting forward with the OSM data model. Second, as an experiment to whether people prefer a Q&amp;A session, I would like to take people&#39;s questions about Overpass API. To propose topics and questions: [on the forum](https://forum.openstreetmap.org/viewtopic.php?id=63116), [by email](https://lists.openstreetmap.org/pipermail/talk/2018-July/081024.html).

While the talk part is intended to present the ideas, the detailed model and action plan will by laid out in a github repository to be accessible for public feedback.

There is already an understanding what can be done to make working with ways easier: We will discuss both how ways can get direct geometry and how these changes can be implemented in the OSM ecosystem.

The situation is much more intricate for relations: Our current approach of areas by relations has required a month-long project to get rid of broken ones. And broken areas can and do slowly come back.

The properties of relations impede other use cases, too. A large fraction of all mappers keeps out of bus route mapping, because they do not trust their level of understanding all required details.

In particular building routes depends on picking only part of an OSM way. We do not have a proper data model for that. Subsequently, mitigating this by splitting ways complicates the tracking of changes and proper attribution.

This problem of change tracking is even far offset by the challenge of dealing with huge relations: Getting all objects in a bounding box pulls easily millions of points, because multiple many-hundred-kilometer relations run through nearly all city or town centres.

So, all in all, could and should we overcome these difficulties with a different data model? Can we tackle to keep all the existing software useful?