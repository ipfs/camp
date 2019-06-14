# Connection Management

When you lose the server/client roles and networks become collaborative, the volume of peering increases, and so does connection count. This can kill residential routers. We have a rudimentary connection manager that keeps connection count within bounds, but we are conceptualizing connection manager v2 with things like protocol quotas, burst modelling, and lazy scoring.

In addition, how can we prioritize connections so that important connections are not dropped and important dials happen more quickly? `ipfs swarm friend add <addr> - stay connected as long as possible, don't kill connections, reconnect on failure`. _Right now_ we add the cluster nodes to the gateway nodes (`swarm connect`) every minute.

Help us navigate the design choices we have to make!

## Goal

Optimizing Connection Management can help us create a more stable backbone for distributed networking to enable more efficient and effective network queries. If we are able to create long standing connections with valuable peers and quickly prune connections that are no longer needed, we can create a balance that allows nodes to operate optimally.

- Maintaining connection overlays to peers we share common protocols with could significantly improve query times.
  - Pubsub nodes with similar topics could greatly reduce message propagation time.
- Quick pruning of unneeded connections would improve resource consumption across the network.
- A negotiation mechanism could improve the networks ability to self heal, by shifting overlays to handle fluctuations in demand.
- Protocol quotas could prevent subsystems from starving one another of connections (pubsub vs DHT).
- Burst modelling could lower cpu cycles spent on creating/pruning connections.

## Requirements to consider

- The system should be scalable on a network with 1M+ nodes
- The system should be implementable by low resource and high resource nodes (browser/IOT devices vs XL servers)
- Subsystems should not be able to starve other systems
- It should allow for quick, short lived connections to support things like DHT queries
- It should be polite. Avoid redial flooding when connections are pruned.

## Where to learn about it

- [Connection Manager V2 WIP Spec][https://github.com/libp2p/specs/pull/161]
- [Rethinking the PeerStore](https://github.com/libp2p/specs/issues/164)
- [Priority Peers, js-libp2p](https://github.com/libp2p/js-libp2p/issues/369)
- [Router Killing, go-ipfs](https://github.com/ipfs/go-ipfs/issues/3320)
