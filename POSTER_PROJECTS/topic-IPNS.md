# Inter-Planetary Name System (IPNS)

IPNS is a system for creating and updating mutable links to IPFS content. Since objects in IPFS are content-addressed, their address changes every time their content does. 

A "name" in IPNS (example: `/ipns/website.ipfs.io`) points to the hash of a public key, which does not change itself, but can change what it references. Allowing for dynamic references (`/ipns/website.ipfs.io`), to static content (=> `/ipfs/QmPs9QHQvCPh758V3rFXGByJMS8Scu5YzBYTEkpnCKUxAL`).

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

- How does it interact with an IPFS node's keystore?
- How are references resolved?
- How does it compare with other dynamic data systems?
- What problem does IPNS solve?

## Where to learn about it

<https://docs.ipfs.io/guides/concepts/ipns/>
