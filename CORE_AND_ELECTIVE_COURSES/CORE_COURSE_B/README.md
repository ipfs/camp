# `Core B` Solving distributed networking problems with libp2p

> In this course we will cover common problems encountered when developing distributed apps and ways we are able to solve them with libp2p. As we discuss these capabilities we will implement them in live coding exercises to see them in action.

## Trainers

| Cole Brown                                      | Jacob Heun                                             | Alex Potsides                                          |
|-------------------------------------------------------  |------------------------------------------------------  |------------------------------------------------------  |
| ![](https://avatars2.githubusercontent.com/u/213338)   | ![](https://avatars2.githubusercontent.com/u/639834)   | ![](https://avatars1.githubusercontent.com/u/665810)   |
| [@bigs](https://github.com/bigs)                      | [@jacobheun](https://github.com/jacobheun)             | [@achingbrain](https://github.com/achingbrain)         |

## What you will learn with this Course

In this course, attendees will build a libp2p application. The course will cover:
- Transport, Stream Muxer and Crypto Configuration
- Composition of multiaddrs
- Creating a custom protocol
- Peer discovery with Bootstrap, MDNS and DHT Random Walk
- Message broadcasting with Pubsub
- Leveraging protobuf to create versatile messaging
- Subnet discovery leveraging the DHT

## Preparation for the course

The course will give you the opportunity to build your application for one of three platforms/languages: Go, Node.js, and Web Browsers. See the preparation section below for your respective choice.

### Installation steps

- Have your favorite code editor ready, if don't have one, we recommend [VSCode](https://code.visualstudio.com)

**Preparing for Go track**
  - You need to have the Golanguage 1.12 compiler installed, please follow the instructions at https://golang.org/doc/install
  - Bonus: learn basic concepts on the [libp2p website](http://docs.libp2p.io/) and study the interfaces in [go-libp2p-core](https://github.com/libp2p/go-libp2p-core).

**Preparing for the JavaScript track**
  - Have git installed, [https://git-scm.com/downloads](https://git-scm.com/downloads).
  - [Node.js >= 10 installed + npm >= 6 installed.](https://nodejs.org/en/download/)
  - Download or clone the code at https://github.com/libp2p/js-libp2p-examples, `git clone https://github.com/libp2p/js-libp2p-examples.git`.

**Specific to Node.js**

  - Install dependencies by following the Setup directions at https://github.com/libp2p/js-libp2p-examples/tree/master/chat/nodejs#setup.

**Specific to Browsers**

 - Have the latest version of [Firefox](https://www.mozilla.org/firefox/new/), [Brave](https://brave.com/download/), **or** [Chrome](https://www.google.com/chrome/) installed. Firefox was tested the most during the building of this workshop, so we'd recommend having that installed just in case there is an issue with your preferred browser.
 - Install dependencies by following the Setup directions at https://github.com/libp2p/js-libp2p-examples/tree/master/chat/browser#setup.

**Windows Users**: If your npm config is not already set to support bash, you will need to do that for the Web Browser examples. Check out this [Stack Overflow Answer](https://stackoverflow.com/a/46006249) for how to do that. This will enable Parcel to correctly locate the appropriate, nested files.

## Course Materials
- View the [slide deck](https://docs.google.com/presentation/d/1a_BjIM4ORQchnMNjOMO-wCDW2VS5nXeKXIbWSEqf9jY/edit?usp=sharing) with speaker notes
- View the [Recording](https://youtu.be/Q4IH5rWEO-E)
