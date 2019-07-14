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
- Much more [[ADD_YOUR_SUGGESSTIONS_HERE](https://clusterlabs.io)]

### Authentication

For Authentication we use [**DID standards spec**](https://w3c-ccg.github.io/did-spec/) as our core specification.<br />
Any project that conforms with the DID spec can be listed in the Authentication section. 
