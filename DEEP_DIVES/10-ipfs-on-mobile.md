# IPFS on Mobile

Increasingly, everyday computing is happening in mobile environments. At the same time, many features of IPFS and related technologies work best on an 'always-connected' network that simply doesn't exist in the mobile world. In this deep dive, we will explore the issues inherent to p2p systems operating in mobile environments, discuss some existing solutions, and hopefully outline a research/development agenda that will help catalyze a wave of new IPFS-based mobile solutions.

## Short description

What are the best practices and open questions regarding IPFS running on mobile devices?  What are the unique requirements/limitations for peer-to-peer connections in mobile environments? What optimizations are required to address these limitations now, and what improvements to the protocol/network can be made in the future to bootstrap the next (first?) wave of IPFS-based mobile development.

## Goal

Our goals will include exploring the state-of-the-art in mobile peer-to-peer (p2p) solutions, with a focus on IPFS-based examples. We will consider the core limitations of p2p interactions in mobile environments, and discuss what we can do to improve the current state. An ideal outcome of this session might include a set of guidelines or a research agenda that outlines the missing pieces and their possible solutions to improving IPFS on mobile.

## Requirements to consider

Mobile environments come with their own specific requirements to consider. Some of these requirements include:
- Limited compute, storage, bandwidth, and battery life
- Operating system limitations
  - Apps generally are sand-boxed, cannot run for long in the background, may be killed to preserve battery, cannot (or is difficult to) share data
- Current mobile OSes are highly centralized
  - App stores, remote notification systems, etc are all based around centralized systems and walled gardens
- User interactions on mobile are fundamentally different
  - Apps are generally only open long enough to complete a single interaction
  - Touch, tap, swipe, zoom
- Network topology is extremely dynamic
  - DHT updates are often not useful (no stable addresses)
  - Most likely running in client only mode
- Build issues abound
  - Cross-platform in mobile is even more difficult
  - Though it can, and is currently being, done (see links below)
- Should be scalable to millions of peers
- Should support real-time notifications (local and remote)
- Should interface seamlessly with desktop and server peers
- May require 'always on' support or a 'hybrid-style' network

## Where to learn about it

- [IPFS in mobile use case](https://github.com/ipfs/notes/issues/68) (open [`ipfs/notes`](https://github.com/ipfs/notes) ticket)
- [Low power mode](https://github.com/ipfs/go-ipfs/issues/4137)
- [Offline Message Queue](https://github.com/libp2p/notes/issues/2)
- [The rise of p2p payments on mobile](https://medium.com/n26-us/the-rise-of-peer-to-peer-p2p-payments-on-mobile-what-makes-it-such-a-crucial-feature-921355ba4ad8)
- [Textile Mobile](https://github.com/textileio/go-textile/tree/master/mobile)
  - [iOS Textile](https://github.com/textileio/ios-textile)
- [OpenBazaar](https://github.com/OpenBazaar/openbazaar-go)
- Android
  - [Android Textile](https://github.com/textileio/android-textile)
  - [Sweet IPFS](https://github.com/hazae41/sweet-ipfs)
  - [Android IPFS](https://github.com/Illinois-LCS/android-IPFS)
  - [IPFS Droid](https://github.com/ligi/IPFSDroid)
  - [Moin?](https://gitlab.com/remmer.wilts/threads-ipfs)

## Team

* [@carsonfarmer](https://github.com/carsonfarmer)
* [@aeddi](https://github.com/aeddi)
* [@codynhat](https://github.com/codynhat)
* [@makcanca](https://github.com/makcanca)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_89)

## Notes

### Key Takeaway

Key take home, is _not_ getting code to run, but rather, dealing with quirks of operating system.

### Key issues

- Network problems
- Limited resources
- Memory, CPU, battery
- iOS background stuff
- Moving targets
- Etc...

### Surprizing

- Compiling worked pretty well
- gomobile seems to be pretty magic

### Other

- Reviewed all the best practices and tips to run IPFS node on mobile
- Want to establish a set of guidelines

- Berty problems:
  - To much goroutines (app sometimes killed on iOS)
  - Need to optimize CPU and battery consumption

Mustafa:
- IPFS Cluster can be a solution because you can enter/quit the cluster anytime you want

Berty Antoine:
- We found a hack using voip notification on iOS to wake up the app more often

Textile Carson:
- If you app goes foreground then background pretty quickly will kill your connection, your daemon

### Some solutions

- In France, no port forwarding
- Depending on connection type, can check if mdns is available
- If in cellular mode, quic transport in libp2p, 
- Bluetooth, good range (200m), still same issues with other protocols in terms of run time
- Silent push notifications are possible but not ideal
