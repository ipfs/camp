# Do not replicate lists - DNR

How to stop your node from replicating content due to take down notices or other reasons.

## Goal

An API proposal to allow an IPFS node to stop storing and replicating specific content.

## Requirements to consider

Ethical challenges:

* Bad people want to put bad bits on the network.
* People don’t want to see bad bits.
* Bad is subjective.

Technical challenges:

* Where do we implement blocking to not break the DHT?
* How do we implement blocking to not break websites?
* How do we not create an easily discoverable list of badness?
* How do we audit / update the known badness?

## Where to learn about it

- The original issue: https://github.com/ipfs/notes/issues/284
- Ian's proposal for content-deciders: https://github.com/ipfs/notes/issues/284
- Radiolab Podcast: https://www.wnycstudios.org/story/post-no-evil
- More facebook: https://www.theverge.com/2019/2/25/18229714/cognizant-facebook-content-moderator-interviews-trauma-working-conditions-arizona
- haveIbeenpwnd? email -> list of leaks your email has appeared

### Are there any existing solutions to similar problems?

- Content moderation
- ad-blockers - they maintain lists of urls
  - ublock origin
- PKI (gpg/pgp) revocation
- https://acoustid.org/ - audio fingerprint that is agnostic to bitrate/encoding/hash algo

## Team

* [@olizilla](https://github.com/olizilla)
* [@mburns](https://github.com/mburns)
* [@frankieb](https://github.com/frankieb)
* [@janjanovna](https://github.com/janjanovna)
* [@jnthnvctr](https://github.com/jnthnvctr)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_210)

## Notes

- lists imply authority (someone is manage the list)
- in ssb every particpant is providing a list ( strictly, a log of messages that you *do* want replicated )
- not one lists but many lists...
- lets not focus on the details of the lists.
- could be a simple tech
- content id?
- pinata - i would like a group of trusted gateways to publish to a communal list that we all deny if any one of us deny.


