---
layout: event
title: "Areas, Routing, and Diffs: Can we have Something Better than Relations?"
ref: "W019"
name: "Roland Olbricht"
authors: "Roland Olbricht"
affiliations: ""
organization: ""
extra_tags:
  - "workshop"
  - "old_description"
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
**This session has been replaced by [Present and Future of the OSM data model from the Overpass API perspective](../W019-Present_and_Future_of_the_OSM_data_model_from_the_Overpass_API_perspective/). The old description was:**

While newbies usually comprehend nodes and ways immediately,
even a lot of experienced mappers are wary of relations.
Defining areas by relations has required a month-long effort to get rid of broken relations.

Relations impede the tracking of changes and proper attribution:
Getting all objects in a bounding box pulls easily millions of points,
because multiple many-hundred-kilometer relations run through nearly all city or town centres.

Could we overcome these difficulties with a different data model
and keep all the existing software useful?

Yes we can:
The existing node-way-relation data model is translated on the fly to a new data model called vertex-link-trigraph.
Hence, all existing tools can continue with nodes-way-relation.
The new model adresses the problem of splitting ways,
the problem of keeping relation information in short and local chunks,
and the problem of building areas.
The talk explains the data model and introduces the first tools working with this data model.
