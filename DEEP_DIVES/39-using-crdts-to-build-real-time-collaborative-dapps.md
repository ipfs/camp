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
* https://github.com/gritzko/swarm
* https://github.com/mafintosh/hyperdb
* https://medium.com/textileio/wip-textile-threads-whitepaper-just-kidding-6ce3a6624338

## Notes

Hurdles to CRDTS in Dapps?
- Aren't a lot of CRDT frameworks to look at
- Orbit - operation based CRDT, ipfs log
- GUN - state-based or some different type? 
- automerge: json model 
- swarmdb.net 
- hyperdb similar, hides crdt properties for user. 

How do you choose: what kind of application are you building? What do you need that CRDTs supply? "Real-time" -> asynchronous 

De-coupling p2p from CRDT conversation?

Logical time

No API for access control. Fork the whole thing again to get away from bad contributors? Rm their vandalism from the history

CRDTs vs. append-only logs 
Multiple writers, can merge CRDTs

Apps we know built using CRDTS: 
- PeerPad
- Xray, Github for Atom, crdt based text editor

Used in trusted backends, Redis, serverless architectures etc.
Using with signatures more difficult
Learning non-access controlled version first sometimes helpful

Peerbase lets you set pub/priv key

Barriers to using CRDTs: 
- translation from academic to practical
- CRDT as service: db, firebase 
- documentation and diagrams

Flow chart for CRDTs:
- multi-users? 
- Do you want eventual consistency, or stronger

Pros: 
- Can work with spotty connectivity
- Keep history
- Sync state on multiple devices, or multiple users 
- verifiability

Cons: 
- CRDTs are huge, use lots of energy
- Scaling, how much information do you need? Can you run Wikipedia on CRDTs

## Solution

- Make a simple flow chart
- Do some comparisons / Bake-offs
