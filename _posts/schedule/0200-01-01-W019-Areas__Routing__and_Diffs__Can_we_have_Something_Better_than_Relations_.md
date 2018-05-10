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
  - ""
room: "S.1.5"
sortroom: "3"
length: "60 minutes"
time: "Monday 14:00"
tags:
  - sotmevent
  - slot39
  - slot40
  - workshop
  - 
---
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