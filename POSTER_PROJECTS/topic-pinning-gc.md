# Pinning and Garbage Collection

IPFS nodes treat the data they store like a cache, meaning that there is no guarantee that the data will continue to be stored. Pinning a CID tells an IPFS server that the data is important and mustn’t be thrown away.

Conversely, data which may be disposed of is considered "garbage" that may be tossed away at any time.

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

- How does an IPFS node determine what is and isn't "garbage"?
- What are the effects of pinning a hash?

## Where to learn about it

<https://docs.ipfs.io/guides/concepts/pinning/>  
<https://godoc.org/github.com/ipfs/go-ipfs/pin#Pinner>
