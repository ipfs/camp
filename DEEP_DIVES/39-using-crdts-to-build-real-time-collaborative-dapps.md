# Using CRDTs to build real-time collaborative DApps

What are the hurdles to using CRDTs in dapps with IPFS? How can we make peer-base easier to understand and use?

## Goal

Peer-base is a system that enables developers to building data structures from data types that can replicate efficiently between multiple peers with automatic conflict resolution. It works quite well. Unfortunately, there are difficult challenges that confront developers that want to try out peer-base for the first time:

* which "delta" CRDT data type to choose?
* understanding the encryption model
* difficult API for nested data structures
* documentation is primarily academic papers
* how to use it together with IPFS
* explaining need for websocket-star rendezvous server

## Requirements to consider

* can we simplify how models are constructed?
* how can the documentation be improved?
* what example apps would work well for learning / tutorials?

## Where to learn about it

* https://github.com/peer-base/peer-base
* https://github.com/ipfs-shipyard/js-delta-crdts
* https://github.com/orbitdb/orbit-db
* https://github.com/amark/gun
* https://github.com/automerge/automerge

