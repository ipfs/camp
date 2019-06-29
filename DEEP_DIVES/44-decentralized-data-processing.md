# Decentralized Data Processing

We have the means to store data in a decentralized way. Yet still a lot of decisions to be made when it comes to processing it. Let’s start by pointing out and discussing some of them:

- Should we process the data on a client or in a decentralized network?
- How to describe and store the algorithms for data processing?
- How to authorize changes for large amounts of data?
- How can we verify state transitions?

## Known approaches

- **Fat client (aka full node):** The client has all the data to perform the state transition locally, which essentially makes client a full node. The data itself can be downloaded from decentralized storage, or otherwise pulled from the rest of the network nodes.
- **Zero-knowledge proofs:** A full node can execute the program locally and then provide the client with proof that the computation was performed correctly.
- **Thin client + Merkle proofs:** For any pointer-based data structure it is possible to build a Merkle proof for the retrieval of a part of the data it stores. A client might download only fragments of the data it is interested in from the decentralized network, verify that the retrueval was correct, perform the computation, and upload results back to the network. As an example, this is an approach used by OrbitDB – a serverless database that stores data in IPFS and uses CRDTs for synchronization.

## Goal

- Develop a taxonomy for a variety of decentralized data processing use cases,
- Highlight the main algorithms for each use case,
- List existing ipfs features or protocols that make an algorithm viable,
- List what is missing.

## Requirements to consider

Process data efficiently (low cost, low latency) in a permissionless network.

## Where to learn about it

- https://www.inkandswitch.com/end-user-programming.html
- https://martin.kleppmann.com/2019/05/15/local-first-kaiserslautern.html
- https://martin.kleppmann.com/2019/05/15/encrypted-crdts.html
- https://www.inkandswitch.com/local-first.html

## Notes

https://github.com/ipfs/camp/files/3341983/IPFS.deep.dive.pdf
