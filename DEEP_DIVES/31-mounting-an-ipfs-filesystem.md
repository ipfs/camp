# Mounting an IPFS filesystem

Given that IPFS is a filesystem, we need to have ways to map it as a filesystem on various existing systems, such as an operating system or programming language interface.

In this session we'll be diving into a variety of related concerns, such as (but not limited to ;^)
 - What do we have today?
   - Explore other filesystems/APIs (e.g. Unix, Plan9/9P, SPRING, FUSE, et al.)
   - Explore IPFS formats
 - What design requirements and implentation challenges do we have for tomorrow?
   - What features do we want to consider "standard" (IPFS, IPNS, FilesAPI, etc.)
   - System/API target support and limitations; (kernel interfaces (\*nix, Win32/NT), network protocols (WebDAV), language runtimes (Go, JS), etc.)
 - Efficiency patterns and data structures / caching

## Goal

Our goal is to explore the current state of mounting IPFS, problems with it, and see what we can do to improve the next iterations.

Long term we seek to acheive the ability to mount IPFS as a filesystem for use with existing systems and applications as well as a flexible way to craft new systems on top of. 
When given a flexible filesystem API, developers are enabled to create a broad range of things at many levels.

The operating system Plan9, takes heavy advantage of the [union mount](https://en.wikipedia.org/wiki/Union_mount) concept to construct trees of trees that transparently handle network traversal among other things.

WebDAV is often used in network storage drives, and mainstream operating systems come with native support for mounting WebDAV as drives. It could supersede Writable Gateway and create a surface for interop with apps that provide built-in client-side support for WebDAV. https://github.com/ipfs/in-web-browsers/issues/146

## Requirements to consider

- We're bound to the API's we target and depend on
- Portability is important
- We must be careful to remain scoped when discussing different but interconnected layers

## Where to learn about it
https://github.com/ipfs/go-ipfs/blob/v0.4.21/docs/fuse.md  
https://github.com/ipfs/go-ipfs/issues/5003  
https://github.com/ipfs/interface-go-ipfs-core/pull/30  
https://github.com/tableflip/ipfs-fuse  
