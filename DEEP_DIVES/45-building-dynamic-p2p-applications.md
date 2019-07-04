# Building Dynamic P2P Applications

IPFS and its associated technologies are mostly *static*. Radicle is an attempt to build
a *dynamic* P2P web on top of IPFS; one which can host applications with the same abilities
of the centralized servers of today to receive inputs from various people or sources.


## Goal

We've encountered a few difficulties in making this work smoothly. IPFS pubsub in particular
is quite slow - messages take a few seconds to be received, even for topic-sizes where the
number of hops could in theory be quite small. One big advantage for us would be to be able
to control the network topology better (to resemble for instance PolderCast). Since for us
*IPFS* data *also* is more likely to be available from people subscribing to the same topic,
this would also increase IPFS efficiency.

A smaller, but presumably easier, improvement would be to allow configuring how pubsub
dissemination works. For instance, messages that have been superseded by later ones would
not be disseminated. This should also benefit IPNS-over-pubsub.

Another difficulty we've had is having to wait for IPNS/DHT updates in order to
consider a write succesful. Non-IPNS-key-owners shouldn't have to wait; better
would be if they were given by the key-owner, as a response to writes, the
*raw* content of the DHT update. In our system, that's enough to guarantee that
the write will happen (or the key-owner will be caught forking). But we've
found no easy way to get that data.

Moreover, ideally we would have a somewhat more pluggable DHT, since for us
the entries are *either* standard signed CIDs (IPNS), *or* a Merkle proof that
the relevant key-owner misbehaved.

## Requirements to consider

Messages should be able to be delivered to well-connected nodes in at most 1 second
for topics with under 10 connected subscribers, and at most 5 for ~1000 connected
subscribers

## Preparation

It will be helpful to have radicle installed. How to do so is described [here](https://radicle.xyz/docs/index.html#installation-setup)

## Where to learn about it

- Radicle website: https://radicle.xyz/
- Radicle repo: https://github.com/radicle-dev/radicle
- PolderCast: https://hal.inria.fr/hal-01555561/document
- Floodsub spec: https://github.com/libp2p/specs/tree/master/pubsub
- Pubsub based on Epidemic Broadcast Trees: https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/episub.md
- Pubsub research: https://github.com/libp2p/research-pubsub

## Team

* [@jkarni](https://github.com/jkarni)
* [@avras](https://github.com/avras)
* [@guoliu](https://github.com/guoliu)
* [@glouvigny](https://github.com/glouvigny)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_364)

## Notes

TODO
