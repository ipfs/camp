# 🐋 Deep Dives

## Description

The Deep Dives format is designed to give all participants a taste of what it feels like to work on the big and meaty Open Problems by contributing directly to them in an intense design session - evaluating all the possible solutions, their advantages and shortcomings, and documenting the results.

This type of discussion is core to the genesis of IPFS. We’ve done multiple over the years which have yielded many valuable results such as IPLD, PubSub, GraphSync and other advancements to the original IPFS protocol.

These design sessions are not about explaining how things work, they were focused on finding the solution with the knowledge and resources we had available.

## Instructions

### Overview

- **Objective**: Deep knowledge transfer that only happens in synchronous interactions.
- **Activity**: In a group of max 4 people, dive deep on a complex technical design topic.
- **Outcome**: The output of each of these sessions would be a RFC like document (can be very raw) that describes the proposed solution (even if with known shortcomings), or it could be a map of all the important concepts, obstacles, and related topics you covered in the session.

### How

- **Duration**: 1:45h

On the day, this is how y'all will Deep Dive 🐋:

1. Large cards with [Deep Dive topics](#topics) will be displayed
1. You **choose a deep dive** to participate in and **take a slip** from the card
1. Groups assemble and the **topic owner explains the problem**
    1. Existing solutions should be briefly enumerated!
1. Groups discuss their topic
    1. New ideas are suggested 💭
    1. Groups **aim to come up one good solution**
        1. It can be a completely new solution or a change/fix to an existing one
1. After 1 hour, groups take a **10 minute break** (phew) ☕️
1. Groups reconvene and **send a PR to [ipfs/camp](https://github.com/ipfs/camp/tree/master/DEEP_DIVES) with their proposal**
    1. Didn't come up with any solutions?
        1. List your ideas, and why they weren't suitable so we can bootstrap future discussions
1. Groups **customise their slide for presenting their solution** at the graduation ceremony
1. Groups are free to iterate on their PR or their slide overnight

The next day (graduation day), this is what happens:

1. Each group gets **2 minutes to present a summary of your solution**
1. You get **one slide** in the shared slide deck
1. The best solution(s) win an award 🏆

### Topics

| Topic | Owner | | Description |
| :--- | :---: | :---: | :--- |
| [Scaling up the DHT 📦](./02-scaling-up-the-dht.md) | <a href="https://github.com/Kubuxu"><img src="https://github.com/Kubuxu.png?size=200" alt="Kubuxu" width="100" /></a> | **[@Kubuxu](https://github.com/Kubuxu)** | What can we do to optimise the performance of our DHT? Are there alternatives? |
| [IPID - Master key security and user-experience 📦](./05-ipid-master-key-ux.md) | <a href="https://github.com/satazor"><img src="https://github.com/satazor.png?size=200" alt="satazor" width="100" /></a> | **[@satazor](https://github.com/satazor)** | [IDM](https://github.com/ipfs-shipyard/pm-idm) (Identity Manager) aims to support several [DIDs](https://w3c-ccg.github.io/did-spec/) methods and [IPID](https://did-ipid.github.io/ipid-did-method) was chosen as the first DID method to be integrated. |
| [Package Managers: What Now, What Next? 📦](./09-package-managers-what-now-what-next.md) | <a href="https://github.com/jessicaschilling"><img src="https://github.com/jessicaschilling.png?size=200" alt="jessicaschilling" width="100" /></a> | **[@jessicaschilling](https://github.com/jessicaschilling)** | Community evaluation and ideation session to recap the current (as of late June) state of the IPFS-enabled package manager landscape, discuss happiness and pain points, and do some ideation/co-creation  around the direction of our next rounds of package manager efforts. |
| [IPFS on Mobile](./10-ipfs-on-mobile.md) | <a href="https://github.com/carsonfarmer"><img src="https://github.com/carsonfarmer.png?size=200" alt="carsonfarmer" width="100" /></a> | **[@carsonfarmer](https://github.com/carsonfarmer)** | Increasingly, everyday computing is happening in mobile environments. At the same time, many features of IPFS and related technologies work best on an 'always-connected' network that simply doesn't exist in the mobile world. In this deep dive, we will explore the issues inherent to p2p systems operating in mobile environments, discuss some existing solutions, and hopefully outline a research/development agenda that will help catalyze a wave of new IPFS-based mobile solutions. |
| [Private content on IPFS 📦](./11-private-content-on-ipfs.md) | <a href="https://github.com/ianopolous"><img src="https://github.com/ianopolous.png?size=200" alt="ianopolous" width="100" /></a> | **[@ianopolous](https://github.com/ianopolous)** | Can we have a private group chat implemented on IPFS? |
| [Building the IPFS Community](./12-building-the-ipfs-community.md) | <a href="https://github.com/stefanhans"><img src="https://github.com/stefanhans.png?size=200" alt="stefanhans" width="100" /></a> | **[@stefanhans](https://github.com/stefanhans)** | Community, evangelism, engagement, on ramp. |
| [IPFS for websites (static, dynamic, search, etc)](./13-ipfs-for-websites-static-dynamic-search-etc.md) | <a href="https://github.com/autonome"><img src="https://github.com/autonome.png?size=200" alt="dietrich" width="100" /></a> | **[@autonome](https://github.com/autonome)** | What are the best practices and open questions for using IPFS for static / dynamic websites? What about indexing and searching? ||
| [Revocation/Rotating of IPNS Keys](./16-revocation-rotating-of-ipns-keys.md) | <a href="https://github.com/aschmahmann"><img src="https://github.com/aschmahmann.png?size=200" alt="aschmahmann" width="100" /></a> | **[@aschmahmann](https://github.com/aschmahmann)** | The idea of using a public key to identify mutable data is cool, but what happens when that key becomes compromised? |
| [Connection management](./23-connection-management.md) | <a href="https://github.com/jacobheun"><img src="https://github.com/jacobheun.png?size=200" alt="jacobheun" width="100" /></a> | **[@jacobheun](https://github.com/jacobheun)** | How can we better manage connections in libp2p to create stable overlays and reduce the impact on connection resource consumption? |
| [Replication protocol 📦](./24-replication-protocol.md) | <a href="https://github.com/hannahhoward"><img src="https://github.com/hannahhoward.png?size=200" alt="hannahhoward" width="100" /></a> | **[@hannahhoward](https://github.com/hannahhoward)** | How can we more quickly sync a DAG or part of a DAG between two nodes? A compliment to bitswap, affectionately overloaded as GraphSync |
| [Do not replicate lists - DNR](./25-do-not-replicate-lists-dnr.md) | <a href="https://github.com/olizilla"><img src="https://github.com/olizilla.png?size=200" alt="olizilla" width="100" /></a> | **[@olizilla](https://github.com/olizilla)** | How to stop your node from replicating content due to take down notices or other reasons |
| [Fast IPNS 📦](./26-fast-ipns.md) | <a href="https://github.com/hugomrdias"><img src="https://github.com/hugomrdias.png?size=200" alt="hugomrdias" width="100" /></a> | **[@hugomrdias](https://github.com/hugomrdias)** | How to increase the IPNS resolution speed |
| [IPFS Education and Documentation](./30-ipfs-education-and-documentation.md) | <a href="https://github.com/meiqimichelle"><img src="https://github.com/meiqimichelle.png?size=200" alt="meiqimichelle" width="100" /></a> | **[@meiqimichelle](https://github.com/meiqimichelle)** | What are the biggest improvements we can make to documentation for IPFS? |
| [Mounting an IPFS filesystem 📦](./31-mounting-an-ipfs-filesystem.md) | <a href="https://github.com/djdv"><img src="https://github.com/djdv.png?size=200" alt="djdv" width="100" /></a> | **[@djdv](https://github.com/djdv)** | Is there a way to efficiently mount IPFS as a filesystem? FUSE support is [here](https://github.com/ipfs/go-ipfs/blob/v0.4.21-rc3/docs/fuse.md). What are current limitations, challenges? What needs to happen to enable mounting of MFS? WebDAV is often used in network storage drives, and mainstream operating systems come with native support for mounting WebDAV as drives. It could supersede Writable Gateway and create a surface for interop with apps that provide built-in client-side support for WebDAV. https://github.com/ipfs/in-web-browsers/issues/146 |
| [IPNS link rot](./34-ipns-link-rot.md) | <a href="https://github.com/alanshaw"><img src="https://github.com/alanshaw.png?size=200" alt="alanshaw" width="100" /></a> | **[@alanshaw](https://github.com/alanshaw)** | Right now, IPNS needs to be refreshed by original publisher every day, otherwise it stops working. There should be a way to pin IPNS address so that other peers keep refreshing the last valid entry when original node goes offline, keeping the last version alive even if the original publisher disappears forever. |
| [Deterministic CIDs! Reproducible File Imports! Verifable HTTP Gateways!](./35-deterministic-cids-reproducible-file-imports-verifable-http-gateways.md) | <a href="https://github.com/lidel"><img src="https://github.com/lidel.png?size=200" alt="lidel" width="100" /></a> | **[@lidel](https://github.com/lidel)** | How to deterministically get the same CID for the same data, even if ipfs.add defaults change? How can we validate data read via HTTP Gateway without running full IPFS node? https://github.com/ipfs/roadmap/issues/19#issuecomment-494529255 https://github.com/ipfs/in-web-browsers/issues/128 |
| [IPFS in Web Workers](./37-ipfs-in-web-workers.md) | <a href="https://github.com/gozala"><img src="https://github.com/gozala.png?size=200" alt="gozala" width="100" /></a> | **[@gozala](https://github.com/gozala)** | Where we are, limitations, known problems. https://github.com/ipfs/in-web-browsers/issues/55 |
| [UnixFS v2 📦](./38-unixfs-v2.md) | <a href="https://github.com/mikeal"><img src="https://github.com/mikeal.png?size=200" alt="mikeal" width="100" /></a> | **[@mikeal](https://github.com/mikeal)** | https://github.com/ipfs/unixfs-v2/blob/master/SPEC.md, https://github.com/ipfs/roadmap/issues/19 |
| [Using CRDTs to build real-time collaborative DApps](./39-using-crdts-to-build-real-time-collaborative-dapps.md) | <a href="https://github.com/jimpick"><img src="https://github.com/jimpick.png?size=200" alt="jimpick" width="100" /></a> | **[@jimpick](https://github.com/jimpick)** | What are the hurdles to using CRDTs in dapps with IPFS? How can we make peer-base easier to understand and use? |
| [Better NAT traversal so that Relay servers are a last (not first) resort](./40-better-nat-traversal-so-that-relay-servers-are-a-last-not-first-resort.md) | <a href="https://github.com/raulk"><img src="https://github.com/raulk.png?size=200" alt="raulk" width="100" /></a> | **[@raulk](https://github.com/raulk)** | The current cost of running relay servers for IPFS is unsustainable.  We need to implement better NAT hole punching mechanisms in libp2p to reduce the usage of relay servers by NAT’d hosts.  TCP hole punching has a success rate of ~60%, so we should be preferentially hole punching.  TCP simultaneous open is one example.  STUN servers are another example; yet another is making every non-NATed host in a libp2p network a relay node. |
| [libp2p message orientation](./42-libp2p-message-orientation.md) | <a href="https://github.com/bigs"><img src="https://github.com/bigs.png?size=200" alt="bigs" width="100" /></a> | **[@bigs](https://github.com/bigs)** | libp2p is currently stream-oriented. We want to enable message-oriented communication (e.g. UDP). Help us envision what the APIs would look like, and how an application could simultaneously hold stream-based and message-based conversations with peers in the world via libp2p. |
| [IPFS metrics and usage statistics 📦](./43-ipfs-metrics-and-usage-statistics.md) | <a href="https://github.com/lanzafame"><img src="https://github.com/lanzafame.png?size=200" alt="lanzafame" width="100" /></a> | **[@lanzafame](https://github.com/lanzafame)** | How to collect telemetry like application metrics and usage in a distributed world |
| [Decentralized Data Processing](./44-decentralized-data-processing.md) | <a href="https://github.com/alari"><img src="https://github.com/alari.png?size=200" alt="alari" width="100" /></a> | **[@alari](https://github.com/alari)** | How could we process large amounts of data in permissionless networks? Use cases, verifiable state transitions, aggregations and bulk updates, etc. |
| [Building Dynamic P2P Applications](./45-building-dynamic-p2p-applications.md) | <a href="https://github.com/jkarni"><img src="https://github.com/jkarni.png?size=200" alt="jkarni" width="100" /></a> | **[@jkarni](https://github.com/jkarni)** | IPFS and its associated technologies are mostly static. Radicle is an attempt to build a dynamic P2P web on top of IPFS; one which can host applications with the same abilities of the centralized servers of today to receive inputs from various people or sources. |
| [Better file chunking 📦](./46-better-file-chunking.md) | <a href="https://github.com/mib-kd743naq"><img src="https://github.com/mib-kd743naq.png?size=200" alt="mib-kd743naq" width="100" /></a> | **[@mib-kd743naq](https://github.com/mib-kd743naq)** | Within the IPFS stack/ecosystem, just as within computing as a whole, an uncompressed stream of untagged octets is a fundamental unit of exchange. As a general-purpose data storage system IPFS needs to handle an unbounded variety of content represented by such streams. Handling the maximum amount of this variety efficiently ( ideally by default ) would likely have an outsized impact on the future adoption of IPFS as a long-term data interchange medium/format. |
| [Cross-protocol DAG traversal](./47-cross-protocol-dag-traversal.md) | <a href="https://github.com/maparent"><img src="https://github.com/maparent.png?size=200" alt="maparent" width="100" /></a> | **[@maparent](https://github.com/maparent)** | Extend IPLD to cross between immutable and mutable references |
| [Design Patterns for DWeb Apps](./48-design-patterns-for-dweb-apps.md) | <a href="https://github.com/leshokunin"><img src="https://github.com/leshokunin.png?size=200" alt="leshokunin" width="100" /></a> | **[@leshokunin](https://github.com/leshokunin)** | Textile, lowered the permission and roles system from ~15 methods to 2. Also did that on a number of large scale apps throughout the years. |

**Note**: topics relevant to package managers have a 📦 suffix.

### Topic description template

Use this template to create your one-pager description about your topic. Send a PR to https://github.com/ipfs/camp/tree/master/DEEP_DIVES with your topic description page e.g. `FAST_IPNS.md`

```markdown
# <Deep Dive Topic NAME>

<Short summary of topic including Open Problem(s) to solve>

## Goal

<Define what we would get if the Open Problem(s) are solved for this Deep Dive>

## Requirements to consider

<Do we have requirements (i.e. work with 1MM nodes)?>

## Where to learn about it

<List of talks, links to github issues, code, notes and so on>
```
