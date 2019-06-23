# Unixfs Version 1

A file in IPFS isn’t just content. It might be too big to fit in a single block, so it needs metadata to link all its blocks together. It might be a symlink or a directory, so it needs metadata to link to other files. UnixFS is the data format used to represent files and all their links and metadata in IPFS, and is loosely based on how files work in Unix. When you add a file to IPFS, you are creating a block (or a tree of blocks) in the UnixFS format.

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

<Series of questions which the group should try to answer>

- What formats are available?
- In what ways can you use these formats?
- How does UnixFS compare with other file system relevant data formats?

## Where to learn about it

<https://docs.ipfs.io/guides/concepts/unixfs/>  
<https://github.com/ipfs/go-unixfs>  
<https://github.com/ipfs/js-ipfs-unixfs>
