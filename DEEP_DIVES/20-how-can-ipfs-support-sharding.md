# How can IPFS support sharding

How to best pin an arbitrary part of a DAG https://github.com/ipfs/go-ipfs/pull/5142

## Goal

Huge IPFS DAGs are likely to not fit in a single IPFS node. Additional datastore constraints (it is difficult to keep a non-sharded database of trillions of keys) may impose soft and hard limits on the amount of content that fits a single IPFS node. So...

***How can we shard data in IPFS?***

IPFS Cluster has code to split DAGs as they are added and create shards by generating an alternative DAG. We will explain how this works, the requirements and reasons why it is blocked waiting on some functionality from the ipfs daemon `Pinner`. Can we come up with better ways? Can we find a path to move forward? Sure we do!

## Requirements to consider

We should be able to shard arbitrarily large DAGs.

## Where to learn about it

https://cluster.ipfs.io/documentation/developer/rfcs/dag-sharding-rfc/

(warning, might be a little bit old and innacurate, but gives a good overview!)
