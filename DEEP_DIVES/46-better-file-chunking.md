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

It would be great if towards the end of this session we have answers to the
following deceptively simple checklist:

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

## Requirements to consider

```
  Work-in-progress ( do not merge PR )

  <Do we have requirements (i.e. work with 1MM nodes)?>
```

## Exhaustive list of various ( often conflicting ) prior-art discussions

```
  Work-in-progress ( do not merge PR )
  
  <List of talks, links to github issues, code, notes and so on>
```
