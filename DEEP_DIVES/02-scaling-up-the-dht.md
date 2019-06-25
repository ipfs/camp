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
