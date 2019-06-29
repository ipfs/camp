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
 
### Priority peer stack
Nodes will locally assign a peer "value" to each node it discovers. The value will be derived from the culmination of "positive" and "negative" interactions the node has experienced with that peer over time. If a node is easily reachable and behaves as expected when requests are sent to it, its value will rise over time. Negative interactions such as dial failures will cause the node's value to be downgraded.

Nodes in the IPFS network will prioritize staying connected to peers that accumulate high values. Over time this leads to nodes with low scores being deprioritized and being dropped from the swarm connections. 

