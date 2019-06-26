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
| Topic | Owner | | Description |
| :--- | :---: | :---: | :--- |
| [Unixfs](topic-unixfs.md)                                        | <a href="https://github.com/mikeal"><img src="https://github.com/mikeal.png?size=200" alt="mikeal" width="100" /></a>                         | [@mikeal](https://github.com/mikeal)                 | Unixfs is the data format used to represent unix-like data in IPFS. |
| [The design of the IPFS Repo](topic-IPFS-repo.md)                | <a href="https://github.com/dignifiedquire"><img src="https://github.com/dignifiedquire.png?size=200" alt="dignifiedquire" width="100" /></a> | [@dignifiedquire](https://github.com/dignifiedquire) | A repo is the storage repository of an IPFS node. It is the subsystem that actually stores the data IPFS nodes use. |
| [Swarming (concept)](topic-swarming.md)                          | <a href="https://github.com/mburns"><img src="https://github.com/mburns.png?size=200" alt="mburns" width="100" /></a>                         | [@mburns](https://github.com/mburns)                 | Swarming is a software method that takes advantage of multiple peers (the "swarm") to fulfill a task which may be easily distributed. |
| [Bitswap](topic-bitswap.md)                                      | <a href="https://github.com/jacobheun"><img src="https://github.com/jacobheun.png?size=200" alt="jacobheun" width="100" /></a>                | [@jacobheun](https://github.com/jacobheun)           | Bitswap is the data trading module for IPFS. Its purpose is to request blocks from and send blocks to other peers in the network. |
| [Pinning & GC on IPFS](topic-pinning-gc.md)                      | <a href="https://github.com/Kubuxu"><img src="https://github.com/Kubuxu.png?size=200" alt="Kubuxu" width="100" /></a>                         | [@Kubuxu](https://github.com/Kubuxu)                 | IPFS nodes treat the data they store like a cache, meaning that there is no guarantee that the data will continue to be stored. Pinning a CID tells an IPFS server that the data is important and mustn’t be thrown away. |
| [HTTP gateways](topic-HTTP-gateways.md)                          | <a href="https://github.com/autonome"><img src="https://github.com/autonome.png?size=200" alt="autonome" width="100" /></a>                   | [@autonome](https://github.com/autonome)             | An IPFS Gateway acts as a bridge between traditional web browsers and IPFS. |
| [go-ipfs Infrastructure](topic-go-ipfs-infra.md)                 | <a href="https://github.com/stebalien"><img src="https://github.com/stebalien.png?size=200" alt="stebalien" width="100" /></a>                | [@stebalien](https://github.com/stebalien)           | This topic should cover what it takes to initialize a go-IPFS node, and connect it to a public P2P network. |
| [js-ipfs Infrastructure](topic-js-ipfs-infra.md)                 | <a href="https://github.com/alanshaw"><img src="https://github.com/alanshaw.png?size=200" alt="alanshaw" width="100" /></a>                   | [@alanshaw](https://github.com/alanshaw)             | This poster should cover what it takes to initialize a go-IPFS node, and connect it to a public P2P network. |
| [Mutable File System (MFS)](topic-MFS.md)                        | <a href="https://github.com/leshokunin"><img src="https://github.com/leshokunin.png?size=200" alt="leshokunin" width="100" /></a>             | [@leshokunin](https://github.com/leshokunin)         | Mutable File System (MFS) is a tool built into IPFS that lets you treat files like you would a normal name-based filesystem. |
| [KeyStore](topic-keystore.md)                                    | <a href="https://github.com/gozala"><img src="https://github.com/gozala.png?size=200" alt="gozala" width="100" /></a>                         | [@gozala](https://github.com/gozala)                 | A secure and simple way of storing and managing keypairs (for IPFS services). |
| [IPFS Nodes](topic-IPFS-node.md)                                 | <a href="https://github.com/carsonfarmer"><img src="https://github.com/carsonfarmer.png?size=200" alt="carsonfarmer" width="100" /></a>       | [@carsonfarmer](https://github.com/carsonfarmer)     | A general overview of what it means to be/implement an IPFS node.|
| [Rendezvous Protocol](topic-rendezvous-protocol.md)              | <a href="https://github.com/stefanhans"><img src="https://github.com/stefanhans.png?size=200" alt="stefanhans" width="100" /></a>             | [@stefanhans](https://github.com/stefanhans)         | The Rendezvous protocol is intended to provide a lightweight mechanism for generalized peer discovery. |
| [Libp2p Connection Flow](topic-libp2p.md)                        | <a href="https://github.com/raulk"><img src="https://github.com/raulk.png?size=200" alt="raulk" width="100" /></a>                            | [@raulk](https://github.com/raulk)                   | Libp2p uses a multitude of techniques and protocols to connect peers together. |
| [Circuit Relay](topic-circuit-relay.md)                          | <a href="https://github.com/ianopolous"><img src="https://github.com/ianopolous.png?size=200" alt="ianopolous" width="100" /></a>             | [@ianopolous](https://github.com/ianopolous)         | The circuit relay is a means to establish connectivity between libp2p nodes (e.g. IPFS nodes) that wouldn't otherwise be able to establish a direct connection to each other. |
| [IPFS DHT](topic-IPFS-DHT.md)                                    | <a href="https://github.com/gpestana"><img src="https://github.com/gpestana.png?size=200" alt="gpestana" width="100" /></a>                   | [@gpestana](https://github.com/gpestana)             | IPFS uses a Distributed Hash Table (DHT) to keep track of various types of data, such as content provider records. |
| [IPNS](topic-IPNS.md)                                            | <a href="https://github.com/aschmahmann"><img src="https://github.com/aschmahmann.png?size=200" alt="aschmahmann" width="100" /></a>          | [@aschmahmann](https://github.com/aschmahmann)       | IPNS is a system for creating and updating mutable links to IPFS content. |
| [IPFS/Libp2p content routing](topic-content-provider-records.md) | <a href="https://github.com/bigs"><img src="https://github.com/bigs.png?size=200" alt="bigs" width="100" /></a>                               | [@bigs](https://github.com/bigs)                     | The IPFS routing system utilizes "content provider records" hosted on a distributed key-value store to resolve content providers. |
| [IPFS/libp2p PubSub](topic-pubsub.md)                            | <a href="https://github.com/whyrusleeping"><img src="https://github.com/whyrusleeping.png?size=200" alt="whyrusleeping" width="100" /></a>    | [@whyrusleeping](https://github.com/whyrusleeping)   | Publish-Subscribe, called ‘pubsub’ for short, is a pattern often used to handle events in large-scale networks. |
| [IPFS Cluster](topic-cluster.md)                                 | <a href="https://github.com/meiqimichelle"><img src="https://github.com/meiqimichelle.png?size=200" alt="meiqimichelle" width="100" /></a>    | [@meiqimichelle](https://github.com/meiqimichelle)   | IPFS Cluster is a stand-alone application and a CLI client that allocates, replicates, and tracks pins across a cluster of IPFS daemons. |
| [IPFS HTTP API libs](topic-HTTP-API.md)                          | <a href="https://github.com/hugomrdias"><img src="https://github.com/hugomrdias.png?size=200" alt="hugomrdias" width="100" /></a>             | [@hugomrdias](https://github.com/hugomrdias)         | IPFS nodes expose an API that developers can use to quickly change between a local and a remote node without having to change their applications. |
| [Core API & ipfsx](topic-highlevel-apis.md)                      | <a href="https://github.com/olizilla"><img src="https://github.com/olizilla.png?size=200" alt="olizilla" width="100" /></a>                   | [@olizilla](https://github.com/olizilla)             | New API's that are similar to the HTTP APIs but are higher level and not dependant on a single IPC method. |
| [CRDTs](topic-CRDT.md)                                           | <a href="https://github.com/parkan"><img src="https://github.com/parkan.png?size=200" alt="parkan" width="100" /></a>                         | [@parkan](https://github.com/parkan)                 | A "Conflict-free replicated data type" is a data structure which can be replicated across multiple computers in a network, without conflicts! |
| [PeerPad internals](topic-peerpad.md)                            | <a href="https://github.com/jimpick"><img src="https://github.com/jimpick.png?size=200" alt="jimpick" width="100" /></a>                      | [@jimpick](https://github.com/jimpick)               | PeerPad is a decentralized editor that allows concurrent writing of text. |
| [Textile internals](topic-textile.md)                            | <a href="https://github.com/andrewxhill"><img src="https://github.com/andrewxhill.png?size=200" alt="andrewxhill" width="100" /></a>          | [@andrewxhill](https://github.com/andrewxhill)       | Textile is a set of tools and trust-less infrastructure for building censorship resistant and privacy preserving applications. |
| [IPLD Resolver](topic-IPLD-resolvers.md)                         | <a href="https://github.com/lanzafame"><img src="https://github.com/lanzafame.png?size=200" alt="lanzafame" width="100" /></a>                | [@lanzafame](https://github.com/lanzafame)           | IPLD resolvers handle IPLD formatted objects via a common interface, allowing for cross compatibility between formats and resolvers. |
| [IPLD Selectors](topic-IPLD-selectors.md)                        | <a href="https://github.com/maparent"><img src="https://github.com/maparent.png?size=200" alt="maparent" width="100" /></a>                   | [@maparent](https://github.com/maparent)             | IPLD Selectors are expressions that identify ("select") a subset of nodes in an IPLD dag. i.e. subsets of IPLD objects. |
| [DAG walking facilities in IPLD](topic-DAG-walking-in-IPLD.md)   | <a href="https://github.com/warpfork"><img src="https://github.com/warpfork.png?size=200" alt="warpfork" width="100" /></a>                   | [@warpfork](https://github.com/warpfork)             | The goal of IPLD is to enable decentralized data-structures that are universally addressable and linkable. |
| [Graphsync](topic-graphsync.md)                                  | <a href="https://github.com/b5"><img src="https://github.com/b5.png?size=200" alt="b5" width="100" /></a>                                     | [@b5](https://github.com/b5)                         | A protocol to synchronize graphs across peers. |
| [The intricacies of DWeb Addressing](topic-dweb-addressing.md)   | <a href="https://github.com/lidel"><img src="https://github.com/lidel.png?size=200" alt="lidel" width="100" /></a>                            | [@lidel](https://github.com/lidel)                   | Systems like IPFS use hashes of data to reference content by itself, rather than by an arbitrary location/name. With this comes compatability and human concerns around referencing data. |
| [NPM-on-IPFS](topic-NPM-on-IPFS.md)                              | <a href="https://github.com/achingbrain"><img src="https://github.com/achingbrain.png?size=200" alt="achingbrain" width="100" /></a>          | [@achingbrain](https://github.com/achingbrain)       | Let's take NPM and put it on IPFS. |

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
