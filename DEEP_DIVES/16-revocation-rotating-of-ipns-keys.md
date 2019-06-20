# Revocation/Rotating of IPNS Keys

The idea of using a public key to identify mutable data is cool, but what happens when that key becomes compromised?

Peer to peer systems (IPNS, DAT, SSB, etc.) rely on public keys to identify peers as well as mutable data streams, but there doesn't seem to be a strong user story for what happens when those keys are deemed no longer secure (e.g. RSA-1024 no longer deemed secure, discovered bug in RNG used to generate keys, laptop stolen...). Most approaches involve some amoun

## Goal

- Good user experience around revocation and rotation of IPNS keys such that users are not discouraged from best practices around upgrading/rotating their keys
- Increased user security by not interacting with or loading IPNS content from compromised keys that the author has flagged as compromised

## Requirements to consider

- Eventually consistent (i.e. once a revocation makes eventually makes its way around the network it should be clear a revocation occurred)
- UX
  

## Where to learn about it

https://github.com/jonnycrunch/ipid/issues/4#issuecomment-503897437
