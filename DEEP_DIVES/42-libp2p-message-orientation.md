# libp2p message orientation

libp2p is currently stream-oriented. We want to enable message-oriented communication (e.g. UDP). Help us envision what the APIs would look like, and how an application could simultaneously hold stream-based and message-based conversations with peers in the world via libp2p.

## Goal

By specifying a protocol and architecture for a message-passing layer for libp2p, we can drastically simplify the implementation of protocols like Kademlia, various PubSub implementations, and more! Such a system would be an alternative to the streaming capabilities of libp2p. We will explore implementation details and questions such as:

- Mechanisms for routing messages to relevant subsystems (named slots? route by protocol id?)
- What is the relationship of message orientation to multistream?
- Is guaranteed delivery (using vector clocks or something similar) a useful feature?
- Packet relaying
- NAT Traversal

## Requirements to consider

- Must operate seamlessly over streaming and packet-based transports
- Ideally leverages IPLD

## Where to learn about it

- [Messaging layer discussion](https://github.com/libp2p/specs/issues/71)
- [UDP in libp2p](https://github.com/libp2p/go-udp-transport/issues/3)
