# Private content on IPFS
Can we have a private group chat implemented on IPFS?

Motivation (goals - solutions):
0. Don't expose content to the world on IPFS - encrypt before putting in IPFS
1. Avoid having to manually manage keys - use password based key derivation with scrypt(CostFactor>=17, r=8)
2. Encrypt a single file - use a password based key derivation as in Minilock
3. Encrypt entire directory trees, hiding metadata - use cryptree as in Peergos
4. 1-1 Sharing - need asymmetric cryptography, Curve25519 (e.g. TweetNaCl), solved in Peergos
5. 1-N sharing - Repeat 3 for each target. O(N) or O(1) for multiple shares with a proxy capability
6. N-N sharing - hmmm. Essentially want a many-to-many version of Signal Protocol. People are working on such a thing, [Messaging Layer Security](https://messaginglayersecurity.rocks/) but it currently depends on a central reliable Delivery Service. Can we make this work in the decentralized setting? Can use Peergos primitives, e.g. sharing a file, and our PKI. Can it be a CRDT?

## Goal

See if we can use [Messaging Layer Security](https://messaginglayersecurity.rocks/) directly in a decentralized setting. Possibly using Peergos primitives. 

## Requirements to consider

Same as in the MLS requirements we should scale to 50,000 member groups.

## Where to learn about it
* [MLS](https://messaginglayersecurity.rocks/)
* https://github.com/Peergos/Peergos/issues/427
* [TweetNaCl](https://tweetnacl.cr.yp.to/)
* [TweetNaCl in JS](https://github.com/dchest/tweetnacl-js)
* [TweetNaCl in Java](https://github.com/ianopolous/tweetnacl-java)
* [Scrypt](https://en.wikipedia.org/wiki/Scrypt)
* [Signal Protocol](https://en.wikipedia.org/wiki/Signal_Protocol)
* [Messaging Layer Security](https://github.com/mlswg/mls-architecture/blob/master/draft-ietf-mls-architecture.md)



## Notes
Q: Can we use MLS in an IPFS setting?
 - Tentative yes

* To handle prolonged network partitions
  * keep group state around for all epochs from the oldest one we think any member is still in
  
  
* eviction of absent/idle members
  * this could cause a network partition to result in a fork of the group?
  
* possible delivery services (DS):
  1. per member append only list of messages readable by other members ?
  
  
* need a way to deduce the epoch of every other member (e.g. tail of list in 1. )

* bare minimum for DS is causal order
