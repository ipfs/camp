# Better File Chunking

Within the IPFS stack/ecosystem, just as within computing as a whole, **an
uncompressed stream of untagged octets** is a fundamental unit of exchange.
As a general-purpose data storage system IPFS needs to handle an unbounded
variety of content represented by such streams. Handling the maximum amount
of this variety efficiently ( ideally **by default** ) would likely have an
outsized impact on the future adoption of IPFS as a **long-term data interchange
medium/format.**

The current stream-chunking options provided by the "official" IPFS
content-adders are not particularly good. If left unchecked, the
"evolutionaly pressure" will inevitably lead to proliferation of chunking
algorithms within and beyond ProtocolLabs-controlled projects. This could
be undesireable as any iteration would result in radically different
IPFS addresses, hampering user experience, e.g.:

* Preventing users from recognizing identical content via simple "eyeballing a list of hashes"

* Increaed storage requirements due to failing de-duplication of identical content

* Increased retrieval times due to high counts of not-already-present blocks

This session is mostly a "conversation starter" to properly map the available
problem ( and solution ) spaces. I would strongly prefer to keep the deep dive
light on specific technical details and instead **focus on wider architectural /
UX / game-theory-ish problems.**

## Goal

It would be great if towards the end of this session we have answers or maybe
even consensus 🤞 regarding the following deceptively simple
checklist:

- [ ] Identify a ~dozen-or-two of realistic user-stories where IPFS could
or already does play a central role.

- [ ] Clearly identify pros and cons of chunking algorithm proliferation
keeping the above list in mind ( spoiler alert: the author is strongly for
reducing proliferation, but also recognizes that there are rather few effective tools
for doing so )

- [ ] Regardless of above outcome identify if there exists a low ( single-digit )
number of "general-purpose types of content" that could benefit
from a single shared chunking strategy.

- [ ] Identify whether the above number of algorithms could be reduced to 1
( **one** ) which could then viably **replace the current defaults**.

## List of various ( often conflicting ) prior-art discussions within Protocol Labs

- [Latest push for chunking standardization as part of UnixFSv2](https://github.com/ipfs/roadmap/issues/19#issuecomment-474699858)

- [Parameterizable-chunking proposal](https://github.com/ipfs/unixfs-v2/issues/15#issuecomment-429586046)
( preliminary implementation available as [part of ipfs-pack](https://github.com/ipfs/ipfs-pack/blob/master/spec.md) )

- [Musings on practical limitations of current "officially available" chunkers](https://github.com/ipfs-shipyard/ipfs-npm-registry-mirror/issues/6#issue-387056647)

- [Notes from ReproducibleBuildsSummit 2019](https://github.com/ipfs/notes/issues/366#issue-398124198)

- [Collection of links on content-dependent-chunkers ( warnocked )](https://github.com/ipfs/notes/issues/183#issue-186397332)

- [Chunking in the context of maximum block size](https://github.com/ipfs/go-ipfs/issues/3104#issuecomment-241244915)

- [Inlining of small objects](https://github.com/ipfs/unixfs-v2/issues/4#issuecomment-341798613) ( this is not directly related to chunking, but is relevant to smallest-chunk-size-limitations )

## Several non-specialized chunking algorithm specs/implementations

- [FastCDC: a Fast and Efficient Content-Defined Chunking Approach for Data Deduplication](https://www.usenix.org/system/files/conference/atc16/atc16-paper-xia.pdf)

- [Ddelta/Gearhash](http://ranger.uta.edu/~jiang/publication/Journals/2014/2014-Perf%20Eval%20-Ddelta-%20A%20Deduplication-Inspired%20Fast%20Delta%20Compression%20Approach.pdf) ( pages 9 and 10 contain direct comp

- [bup "hashsplit" implementation](https://github.com/bup/bup/blob/0.29.2/DESIGN#L138-L234) ( this is especially notable for being side-compatible with vanilla git )

- [pigz implementation of --rsyncable](https://github.com/madler/pigz/blob/v2.4/pigz.c#L441-L483)
