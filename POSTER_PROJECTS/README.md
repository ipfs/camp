# 📃 Poster Sessions

## Description

Poster Sessions are one of the all time favorite IPFS Events. These sessions are designed to propagate knowledge by having small teams of people explore one of the many pieces of the IPFS stack together, with the goal to understand it so well that they can present it to the whole group aided by a Poster.

This session is inspired by the famous [Feynman Technique](https://collegeinfogeek.com/feynman-technique/), developed by Richard Feynman himself. The technique is simple and powerful, it suggests that for one to understand something well, they need to be able to explain it.

<img src=img/Bitswap.opt.jpg width=300 height=500> <img src=img/IPLD.opt.jpg width=300 height=500>

These sessions are a lot of fun, it enables you to meet new friends, learn in depth DWeb topics and overall boost your knowledge as a builder.

<TODO: Insert video reel from how it went in the Dev Meetings>

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

| # | Topic | Description |
| :---: | --- | --- |
| 1 | UnixfsV1 | [unixfsv1](topic-unixfsv1.md) |
| 2 | UnixfsV2 | [unixfsv2](topic-unixfsv2.md) |
| 3 | Bitswap | [bitswap](topic-bitswap.md) |
| 4 | IPLD Resolver | The IPLD Resolver is the system that enables IPFS to be able to traverse through multiple data formats (Bitcoin, git, Ethereum, IPFS and others) |
| 5 | Mutable File System (MFS)| [MFS](topic-MFS.md) |
| 6 | PeerPad Capabilities System |  |
| 7 | Pinning & GC on IPFS | [pinning-gc](topic-pinning-gc.md) |
| 8 | Libp2p Connection Flow | What is the connection flow of a libp2p connection? What happens internally and why? (what is the libp2p-switch) |
| 9 | IPFS DHT | [IPFS-DHT](topic-IPFS-DHT.md) |
| 10 | The intricacies of DWeb Addressing | The challenges with the origin policy and all details to have in consideration when adding IPFS natively to Web Browsers resolution. Consider base58 -> base32 migrations, case sensitivity, browser vendors, etc. |
| 11 | KeyStore & Linked Data Key (aka Multikey) | Self describing keys. What kind of formats are there? How do we handle them all? What do we use them for? |
| 12 | The design of the IPFS Repo | What is the IPFS Repo? How does it store data? How can users store data in multiple backends (local fs, IndexedDB, S3 and so on) |
| 13 | DEX - The Importers and Exporters Project | Getting and formatting data into and out of IPFS. |
| 14 | IPFS/libp2p PubSub | Publisher-Subsciber message model. What implementations exist for this (floodsub, gossipsub)? How do they compare? What are uses of it? How does it interact with (our) other dynamic data systems? |
| 15 | NPM on IPFS | [NPM-on-IPFS](topic-NPM-on-IPFS.md) |
| 16 | InterPlanetary Test Lab | |
| 17 | CAR |  Content addressable archive(s). How does it work? What are some applications of it? |
| 18 | SECIO | Encryption method/protocol. How does it compare to alternatives (like TLS)? |
| 19 | Rendezvous Protocol | Peer discovery method. |
| 20 | Circuit Relay | Message relaying. What scenarios is this useful in / what problems does this solve? |
| 21 | DNSLink | Utilize DNS to point to IPFS data. |
| 22 | xTP | External Transport Protocol. How do IPFS nodes communicate with foreign protocols? Why would we need this? |
| 23 | Go-ds-crdt - Merkle CRDTs |  |
| 24 | DAG walking facilities in IPLD |  |
| 25 | Core API | Higher level API for interacting with IPFS nodes. |
| 26 | New Go HTTP API libs  | Lower level node API. |
| 27 | QUIC | Transport protocol. When and why is it useful to use QUIC over alternatives? What is the importance of good transports in general? |
| 28 | CRDTs in Peerpad |  |
| 29 | Stream Muxers | Libp2p mplex, yamux, SPDY etc. |
| 30 | Websocket Transport | Why Websockets exist? Why TCP and QUIC can be used everywhere? |
| 31 | Performance | Where and why can things be slow in a typical IPFS publish or request operation? |
| 32 | CPU | What are the most compute-heavy operations in a production IPFS node and why? |
| 33 | IPNS | Mutable references. How does it interact with the keystore? How do things get resolved? When to use it over other dynamic systems? |
| 34 | Routing | How does IPFS handle routing? (how does IPFS abstract peers via IDs instead of location?) What discovery options exist? (kad-dht, rendezvous). How do we take advantage of multiple discovery methods? |
| 35 | Graphsync | IPLD graph synchronizing. How does it relate to other systems (bitswap, IPLD)?  What benefit does it give us? |
| 36 | HTTP gateways | Interop bridge between HTTP <-> IPFS. How do I make one of these? Why would I want one? |
| 37 | CORAL | A non-KAD DHT. How does it compare? How would it benefit IPFS? |
| 38 | IPLD Selectors | Ways of expressing subsets of IPLD objects. |
| 39 | Community / World | How does/can IPFS impact various communities in practice? Which communities? Examples: anti-censorship efforts (Wikipedia mirrors), modernized elective systems (Thailand voting), data archival in general (RIP orphaned data), etc. |
| 40 | Swarming (concept) | Utilization of multiple peers for a single task. E.g. multisource file-transfer / segmented downloading. Speak on redundancy/resilience, efficiency, etc. Compare to centralized systems. |
| 41 | Bootstrapping | How does IPFS initialize itself? |
| 42 | IPFS Nodes | What makes an IPFS node an IPFS node? List specs that need to be implemented, examples of (non-PL) implementations (whole or individual components). |
| 43 | History? | Outline some of the historical changes in IPFS, such as the extraction of libp2p, changes in standards, etc. |

## Topic description template
(File these under `camp/POSTER_SESSIONS/TOPIC_NAME.md`)
```markdown
<TOPIC NAME>

<Topic description: what it is, where it gets used, etc.>

## Goal

<Define the goal for this poster: What information will it convey, demonstrate, etc.>

## Questions to Answer

<Series of questions to which the group should look answers for>

## Where to learn about it

<List of websites, code repos, communities, notes, etc.>
```

Example:
```markdown
<IPFS>

A peer-to-peer hypermedia protocol to make the web faster, safer, and more open.

## Goal

Broadly convey what IPFS is in concept, practice, and ideal.

## Questions to Answer

What is IPFS? What can I use it for? How does it impact various peoples and tasks?

## Where to learn about it

https://ipfs.io/
https://github.com/ipfs/
https://docs.ipfs.io/#community
IRC: #ipfs, #ipfs-dev
```