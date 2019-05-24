# Understanding how the InterPlanetary File System deals with Files

Welcome space ranger to Core Course A. In this course, you can expect to:

1. Learn about immutability and why it's important - isn't change the one true constant?
1. Explore the anatomy of a CID - what's behind all those letters and numbers?
1. Find out what the heck a Merkle DAG is - where is the Merkle forest and can I take my family?
1. Learn what happens to your file when you add it to IPFS - where did my file go, why is it in bits and wait, my file is a tree?
1. Understand what MFS (Mutable File System) is - what now?...you literally just told me everything was immutable!

Warning, content may contain traces of the following: content vs location addressing, trust issues, IPLD format multicodecs, hash functions, multibase encoding, balanced vs trickle DAG layouts, chunking, content deduping, UnixFS.

---

## Part 1 - Why immutability

Duration: 15 min
Big wow: ???

Topics:

* Why there's no trust in p2p networks
* What immutable content is
    * What resource integrity checking is
    * What a cryptographic hash is
    * Why immutable content is good for caching
* What the difference is between content and location addressing
    * What the benefits of verifying data are
* Why content addressing allows us to get from anyone & anywhere
* Lead into part 2: How do we content address in IPFS?

## Part 2 - Anatomy of a CID

Duration: 15 min
Big wow: CID inspector https://cid.ipfs.io/

Topics:

* Why a CID is different from a hash (part 1 - intro to multihash)
    * The existence of different hashing algos
        * Why insecure algos necessitate change
    * What multicodec is
    * What multihash is
* Why a CID is different from a hash (part 2 - the rest of the meta)
    * Why we need to describe the content
    * What an IPLD format is
    * Mention version number - covered later
* What a string CID looks like
    * Why we need to display as strings
    * Why CIDs are binary data
    * The problem of not knowing how to decode
    * What multibase is
    * Examples of CIDs in different bases
* What the difference between v0 and v1 CIDs is
    * What a v0 CID is
    * Why all CIDs start with "Qm"
    * Why we need to switch to v1 and base32
* Why the hash part of a CID is _not_ equal to the hash of the file
    * What a CID is actually addressing (root chunk of the iceberg)
    * Lead onto part 3: files are chunked and arranged into a tree

## Part 3 - Merkle DAG

Duration: 5 min
Big wow: Diagrams from protoschool https://proto.school/#/data-structures/05

Topics:

* What a DAG is
    * Direction
    * No cycles
* What a Merkle DAG is
    * What a Merkle Tree is
    * How in Merkle Dag non-leaf nodes also have data
    * Why a Merkle DAG is good
* Lead onto part 4: A Merkle DAG is what is created when importing a file into IPFS

## Part 4 - Importing files

Duration: 20 min
Big wow: DAG builder vis https://dag.ipfs.io

Topics:

* What chunking is
    * What chunking algos exist
    * Why you'd want to use a different chunker
    * Why chunks = deduplication
* What a DAG layout is
    * Why different layouts exist
    * Which layout is used when
    * How to change the layout
    * What effect the max number of children for a given node has
* Why you get a different CID for different chunking/layouts
* What IPLD format IPFS uses for files
    * What protobufs are
* How IPFS stores file nodes
    * What a UnixFS wrapper is
        * Why it exists
        * What types of UnixFS exist
    * What raw leaves are
        * What benefits raw leaves provide
        * When raw leaves are enabled (cidv1)
* How to retain file names
    * Why inidividual files have no name
    * How to refer to files by name via a directory
    * Lead onto part 5: MFS might help!

## Part 5 - MFS

Duration: 20 min
Big wow: ProtoSchool MFS workshopper

Topics:

* What MFS is
    * Why it exists
    * What problems it solves
    * What pitfalls to look out for
        * Why an MFS path can't be shared directly with someone else
        * Why sharing an MFS node CID could be problematic
* What happens when updating a file
    * Why the MFS root CID changes
        * How propagation up the merkle dag works
        * Where discarded branches go (gc)
* Start the MFS ProtoSchool workshop
