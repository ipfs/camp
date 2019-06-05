# Pinning and Garbage Collection

IPFS nodes treat the data they store like a cache, meaning that there is no guarantee that the data will continue to be stored. Pinning a CID tells an IPFS server that the data is important and mustn’t be thrown away.

Conversely, data which may be disposed of is considered "garbage" that may be tossed away at any time.

## Goal

<Define the goal for this poster: What information will it convey, demonstrate, etc.>

## Questions to Answer

<Series of questions to which the group should look answers for>

## Where to learn about it

<https://docs.ipfs.io/guides/concepts/pinning/>  
<https://godoc.org/github.com/ipfs/go-ipfs/pin#Pinner>