# Replication protocol

How can we more quickly sync a DAG or part of a DAG between two nodes? Our current protocol is Bitswap, which operates at the block level. That means to traverse a DAG, we have to make several round trips because we need the contents of the block to explore it's links.

In this session, we'll explore potential alternatives to Bitswap, and the potential advantages, pitfalls, and challenges of each. We'll also review the current state of the art in replication in IPFS -- namely a protocol called GraphSync

## Audience

- Should have a basic understanding of MerkleDAGs, IPFS/IPLD terminology
- Interested in thinking through and understand problems in next generation IPFS data transfer

## Goal

- Understand the core data structures of IPLD, MerkleDAGs, etc, and the challenges in syncing them across networks
- Design a mock replication protocol together!
- Review the landscape of technologies and approaches for syncing graphs

## Requirements to consider

- How to we express what parts of a graph we want to sync?
- What do we do when a node has only a partial part of the graph we requested?
- How do we verify results from a remote peer in response to a query?
- How can we spread fetching a replication across multiple peers?

## Where to learn about it

[IPLD Data Model](https://github.com/ipld/specs/blob/master/data-model-layer/data-model.md)
[IPLD Selector Spec](https://github.com/ipld/specs/blob/master/block-layer/selectors/selectors.md)
[GraphSync Spec](https://github.com/ipld/specs/blob/master/block-layer/graphsync/graphsync.md)