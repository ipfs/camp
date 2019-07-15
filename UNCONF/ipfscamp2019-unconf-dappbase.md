# Dappbase
> A Collaborative Firebase for Dapps

Hosted by: [@vasa-develop](https://github.com/vasa-develop)<br />
Dappbase Website: [dappbase.clusterlabs.io](https://dappbase.clusterlabs.io)


## Presentation

I made this presentation after the unconf. <br />
The purpose of the presentation is to explain the problem and an overview of how dappbase works.

[**Link to Presentation**](https://bit.ly/2JFH6eE)


## Problem Statement

I meet a lot of developers who ask me:

```
I want to build this X dapp. How can I build it?
```

After discussing more on what the app is going to do, we come up with an answer that usually looks like this:

```
Use 
Uport for Auth
IPFS for Storage
Ethereum for Core Logic
And the List GOES ON...
```

Well, that doesn't sound easy, right?

**The problem is that there is NO SINGLE PROJECT that has ALL that you NEED.**


## Proposed Solution

A **COLLABORATIVE PLATFORM**, which makes it easy to use **MULTIPLE PLATFORMS**.<br /> 
Plus you can also **ADD YOUR OWN PROJECTS** that **OTHERS CAN USE**.

Well, I know what you are thinking now...

![How Standards Proliferate](https://imgs.xkcd.com/comics/standards.png)

No. We are NOT building just another WALLED GARDEN that allows you to use only the features that we want you to add to your app.
<br />
**What we are trying to build is a shared platform that allows users to add their own projects that others can use.**

## How it works?

Our goal is to use generalized standards that allow a lot of projects to the platform. And while working IPFS stack for a while I realized that projects like [Libp2p](http://libp2p.io), [Multiformats](http://multiformats.io), [IPLD](http://ipld.io) provide a great base to start from.


The dappbase platform is divided into different sections:
- Authentication [WIP]
- Database [WIP]
- Storage [WIP]
- Hosting [FUNCTIONAL]
- Functions [COMINNG_SOON]
- Crashlytics [COMINNG_SOON]
- Analytics [COMINNG_SOON]
- Notifications [WIP]
- Ad Service [WIP]
- Much more [[ADD_YOUR_SUGGESSTIONS_HERE](https://forms.gle/ju8v9DQLz1oNXrFE8)]

### Authentication

For Authentication we use [**DID standards spec**](https://w3c-ccg.github.io/did-spec/) as our core specification.<br />
Any project that conforms with the DID spec can be listed in the Authentication section. <br />
There are a ton of projects out there like uport, blockstack, selfkey, Jolocom who provide there own DID methods enabling decetralized authentication. But this kind of approach leads to classic software usability problems.

![Classic Software Usability Problems](https://i.pinimg.com/originals/13/64/cc/1364cca87c3eea53849a5adf11b12507.png)

So, we allow all these projects to co-exist while still keeping them functional. We use [**IDM**](https://github.com/ipfs-shipyard/pm-idm) spec for managing multiple DIDs.


You can check out [**Authentication Section**](http://dappbase.clusterlabs.io/) in Dappbase.


### Storage

For Storage we use [**IPLD**](http://ipld.io) as out core specification.


There are a ton of decentralized Storage projects like IPFS(well, not just storage), Sia, Storj, Ethereum Swarm, MaidSafe, etc.<br />
The noticible thing to observe here is that all these projects use hash based data structures to store data. We use IPLD spec to traverse the data from any hash based data structure. You may also use multiple projects to store your data and then link the data in the different projects.

![That's Lit](https://media.giphy.com/media/jba8ucWVAhG9VcUkx9/giphy.gif)

You can check out [**Storage Section**](http://dappbase.clusterlabs.io/storage) in Dappbase.


### Ad Service

In web2 you have 3 parties in the advertisment ecosystem.<br />
First is the advertiser, who has an advertisement that he wants to publish.<br />
Second is the advertisement platform that helps advertisers to place their adds on their platforms in a targetted way, so the ads are seen by a specific set of users.<br />
And third is the users who see the advertisements.


Now the problem here is that the middle men, the advertisement platforms take a cut for displaying ads on their platform and the users don’t get anything for bieng bombarded by tens and hundreds of ads everyday.


So, what we do is that we replace the advertisement platform with the network of users itself.
Now, Let’s suppose all the users using the dapp form a network. Each user has surfs the app and the behaviour is tracked and recorded. All of this recorded behavioural data is stored with in the users device and is never sent out of the device. Now this data is reduced to some mathmatical vector which represents the user’s behaviour. <br />
Now, an advertiser somes with an ad, and he wants to target a specific demographic. He choses the user behaviour that he wants to target. These desired properties are also converted to a mathematical vector which represents an ideal target customer.<br />
Now, the advertiser publishes the ad on the network of users. Now this ad goes to every users device and checks if the user behavious vector is close to the advertiser’s desired vectors. If the vectors are close enough then the ad gets displayed.<br />
Using this way, we totally remove the need of a middle man to publish the ads. Here, the advertisers save the cut that they gave to the advertisment platform and the users can get some fee for allowing the ads to display.


## Checkout, Follow & Contribute

Dappbase is an Open Source Project Under [**Cluster Labs**](https://github.com/cluster-labs/)

Checkout our progress at [**Dappbase Repo**](https://github.com/cluster-labs/dappbase)