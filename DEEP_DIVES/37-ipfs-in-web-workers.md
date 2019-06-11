# IPFS in Web Workers

Modern web platform offers options for running code off the main thread via [Dedicated](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), [Shared](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) & [Service](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) Worker APIs. Each with own quirks and unique benefits. We will explore the benefits of running IPFS node in the woker(s), limitations & current efforts to overcome them.

### Problem space

- Browser should act as a single IPFS node rather than each app embedding a separate node.
- Service Worker's are deactivated when they are not serving requests (& for good reasons).
- Safari does not support Shared Workers.
- Sharing IPFS node across origins is quite an undertaking.
- Access control (which app gets to read what, or what the write quota should be ?)
- IPFS node needs a way to deal with [storage limits](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#Storage_limits)

## Goal

Reliable IPFS node accessible by web applications across all the mainstream browsers.

## Requirements to consider

- Seamless upgrade - in-browser IPFS node should discover on device IPFS node (e.g IPFS Desktop) and leverage it for networking, more reliable data storage, etc..
- User Agency - The largerst problems of the web today are: user tracking, data hoarding and lock-in. We should embed user agency into the core of of the ecosystem (IPFS) to build a better web instead of making these problems worse.
- Data availablity (sync) - (Centralized) Web is popular because user can pick up a task on a phone where it was left off on the laptop. Within the walled gardens of Google, Github, ${your_favouite_org} users can access their data regardless of the device they're one & we need to provide that level of access as well.


## Where to learn about it

- [IPFS runs as a Service Worker](https://github.com/ipfs/in-web-browsers/issues/55)
- [Accessing API of remote IPFS node](https://github.com/ipfs/in-web-browsers/issues/137)
- [ipfs-shipyard/ipfs-service-worker](https://github.com/ipfs-shipyard/ipfs-service-worker)
- [Lunet](https://github.com/gozala/lunet)
