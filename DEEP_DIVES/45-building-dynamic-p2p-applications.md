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

### Preamble

Using

### Problems

1. Network overlay isn't ideal for PubSub and other applications. Most
   obviously, nodes just currently connect to other nodes at random. This means
   they have to connect to many more nodes to have a high probability of
   dissemination (compare this to PolderCast), and send and receive more
   messages.
2. There's no obvious way to change overlays, short of forking IPFS or going
   down to libp2p. Radicle for example would benefit from more of a
   tree-structure than the ring-structure of PolderCast, since the priorities
   are: (a) getting the message to a specific node quickly; (b) getting a
   "large enough" number of other nodes to see the message eventually.
3. Messages in PubSub may become outdated. Think of IPNS-over-pubsub -
   disseminating an update you know is old (because you've seen a newer one)
   isn't useful. This increases network usage. The problem is compounds
   (multiplicatively) problem (1).
4. Again, there's no easy way to modify this without forking IPFS or going down
   to libp2p.

### Ideas for next steps

It seems IPFS already has a plugin system. It would be interesting to explore a
pluggable network overlay, as well as a pluggable generalization of the message
dissemination system currently available. (The current one relies on whether a
message has been seen before; the obvious generalization is taking a function
from message and recent-messages to bool indicating whether the message should
be disseminated. This would allow for recency, but also for
application-specific validity.)
