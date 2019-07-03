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


## Team

* [@bigs](https://github.com/bigs)
* [@Wondertan](https://github.com/Wondertan)
* [@joaosantos15](https://github.com/joaosantos15)
* [@gpestana](https://github.com/gpestana)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_331)

## Notes

### Overview

Our explorations of message orientation were fruitful! UDP presents a signicant
departure from the semantics of streams, and lip2p support for it reflects that.
Message transports are generally connectionless, even if they depend on
connections in their underlying implementations. Ultimately, a peer cares about
sending messages for a protocol to peers, and receiving messages for protocols.
At the top level, they can register message callbacks for protocols and send
messages to a peer on a protocol

As we traverse the stack lower, things get more complicated! The transports no
longer have a notion of connections, but sockets instead. Each message is
addressed, rather than being sent along a connection that is tied to an address.
Furthermore, multiplexing packets is *much* simpler. We've sketched a simple
packet multiplexer that can be a jumping off point. This way, one bound socket
can field messages from many peers for many protocols.

Packet transports can be reliable or unreliable. We will have to find some way
of surfacing reliability to the end user, so they can be sure their messages
get the delivery guarantees they need.

When sending messages, we will try to send the message across all transports we
for which we have an address for our peer. We will eventually consolidate to a
single transport after receiving a packet from a peer with an ACK fequal to one
of the transportIds provided in an Init message.

### Multipacket

We began experimenting with ideas for a simple packet multiplexer based on a
simple binary packet "frame". This protocol would perform a dynamic negotiation
of protocol IDs, similar to @stebalien's multistream/dynamic. Our protocol
consists of the following messages:

```
// Init starts communication on a protocol. These streams are all
// unidirectional. It establishes that the corresponding peer will refert to
// "protocol" as "protocolInt" in continuations.
Init {
    byte type = INIT
    uint16 transportId
    varint protocolStringLength
    protocol string
    uint16 protocolInt
    bytes message // remaining bytes are the message payload
}

// Acknowledged lets the peer know we prefer this transport
Acknowledged {
    byte type = ACK
    uint16 transportId
}

// Continuation continues communications on a stream
Continuation {
    byte type = CONTINUATION
    uint16 protocolInt
    bytes message // remaining bytes are the message payload
}

// Reset represents a general rejection of a protocol
Reset {
    byte type = RESET
    uint16 protocolInt
}
```

### Interface sketches

```golang
package msgnet

import (
	"io"

	"github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/peerstore"
	"github.com/libp2p/go-libp2p-core/protocol"
	"github.com/multiformats/go-multiaddr"
)

// MessageHost going to be embedded in to the regular Host
type MessageHost interface {

	// SendMessage find or creates socket session for provided peer
	// and protocol and sends message
	SendMessage(peer peer.ID, id protocol.ID) (int, error)

	// SetMessageHandler registers callback for incoming messages for protocol
	SetMessageHandler(proto string, handler func(*Message))

	// RemoveMessageHandler removes handler for protocol
	RemoveMessageHandler(id protocol.ID)
}

// MessageNetwork networking analog for packet oriented Network
// Manages Sockets and Transports
type MessageNetwork interface {

	// SendMessage find or creates socket session for provided peer
	// and protocol and sends message
	SendMessage(peer peer.ID, id protocol.ID) (int, error)

	// SetMessageHandler registers callback for incoming messages for protocol
	SetMessageHandler(proto string, handler func(*Message))

	// RemoveMessageHandler removes handler for protocol
	RemoveMessageHandler(id protocol.ID)

	// Listen opens Socket and binds it to the multiaddress
	Listen(multiaddr.Multiaddr) error

	// ClosePeer resets all the sessions associated with the peer
	ClosePeer(peer.ID) error

	HasSession(id peer.ID) bool
	Peers() []peer.ID
	Sockets() []Socket
	Sessions(peer.ID) []SocketSession
	Transports() []MessageTransport
	Peerstore() peerstore.Peerstore
	LocalPeer() peer.ID
	Close() error
}

// MessageTransport is a Transport analog for packet oriented Transports
type MessageTransport interface {

	// Open opens Socket
	Open() (Socket, error)

	// ...
}

// Socket is the lowest level interface for sending and receiving packets
type Socket interface {
	io.Closer

	// ReadMessage reads message from Socket
	// returns the sender in addition to the message
	ReadMessage([]byte) (multiaddr.Multiaddr, int, error)

	// WriteMessage writes message to an address through the Socket
	WriteMessage([]byte, multiaddr.Multiaddr) (int, error)

	// Listen bind Socket to the given address
	Listen(multiaddr.Multiaddr) error

	// Transport returns MessageTransport which created the Socket
	Transport() MessageTransport
}

// SessionedSocket wraps the Socket with Session multiplexing feature
type SessionedSocket interface {
	Socket

	// NewSession creates SocketSession with given peer for specific protocol
	// along with applying the callback for new Messages in the Session
	NewSession(protocol.ID, peer.AddrInfo, func(*Message)) (SocketSession, error)
}

// SocketSession is the Stream analog for packet oriented Transports
// It provides message multiplexing level on top of Socket
type SocketSession interface {
	io.Closer

	// SendMessage pushes Message to the Session
	SendMessage(Message) error

	// Protocol returns protocol of the Session
	Protocol() protocol.ID

	// Remote returns information associated with remote peer
	Remote() peer.AddrInfo

	// Socket returns Socket which created the Session
	Socket() SessionedSocket
}

type Message struct {
	Data     []byte
	From     peer.ID
	Protocol protocol.ID
}
```
