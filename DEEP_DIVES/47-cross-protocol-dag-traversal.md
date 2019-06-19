
# Generalized selectors and hyperknowledge

## Overview

I am developing an event-based data model for extended topic graphs. A key element is cross-protocol deep addressing of data elements. I would want to have a discussion with people interested in addressability, and especially a cross-protocol generalization of IPLD selectors to allow crossing mutable/immutable boundaries. Though I share the conviction that we need to focus more on immutable content, I think we need a hybrid scheme that can also handle references to objects that mutate rapidly, as in the case of high-throughput event streams.

In particular, I'm interested in a data model where resources are built of a multitude of events, on a massive event queue, and a small client will want a subset of events pertaining to a meaningful subset of resources. Notably, the resources are not necessarily objects on the queue themselves, though references to immutable snapshots could be introduced on the queue.

##Considerations

A reference to a resource can be rooted either in an immutable snapshot, in a mutable resource, or both. The key to bridging those worlds is the ability to resolve references to mutable data into references to immutable data, and conversely the immutable reference should be aware of a mutable source so it can be updated.
The reference to the service holding the mutable state of an immutable object is unique, and could itself be mutable, though those changes should be rare.

## Goal

So we would need to agree on:

1. Ways to point to immutable resources from the mutable reference. This will be protocol-dependent; IPNS does exactly that, so nothing to add there, but we need to allow other methods for highly volatile systems. (I will present an proof of concept for a high-throughput event queue backed by kafka but made visible on IPFS.)
2. Plugins to extract a reference to a mutable source from an immutable block, the way that IPLD extracts other immutable references. If this reference is not itself IPNS-based, it could be accessed through an IPNS layer, to avoid brittleness. (We need to distinguish those cases)
3. A generalized IPLD selector syntax, that is not necessarily rooted in a CID
4. Ensure that the selector syntax allows selecting a set of events based on conditions based on related references.

## Where to learn about it

[Hyperknowledge](https://gitlab.com/hyperknowledge/hyperknowledge) has some of the background and motivation for this, but this is about what we can develop together.
