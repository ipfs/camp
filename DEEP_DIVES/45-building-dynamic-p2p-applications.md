# Building Dynamic P2P Applications

IPFS and its associated technologies are mostly *static*. Radicle is an attempt to build 
a *dynamic* P2P web on top of IPFS; one which can host applications with the same abilities
of the centralized servers of today to receive inputs from various people or sources. 


## Goal

We've encountered a few difficulties in making this work smoothly. IPFS pubsub in particular
is quite slow. One big advantage for us would be to be able to control the network topology
better (to resemble for instance PolderCast). Since for us *IPFS* data *also* is more likely
to be available from people subscribing to the same topic, this would also increase IPFS
efficiency.

A smaller, but presumably easier, improvement would be to allow configuring how pubsub
dissemination works. For instance, messages that have been superseded by later ones would
not be disseminated. This should also benefit IPNS-over-pubsub.

## Requirements to consider

Messages should be able to be delivered to well-connected nodes in at most 1 second
for topics with under 10 connected subscribers, and at most 5 for ~1000 connected
subscribers

## Where to learn about it

- Radicle website: https://radicle.xyz/
- Radicle repo: https://github.com/radicle-dev/radicle
- PolderCast: https://hal.inria.fr/hal-01555561/document
