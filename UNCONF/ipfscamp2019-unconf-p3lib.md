# p3lib and privacy preserving P2P networks


@gpestana @anorth, ... . We started by discussing the privacy attack surface of P2P
protocols such as DHT routing, peer assisted CDNs and decentralized discovery
mechanisms in general. We focused primarily on network level metadata leaks that
happen within collaborative networks of untrusted peers. We then discussed
some of the privacy enhancing protocols that 
can be used to solve or at least attenuate the metadata leaks mentioned before.
We covered the following ideas/protocols:

- [p3lib-fullrt](https://github.com/hashmatter/p3lib/tree/master/fullrt) which
  consists of requesting a full or partial routing table in the DHT routing
protocol in order to not disclose to network peers the node interest.

- [p3lib-sphinx](https://github.com/hashmatter/p3lib/tree/master/sphinx) how to
	delegate DHT lookups with onion routing using libp2p and ipfs. We also saw a
couple of demos about this protocol, one of them can be checked here
https://www.youtube.com/watch?v=j64C5CTb8J8  

- OctopusDHT for DHT lookup initiator privacy [1]

- We also bridfly discussed about using Private Information Retrieval [2] databases
  as a complement to DHT lookups and other decentralized discovery mechanisms in
which we can achieve provable privacy and security, even in an adversarial
context (ie. with untrusted PIR providers). Early implementation and specs can be now found at 
[p3lib-sinkhole](https://github.com/hashmatter/p3lib/tree/master/sinkhole)

We wrapped up discussing about the importance of
research and development of privacy preserving protocols for P2P networks.

**Actionable steps and ideas**:

- To benchmark privacy preserving protocols (e.g. onion routing) with libp2p and
  p3lib;
- Important to lay out **clearly** what are the privacy concerns in the dweb
  context;
- More research efforts and work is needed in this area!

## more references:

[0] [p3lib on github](https://github.com/hashmatter/)

[1]  Wang, Qiyan & Borisov, Nikita. (2012). Octopus: A secure and anonymous DHT
lookup. Proceedings - International Conference on Distributed Computing Systems.
10.1109/ICDCS.2012.78.

[2] https://en.wikipedia.org/wiki/Private_information_retrieval
