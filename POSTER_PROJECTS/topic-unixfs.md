# Unixfs

A file in IPFS isn’t just content. It might be too big to fit in a single block, so it needs metadata to link all its blocks together. It might be a file, directory, symlink, etc., so it needs metadata to describe itself and link to other files.  

Unixfs is the data format used to represent this metadata in IPFS, and is loosely based on how files work in Unix. When you add a file to IPFS, you are creating a block (or a tree of blocks) in the UnixFS format.
UnixfsV2 is the futuristic version of Unixfs, designed to solve many of the issues of UFSv1

## Goal

Use whatever resources available to you, in order to come up with a visual representation of the topic that can be projected on to a poster (similar in spirit to the [poster description](README.md#description) but with whatever creative freedom your group prefers :^)

## Questions to Answer

<Series of questions which the group should try to answer>

- What formats does UFSv1 offer?
- How does Unixfs compare with other file system relevant data formats?
- How will UFSv2 differ from UFSv1?
  - What problems does it solve?
  - What formats and concepts have changed or been added?
- How are Unixfs objects used?

## Where to learn about it

<https://docs.ipfs.io/guides/concepts/unixfs/>  
<https://github.com/ipfs/go-unixfs>  
<https://github.com/ipfs/js-ipfs-unixfs>
<https://github.com/ipfs/unixfs-v2>  
<https://docs.ipfs.io/guides/concepts/unixfs/>
