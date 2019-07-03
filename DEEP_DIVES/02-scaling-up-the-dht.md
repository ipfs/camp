# Scaling up the DHT

Kademlia DHT is a massive distributed KV-store. It isn't reliable but has enormous other benefits.
Can we find improvements or alternatives that would allow us to improve it futher.

## Goal

Finding possible schemes improving or replacing Kademlia DHT for our usecases (IPNS, provider and peer records) which would
reduce:
 - DHT lookup time
 - DHT put time 
 - Bulk DHT puts

## Requirements to consider:
 - Large scale network (1Milion+ nodes)
 - Massive put orders

## Where to learn about it

 - https://github.com/libp2p/research-dht/issues/6
 - https://github.com/libp2p/research-dht
 - https://github.com/ipfs/notes/issues/291
 
 
 
## Proposed solution from deep dive
One of the biggest problems facing the DHT involves undialable / unreliable peers. Essentially, nodes spend significantly much time handling dial timeouts than actually announcing content to the DHT. This is due to the fact that IPFS nodes currently treat all peers as equal when attempting to announce content, regardless of how reliable individual peer actually are. 

The solution proposed during the deep dive session is something I'll refer to as a "priority peer stack"

### Priority peer stack
Nodes will locally assign a peer "value" to each IPFS peer it discovers. The value will be derived over time from the culmination of "positive" and "negative" interactions the node has experienced with that peer over time. If a node is consistantly dialable and behaves as expected when requests are sent to it, its value will rise over time. Negative interactions such as dial failures will cause the node's value to be downgraded.

Nodes in the IPFS network will prioritize staying connected to peers that accumulate high values. A node's goal is to have the highest quality of peers it can. Over time this leads to nodes with low scores being deprioritized and being dropped from the peer list. 

### How this solves the issue
When it comes time to announce content to the DHT, a node doesn't need to waste time trying dialing unproven peers in an attemt to announce content. Instead, it should have a relatively "stable" set of peers in each peer bucket for DHT announcements.

Nodes that consistantly remain reliable / stable will also gravitate towards each other they'll consistantly be proving themselves reliable to other reliable peers. What this leads to is a "self healing" effect on the network DHT, where there exists a natural hierarchy of peer stability that's highly decentralized in nature.

### Things that need to be further explored
As this solution was prepared during a 2 hour long session, there are items that will need to be further explored if this is to be considered as a potential scaling solution. Two items that immediately come to mind are:
1) The value formula - This proposal doesn't dive into the actual formula that will be use to assign peer values. The complexity requirements of the formula are unknown.
2) Accounting for "unknown" peers. There may need to be a mechanism that exists so that newly discovered peers have a way to prove themselves as trustworthy on nodes that already have a highly tested peer list.
