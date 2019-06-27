# Better NAT traversal so that Relay servers are a last (not first) resort

The current cost of running relay servers for IPFS is unsustainable. We need to implement NAT hole punching mechanisms in libp2p to reduce the dependence on relay servers by NAT’d hosts. TURN should only be a last resort, and we should be preferentially using STUN-inspired practices to break through NATs.

libp2p is primarily TCP-oriented, and hole punching has a success rate of ~60%, so when two peers find each other, they should be able to coordinate via a third peer to synchronise around a hole punching choreography.

Conducting such signalling in a decentralised fashion is one of the topics for this session. One approach is to use our existing relay infrastructure: as soon as peers establish a relayed connection, they'd immediately attempt to upgrade to a direct connection. Defining how that happens is a goal of this session.

Moreover, exposing such facilities through via ICE/WebRTC-compliant interfaces would expand the reach of this solution and open it up for novel, browser-based use cases.

One challenge we'll also address is the adaptation of certain protocols (such as `multistream/1.0.0`) to handle _TCP simultaneous opens_ gracefully. This event is a _first-class citizen_ in TCP hole punching, but currently libp2p connection bootstrapping will fail under this context.  We need to fix that.

## Goal

* Defining a solid decentralised, hole punching, attack-resistant STUN-like signalling protocol, to make TURN-like relay servers a last resort to work around NATs.
* Leveraging relay servers as a rendezvous point for signalling, but allowing any third party to act as a signaller for another peer.

## Requirements to consider

* Connection migration: the direct connection resulting from the upgrade must absorb the state of the abandoned relayed connection.
* _TCP simultaneous open_: Handling it in role-oriented protocols.
* Attack resistance: identifying, preventing and recovering from attacks, including, but not limited to, byzantine action.
* ICE/WebRTC compliant: Exposing an ICE/WebRTC-compliant interface for browsers to leverage this infrastructure.

## Where to learn about it

* [RFC: Direct Connection Upgrade through Relay](https://github.com/libp2p/specs/pull/173)
* [libp2p circuit relay specs](https://github.com/libp2p/specs/tree/master/relay)
* [RFC5389: Session Traversal Utilities for NAT (STUN)](https://tools.ietf.org/html/rfc5389)
* [RFC8445: Interactive Connectivity Establishment (ICE): A Protocol for Network Address Translator (NAT) Traversal](https://tools.ietf.org/html/rfc8445)
* [RFC6544: TCP Candidates with Interactive Connectivity Establishment (ICE)](https://tools.ietf.org/html/rfc6544)
