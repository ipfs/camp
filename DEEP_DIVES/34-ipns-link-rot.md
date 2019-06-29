# IPNS link rot

Right now, IPNS needs to be refreshed by original publisher every day, otherwise it stops working. There should be a way to pin IPNS address so that other peers keep refreshing the last valid entry when original node goes offline, keeping the last version alive even if the original publisher disappears forever.

## Goal

A method for keeping IPNS records alive after the publisher goes offline.

## Requirements to consider

* Is it possible for _someone else_ to re-publish an IPNS record they don't own?
    * How do we avoid nodes being a delegated re-publisher for EVERY IPNS record?
    * How long should a delegate continue to republish?
    * How to halt delegated republishing?
* Should I have an option to republish IPNS records of my own accord?
    * How I do know which records to republishing?
    * How I do know when to stop republishing?

## Where to learn about it

https://github.com/ipfs/specs/tree/master/naming


## Proposed approach to improving IPNS link rot

IPNS record have two values that affect how long they survive in the network.

TTL - time to live - which determines whether you you should check for a new version
End of Life - the point at which the record is invalid

We proposing adding the ability of a node to pin an IPNS address provided by another node. The pinning node would store the IPNS record locally along with the latest content, until the End of Life is reached. The policy will be to track refreshes to the IPNS record and update the content to the latest version (unpinning the previous version of the content).

We considered the problem of GC of the old version conflicting with an existing pin. This is the same problem as recursive pins, but we need to look into how this is solved. Perhaps if the pinned IPFS dag were stored using the same Best Effort Pinset used by MFS.

This will enable a user to pin and republish a website, telling the IPFS node to keep the pinned website up to date and provide it to the network for the good of all.


----------------------

IPNS records have a TTL of 1hr

End of life and ttl

* end of life - is the timestamp after you shouldn't republish, or even considered in answering the query (?), currently 1 hr
* TTL - the time after which a new version should be sought (based on a sequence number)

Why can't we set the TTL to 24 hour?

* It will affect how quickly updated content spreads through the network

Why can't we set end of life to 2 years?

Maybe end of life should be varied by performance profiles? Server that isn't expected to go down can have a short value, whereas if your desktop goes off while you sleep (a good idea), maybe 18hrs would work better.

Is the shortness of End of Life due to potential for spamming the network.

Closest nodes are published to in the DHT (the same as )
	IPNS record contains (see github but value, sequence number, )




Possible Approaches
-------------------

Delegated Republish - tell someone to republish, how do you get agreement
Why don't readers of the IPNS record auto-republish, as they are linked to be interested
Tell node to continuously republish some other nodes IPNS - add an api call

What does DAT do differently that allows them to republish

Are we going to spam the DHT?


IPNS over pubsub
-----------------

Faster updates for users that have registered an interested. If your not online you aren't getting the message. Could you ask for resolution over a pubsub channel.



What about multi-writers? If that gets solved


Folder in MFS for pinned records


What is the problem
-------------------

A method for keeping IPNS records alive after the publisher goes offline

Solutions that have been proposed

Different profiles for different environments
* We don't know why we can't up the end of life from 1hr to say 24hrs

The one we liked
* detail
* Trade-offs


Introducint a new type of pin for IPNS.
