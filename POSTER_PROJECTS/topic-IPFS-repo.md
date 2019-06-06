# The IPFS Repo

A repo is the storage repository of an IPFS node. It is the subsystem that actually stores the data IPFS nodes use. All IPFS objects are stored in a repo (similar to git).

There are many possible repo implementations, depending on the storage media used. Most commonly, IPFS nodes use an "fs-repo".

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

- What is the IPFS Repo?
- How does it manage data?
- How can users store data in multiple backends?
- What backends are currently available (local fs, IndexedDB, S3, et al.)?

## Where to learn about it

<https://github.com/ipfs/specs/tree/master/repo>  
<https://godoc.org/github.com/ipfs/go-ipfs/repo>  
<https://github.com/ipfs/js-ipfs-repo>
