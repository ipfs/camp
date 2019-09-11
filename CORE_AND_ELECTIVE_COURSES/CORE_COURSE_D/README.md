# `Core D` The lifecycle of data in IPFS

> In this course we will cover how IPFS deals with data. This would include providing(share), pinning(store) and blocking(delete) data.

## Course materials

View the slide deck:
- [Google Slides with speaker notes](https://docs.google.com/presentation/d/1UOX-a1lCxi-LOyEOe9VEFRcxg_j93Xkywwa4Y95TJaw/edit?usp=sharing)
- [PDF](https://github.com/ipfs/camp/blob/master/CORE_AND_ELECTIVE_COURSES/CORE_COURSE_D/IPFS_Camp_Core_Course_D_Slides.pdf) 

## Trainers

| **Oliver Evans**                                    	| **Kishan Sagathiya**                                   	| **Michelle Hertzfeld**                                	|
|-----------------------------------------------------	|--------------------------------------------------------	|-------------------------------------------------------	|
| ![](https://avatars0.githubusercontent.com/u/58871) 	| ![](https://avatars0.githubusercontent.com/u/10185999) 	| ![](https://avatars1.githubusercontent.com/u/4827522) 	|
| [@olizilla](https://github.com/olizilla/)           	| [@kishansagathiya](https://github.com/kishansagathiya) 	| [@meiqimichelle](https://github.com/meiqimichelle)       	|

## What you will learn with this Course

Where the blocks at? We'll work through how data moves around the network. It'll be a mix of slides, _dancing_, and demonstrations.

We're covering a lot of ground in this course, to give everyone a high-level mental model of how things work, so we are all talking the same language when we go into the deep-dives later on at camp.

### Providing data via IPFS

We'll introduce how IPFS uses the **Kademlia** algorithm to find peers and announce the blocks they have in a way that others can find them.

### Finding data on IPFS

We'll go over how we use **Bitswap** to ask connected peers for the CIDs you want, and to verify the data you receive.

### Managing the data in your local node

By default, your IPFS node caches and provides every block it has. We'll cover how to use **Pinning** and pin types to manage what blocks your node keeps locally, and how garbage collecting keeps your repo size under control.


## Preparation for the course

No requirements. Turn up ready to learn! Bring some mechanism for taking notes, pencils or trackpads are fine. If you want to try commands out as we talk about them then a personal computation device running go-ipfs v0.4.22 is recommened.
