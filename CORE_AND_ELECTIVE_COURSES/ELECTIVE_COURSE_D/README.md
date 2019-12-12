# `Elective D` Building DApps with Textile, the iCloud for the DWeb

> Decentralized app-development is still in its infancy, and has been notoriously difficult to get started with. That's where this workshop comes into play. Using real-world examples built on Textile's suite of developer tools, this workshop will explore the anatomy of a working DApp (IPFS Tag!) in a single, engaging session.

## Trainers

| **Benjamin Lupton**                                 	| **Carson Farmer**                                     	| **Andrew W. Hill**                                   	|
|-----------------------------------------------------	|-------------------------------------------------------	|------------------------------------------------------	|
| ![](https://avatars0.githubusercontent.com/u/61148) 	| ![](https://avatars3.githubusercontent.com/u/1220613) 	| ![](https://avatars2.githubusercontent.com/u/370259) 	|
| [@balupton](https://github.com/balupton)            	| [@carsonfarmer](https://github.com/carsonfarmer)      	| [@andrewxhill](https://github.com/andrewxhill)       	|

## What you will learn with this Course

The goal of this workshop is to introduce participants to tools and techniques that facilitate building real-world apps and libraries on top of IPFS. We will do this through the lens of real app development, starting with a simple p2p game (IPFS Tag). Using the Textile suite of developer tools, we will cover core concepts such as structured data and schemas, decentralized database handling via threads, identity, contacts, and peers, as well as various social interactions such as likes, comments, and sharing. By the end of the session, participants will have dissected a working DApp, and if they choose, extended it with their own custom interactions. We will also cover mobile app development to some degree, showcasing the ability to deploy IPFS-based apps on mobile devices. _You do not need to be familiar with mobile app development to attend this workshop, its just a fun application!_

While real-world app development is our goal, the workshop will also delve into the protocol-level details of the system. As we move from concept to implementation, participants to be able to 'pull back the layers' of the system they are building to get a better grasp of what is going on under the hood. This is critical for understanding, but also provides a way for our trainers to solicit feedback, explore new use-cases, and learn from workshop participants. We'd like to facilitate a two-way dialog between participants and trainers. As such, we will also reserve time for an open discussion/hacking session to explore additional development scenarios, extensions, and ideas together.

## Preparation for the course

### Slides and all materials

- [Slides as PDF](./Slides.pdf)
- [Slides and materials](https://github.com/textileio/ipfs-camp-2019)
- [Video recording](https://youtu.be/4r7_lOyv4W8)

### Requirements

Some knowledge of IPFS and DWeb concepts in general. Some development experience, though not necessarily mobile or DApps. A working laptop with a modern development setup (Nodejs, React, or even iOS would be great). That's about it. There will be working code for all examples and demos. The course will give you the opportunity to hack on Textile tooling using one of three platforms/languages: Go, Node.js, and Web Browsers. See the preparation section below for your respective choice.

### Installation steps

- Have your favorite code editor ready, if don't have one, we recommend [VSCode](https://code.visualstudio.com).

**Preparing for Workshop**

This stuff can be done in groups!

- Download and extract the [latest release](https://github.com/textileio/go-textile/releases/latest) for your OS and architecture (or use `wget` etc...)
- macOS and Linux
  - Extract the tarball (manually or via...)
  ```
  tar xvfz go-textile_0.5.3_{os}-amd64.tar.gz`)
  ```
  - Move `textile` anyplace in your `PATH` (or via...)
  ```
  ./install
  ```
- Windows
  - Extract the zip file and move `textile.exe` anyplace in your `PATH`

**Workshop Materials (optional)**

If you want the 'raw' workshop slides and code beforehand!

1. Have git installed, [https://git-scm.com/downloads](https://git-scm.com/downloads).
2. https://github.com/textileio/ipfs-camp-2019
3. Clone the repo
```
git clone https://github.com/textileio/ipfs-camp-2019
```

**Preparing for Hacking (optional)**

- [Node.js >= 10 installed + npm >= 6 installed.](https://nodejs.org/en/download/)
- Download or clone the code at https://github.com/textileio/ipfs-camp-2019 (`./workshop/demo-leaderboard`), `git clone https://github.com/textileio/ipfs-camp.git`.
- Install dependencies (`npm install`) and start the app (`npm run start`) by following the directions at https://github.com/textileio/ipfs-camp-2019/tree/master/workshop/demo-leaderboard.

**Hacking on Mobile App (optional)**

`TBA`
