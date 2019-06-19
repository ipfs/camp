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
