# Private content on IPFS
Can we have a private group chat implemented on IPFS?

Motivation (goals - solutions):
0. Don't expose content to the world on IPFS - encrypt before putting in IPFS
1. Avoid having to manually manage keys - use password based key derivation
2. Encrypt a single file - use a password based key derivation as in Minilock
3. Encrypt entire directory trees, hiding metadata - use cryptree as in Peergos
4. 1-1 Sharing - need asymmetric cryptography, Curve25519 (e.g. TweetNaCl), solved in Peergos
5. 1-N sharing - Repeat 3 for each target. O(N) or O(1) for multiple shares with a proxy capability
6. N-N sharing - hmmm. Essentially want a many-to-many version of Signal Protocol. People are working on such a thing, [Messaging Layer Security](https://github.com/mlswg/mls-architecture/blob/master/draft-ietf-mls-architecture.md) but it currently depends on a central reliable Delivery Service. Can we make this work in the decentralized setting? Can use Peergos primitives, e.g. sharing a file, and our PKI. Can it be a CRDT?

## Goal

See if we can use MLS directly in a decentralized setting. Possibly using Peergos primitives. 

## Requirements to consider

Same as in the MLS requirements we should scale to 50,000 member groups.

## Where to learn about it
https://github.com/Peergos/Peergos/issues/427

