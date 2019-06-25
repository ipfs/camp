# 📃 Poster Projects

## Description

Poster Projects are one of the all time favorite IPFS events. These sessions are designed to propagate knowledge by having small teams of people explore one of the many pieces of the IPFS stack together, with the goal to understand it so well that they can present it to the whole group aided by a poster.

This session is inspired by the famous [Feynman Technique](https://collegeinfogeek.com/feynman-technique/), developed by Richard Feynman himself. The technique is simple and powerful, it suggests that for one to understand something well, they need to be able to explain it.

<img src=img/Bitswap.opt.jpg width=300 height=500> <img src=img/IPLD.opt.jpg width=300 height=500>  
[even more posters here](https://gist.github.com/djdv/f8712c70211848e7af23cd8d86c2b320)

These sessions are a lot of fun, and enable you to meet new friends, learn in depth DWeb topics and overall boost your knowledge as a builder.

[![](https://raw.githubusercontent.com/ipfs/camp/master/POSTER_PROJECTS/img/poster-projects-video-reel.jpg)](https://www.youtube.com/watch?v=Fpoo3iJjtcY)

## Instructions

### Overview

- Objective: Get people to learn some part of the code base in depth and through that process of learning, create materials that can be used by others to learn that part of the code base. Promote collaboration, knowledge transfer through deep dives and generation of materials that can be used by others in the future.
- Activity: These sessions consist on gathering people into small groups (2~4) to explore and understand in depth one of the selected topics. At the end of the session, everyone should have a poster ready (this will be fun!). At the end of each day, all of the poster groups will give a one-minute presentation of their poster.
- Outcome: The posters and discussions will then be converted into a blog post and published to <https://blog.ipfs.io/>.

### How

Have fun working in small groups to create posters and other documentation, then give a one-minute presentation of your work.

- Purpose: Get people to learn some part of the code base in depth and through that process of learning, create materials that can be used by others to learn that part of the code base.
- Length: 1:45h
- Details: During this session, use your time to learn some part of the code base in depth together with a small team of collaborators. Together, create a poster that others can use to learn about that part of the code base.

Some of the things to do during this session together with the other people on your poster team:

- **Review any formal documentation** relevant to the topic you've chosen
- **Find and read all the "pseudo-specs"** -- gather and read through all the partial documentation that's floating around. Discuss it together.
- **Look through the related code**
- **Look for relevant reference materials**: papers, recordings of talks, etc.
- **Clarify and test your understanding** by discussing all of this information
- **Interact with experts in the room** - people like Tech Leads will be circulating around the groups
- **Compile all of this information** into something that's easy to consume (a poster)
- **Plan how this information can be incorporated** into the existing documentation and repositories.
- **Choose who will present your poster.**
- _If you have time, submit a PR with your new info into the corresponding repository._

At the end of the day, each group will have 1 minute to present their poster. Make sure to choose in advance who will be presenting.

## How you will choose which poster to work on

Poster teams should have a maximum of 4 people and a minimum of 2. People will choose which poster to work on using this process:
- For this event we have a [list of topics](#topics) below.
- The meeting organizers will draw a spot on the ground for each of the poster topics.
- Before the start of the session, everyone must stand on the poster topic they want to work on. If more than five people try to join a topic, you must re-balance people to other topics.
- When everyone has chosen a topic and no topics have more than five people, write down the list of participants for that topic.
- Take a flip chart, markers, etc and work wherever you want to work.


## Topics
| # | Topic | Owner |
| :---: | --- | --- |
| 1 | [Unixfs](topic-unixfs.md) | @mikeal |
| 2 | [The design of the IPFS Repo](topic-IPFS-repo.md) | @dignifiedquire |
| 3 | [Swarming (concept)](topic-swarming.md) | @mburns |
| 4 | [Bitswap](topic-bitswap.md) | @jacobheun |
| 5 | [Pinning & GC on IPFS](topic-pinning-gc.md)| @Kubuxu |
| 6 | [HTTP gateways](topic-HTTP-gateways.md) | @autonome |
| 7 | [go-ipfs Infrastructure](topic-go-ipfs-infra.md) | @stebalien |
| 8 | [js-ipfs Infrastructure](topic-js-ipfs-infra.md) | @alanshaw |
| 9 | [Mutable File System (MFS)](topic-MFS.md) | @leshokunin |
| 10 | [KeyStore](topic-keystore.md) | @gozala |
| 11 | [IPFS Nodes](topic-IPFS-node.md) | @carsonfarmer |
| 12 | [Rendezvous Protocol](topic-rendezvous-protocol.md) | @stefanhans |
| 13 | [Libp2p Connection Flow](topic-libp2p.md) | @raulk |
| 14 | [Circuit Relay](topic-circuit-relay.md)| @ianopolous |
| 15 | [IPFS DHT](topic-IPFS-DHT.md) | @gpestana |
| 16 | [IPNS](topic-IPNS.md) | @aschmahmann |
| 17 | [IPFS/Libp2p content routing](topic-content-provider-records.md) | @bigs |
| 18 | [IPFS/libp2p PubSub](topic-pubsub.md) | @whyrusleeping |
| 19 | [IPFS Cluster](topic-cluster.md) | @meiqimichelle (& maybe @hsanjuan) |
| 20 | [IPFS HTTP API libs](topic-HTTP-API.md) | @hugomrdias |
| 21 | [Core API & ipfsx](topic-highlevel-apis.md) | @olizilla |
| 22 | [CRDTs](topic-CRDT.md) | @parkan |
| 23 | [PeerPad internals](topic-peerpad.md) | @jimpick |
| 24 | [Textile internals](topic-textile.md) | @andrewxhill |
| 25 | [IPLD Resolver](topic-IPLD-resolvers.md) | @lanzafame |
| 26 | [IPLD Selectors](topic-IPLD-selectors.md) | @maparent |
| 27 | [DAG walking facilities in IPLD](topic-DAG-walking-in-IPLD.md) | @warpfork |
| 28 | [Graphsync](topic-graphsync.md) | @b5 |
| 29 | [The intricacies of DWeb Addressing](topic-dweb-addressing.md) | @lidel |
| 30 | [NPM-on-IPFS](topic-NPM-on-IPFS.md) | @achingbrain|

## Topic description template
(If you would like to propose a topic, add them under `camp/POSTER_PROJECTS/topic-<topic-name>.md`)
```markdown
# <TOPIC NAME>

<Topic description: what it is, where it gets used, etc.>

## Questions to Answer

<Series of questions to which the group should look answers for>

## Where to learn about it

<List of websites, code repos, communities, notes, etc.>
```

Example:
```markdown
# Inter-Planetary File System (IPFS)

A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.

## Questions to Answer

What is IPFS? What can I use it for? How does it impact various peoples and tasks?

## Where to learn about it

https://ipfs.io/  
https://github.com/ipfs/  
https://docs.ipfs.io/#community  
IRC: #ipfs, #ipfs-dev
```
