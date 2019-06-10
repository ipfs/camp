# Private DHT

In "vanilla" DHT implementations (e.g. Kademlia), peer interactions leak a lot of information about who is in the network, who stores what files and who are the producers and consumers of content. This gives potential attackers a good picture of the network very easily and hinders anonymous and private interactions over P2P DHT overlay networks.
The open problem here is to improve privacy of DHT protocol.

## Goal

Improve DHT protocol's privacy without affecting performance and usability.

## Requirements to consider

- Anonymity for producers of content: tracking down who was the originator of content stored in the DHT should not be possible.
- Anonymity for consumers of content: nodes that request content from the DHT should not be linked to the requested content by external actors.
- Plausible deniability of the files hosted in the network nodes: when peers query for content in the DHT, they should not be able to identify which peers are storing the content.

## Where to learn about it
- https://github.com/gpestana/notes/issues/8
- https://github.com/libp2p/developer-meetings/issues/6
- https://github.com/ipfs/notes/issues/291
- https://www.youtube.com/watch?v=gnCJotMbEjw