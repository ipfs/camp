# IPID - Master key security and user-experience

[IDM](https://github.com/ipfs-shipyard/pm-idm) (Identity Manager) aims to support several [DIDs](https://w3c-ccg.github.io/did-spec/) methods and [IPID](https://did-ipid.github.io/ipid-did-method) was chosen as the first DID method to be integrated.

[IPID](https://did-ipid.github.io/ipid-did-method) [DIDs](https://w3c-ccg.github.io/did-spec/) are based on IPNS paths, like: `did:ipid:QmSrPmb...`. This means that the IPNS key is in complete control of the DID-Document and can never be rotated, otherwise the DID itself would change. From now on, lets call the IPNS key the Master Key.

For the reason mentioned above, the Master Key should be stored super securely and used as little as possible. This is usually made in a non-friendly way, like as a paper key. When you end up needing to manipulate the DID-Document, such as adding a public key to the DID-Document or revoking a public key from the DID-Document, you need the Master Key. But because it's stored safely, it's likely that you don't have it close to you, and you won't be able to finish what you trying to do. As a simple example, lets say that you are on the first day of your new job and you are setting up a new computer where you will be working on: you will need the Master Key to add a public key of that new computer.

## Goal

Come up with ideas and solutions to make the process of updating IPID DID-Documents more user-friendly, particularly when adding public keys. This would allow devices whose public keys are already in the DID-Document to add new ones by scanning QR codes or typing challenges, like a "pairing" alpha-numeric code.

Moreover, and if we have the time, come up with ideas for alternative ways to store the Master Key.. we all hate paper keys, don't we?

## Requirements to consider

- Should be performant
- Should avoid using blockchains as the main advantage of IPID is that it doesn't need one

## Where to learn about it

- [IdentityManager](https://github.com/ipfs-shipyard/pm-idm)
- [IdentityManager concept document](https://github.com/ipfs-shipyard/pm-idm/blob/master/docs/idm-concept.md)
- [DIDs](https://w3c-ccg.github.io/did-spec/)
- [IPID](https://did-ipid.github.io/ipid-did-method)
- [IPNS](https://docs.ipfs.io/guides/concepts/ipns/)

## Team

- André Cruz [@satazor](https://github.com/satazor)
- Masakazu Tanami [@tanamim](https://github.com/tanamim)
- Dima Starodubcev [@xhipster](https://github.com/xhipster)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_67)

## Notes

There are two key risks associated with key management:

- Stolen keys
- Lost keys

Any solution is a trade-off between simpicity and security. Our solution is to establish a multi-layered approach to reconstruct a master key, where the layers are:

- **Something you know**:
    - Memory based
    - Any set of pictures, videos, music or phrases that trigger your memory into the right answer
- **Something you have**:
    - Something stored with you in a physical device (such as a phone or laptop) or in any other form (such as in a paper or metal plate)
- **Something you are**:
    - Combination of fingerprint, iris, DNA, facial attributes, etc.
- **Something you delegated**:
    - Something you delegate to somebody you trust, like friends, family, attorneys or custody services

Then, we can leverage The M of N control policy to reconstruct the Master Key using the methods above. This is a just an idea that needs technical research for the viability of building an algorithm capable of achieving this.

Even if there's viability from the technical side of things, setting up all these different layers is complicated to users. We would need also conduct UI/UX research on how we could make the overall process accessible for everyone.
