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

Long term we seek to achieve the ability to mount IPFS as a filesystem for use with existing systems and applications, as well as offer a flexible way to craft new systems on top of it.
When given a flexible filesystem API, developers are enabled to create a broad range of things at many levels.

The operating system Plan9, takes heavy advantage of the [union mount](https://en.wikipedia.org/wiki/Union_mount) concept to construct trees of trees that transparently handle network traversal among other things.

WebDAV is often used in network storage drives, and mainstream operating systems come with native support for mounting WebDAV as drives. It could supersede the Writable Gateway and create a surface for interop with apps that provide built-in client-side support for WebDAV. https://github.com/ipfs/in-web-browsers/issues/146

## Requirements to consider

- We're bound to the API's we target and depend on
- Portability is important
- We must be careful to remain scoped when discussing different but interconnected layers

## Where to learn about it
- https://github.com/ipfs/go-ipfs/blob/v0.4.21/docs/fuse.md
- https://github.com/ipfs/go-ipfs/issues/5003
- https://github.com/ipfs/interface-go-ipfs-core/pull/30
- https://github.com/tableflip/ipfs-fuse

## Team

* [@djdv](https://github.com/djdv)
* [@hinshun](https://github.com/hinshun)
* [@vojtechsimetka](https://github.com/vojtechsimetka)
* [@ianamunoz](https://github.com/ianamunoz)
* [@alekswn](https://github.com/alekswn)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_243)

## Notes

> Our problem scope is to define an API to modify named objects from IPFS

### Summary

Our effort centers around defining an abstract VFS that sits above other filesystems, decoupled from all the side effects and nuances. When we mount this VFS on a Unix system, there is the expectation of POSIX compliance. To comply with these specifications and those of other systems, we need to implement API bridges that fulfill them. VFS API <-> bridge <-> POSIX API. Maintaining interop where needed, but still allowing developers to use the VFS API directly, when possible.

![Layers of IPFS](img/ipfs-layers.svg)

### Context

Unix - the starting point (everything is a file)
- opening an object by name, using abstract fd with system calls
- exposes a way of manipulating named references
- unix v4 (~1980) beginning to standardize portability concerns across machines
- POSIX (~1990) generally agreed upon standardization of a portable system interface
- documented side effects and expectations when using the (file)system
- novel ideas: named pipes and devices (backed in-memory by the kernel rather than traditional files on disk/tape)

[Plan9](https://www.orosk.com/plan-9-filesystem-protocol/) - generalize it further (everything is a filesystem)
  - contract between a filesystem and an API (9P)
  - expectation of open() has changed, now calling open() on an object in some namespace, rather than a single unified namespace
  - filesystems are composable, they can be made up of other filesystems in a variety of configurations
  - *Plan9 doesn't rely on a $PATH environment variable*, they rely on a single /bin directory which is composed from other nodes/filesystems/locations
  - unionfs - when composing filesystems, you have the option to overlay objects in an order that the system will use. When binding 1 path to another, you can append it to the front of the order, to the back, or replace whatever order is currently in place.
  - if a user wants to use a program `ls` at `/bin/ls`, it shouldn't matter if its local, networked, or provided some other way. It may be that I have bound my `/bin/ls` to be the `ls` on your machine, and this should work transparently.
  - named objects are versioned (which allows generic cache coherency, without understanding what the name references)

[Spring](https://en.wikipedia.org/wiki/Spring_(operating_system)#File_system) - from sun microsystem (unsure if public?)
  - things are named
  - relation between names and objects
  - filesystems/files have a finite set of types (files, directories, symlinks), whereas spring wants to decouple it completely
  - research eventually led into java development

[ZFS](http://open-zfs.org/wiki/Main_Page)
  - already uses merkle DAG as a storage
  - has NFS mount
  - concept of pooling resources (abstracts volume management away)
  - from pool resources you can derive filesystems (have their own rulesets, versions, features)
  - exposes other protocols as non-native, its very pluggable
  - translation layers from on-the-wire protocols to native syscalls, etc.
  - self contained
  - more than just a filesystem
  - BTRFS also related

### Current work

https://github.com/djdv/interface-go-ipfs-core/tree/feat/filesystem/filesystem

- Work in progress [interfaces](https://github.com/djdv/interface-go-ipfs-core/blob/feat/filesystem/filesystem/interface/interface.go) and components of what a "filesystem" is

default
  - example of a filesystem implementation

interface
  - directories
    - doesn't have to be directories, just a key value map
  - symlinks
    - not constructs for users, but for the filesystem
  - filesystem
    - create named objects of various types
    - remove named objects
    - `OpenFile`, `OpenDirectory`, `OpenReference` syntatic sugar for developers
    - expose a lookup a named reference to get a object, then you can typecheck it
    - everything is a reference for a filesystem to use
    - needs backwards compatibility with POSIX

### Plan

> We wish to create a virtual file system interface that works with abstract linked nodes, which developers can build and compose opinionated filesystems.

IPFS wants to expose a filesystem similar to Plan9/9P, with the goal of having composable filesystems as well as maintaining some of the object flexibility from Spring (named objects can be more than just "files" bound to the file API alone.  
e.g. a PIPE can look like a file on the filesystem, but have its own set of methods (think `pipe.send(MSG)`) rather than being bound to conform to the same interface as a traditional "file" (think `Write(pipeHandle, bytes)`).  
Resource management, and tooling can take inspiration from ZFS and other systems as well. Pushing the boundaries of responsibilities of a filesystem to encompass a greater set of standard expectations.

![Composing filesystems](img/composing-filesystems.svg)

### Definitions

`junction`
  - symlink to a directory but has to be an absolute path

`atime`
  - access time, whenever an operation is made on any named node, it has to modify to atime
  - even reads are writes (updating atime)
  - IPFS needs to implement it nevertheless because there are programs that depend on atime (if we want to be POSIX compliant)
  - we should decouple file metadata from the file data
  - unixv1 - has metadata as the first block of the chunke ddata
  - unixv2 - aim to have 2 seperate merkle dags for metadata and data

### Links & Resources:
- https://github.com/djdv/interface-go-ipfs-core/tree/feat/filesystem/filesystem
- http://pubs.opengroup.org/onlinepubs/009695399/functions/read.html
- https://www.youtube.com/playlist?list=PLrZxGPqQuwHC_cZF2assuM0Vl3D5s5OSN
