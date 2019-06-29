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
