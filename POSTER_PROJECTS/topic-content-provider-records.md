# IPFS/Libp2p content routing

The IPFS routing system utilizes "content provider records" hosted on a distributed key-value store to resolve content providers. These records can include cryptographic proofs, ordering information, record freshness-guarantees; and allows nodes storing records to discard invalid, old, or "less good" records.

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

<Series of questions which the group should try to answer>

- How do nodes signal that they're providing content?
- What options and formats exist around this?
- What other routing methods are there?

## Where to learn about it
<https://github.com/ipfs/faq/issues/48#issuecomment-152917088>  
<https://github.com/libp2p/go-libp2p-kad-dht/blob/master/routing.go#L391>  
<https://github.com/libp2p/js-libp2p-kad-dht/blob/master/src/providers.js>  
<https://github.com/libp2p/js-libp2p/tree/master/examples/peer-and-content-routing>  
<https://github.com/libp2p/specs/blob/master/IPRS.md>
