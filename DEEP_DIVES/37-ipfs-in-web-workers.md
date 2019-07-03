# IPFS in Web Workers

Modern web platform offers options for running code off the main thread via [Dedicated](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), [Shared](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker) & [Service](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker) Worker APIs. Each with it's own quirks and unique benefits. We will explore the benefits of running an IPFS node in the worker(s), limitations & current efforts to overcome them.

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
- User Agency - The largest problems of the web today are: user tracking, data hoarding and lock-in. We should embed user agency into the core of the ecosystem (IPFS) to build a better web instead of making these problems worse.
- Data availablity (sync) - (Centralized) Web is popular because user can pick up a task on a phone where it was left off on the laptop. Within the walled gardens of Google, Github, ${your_favouite_org} users can access their data regardless of the device they're on & we need to provide that level of access as well.


## Where to learn about it

- [IPFS runs as a Service Worker](https://github.com/ipfs/in-web-browsers/issues/55)
- [Accessing API of remote IPFS node](https://github.com/ipfs/in-web-browsers/issues/137)
- [ipfs-shipyard/ipfs-service-worker](https://github.com/ipfs-shipyard/ipfs-service-worker)
- [Lunet](https://github.com/gozala/lunet)

## Team

* [@gozala](https://github.com/gozala)
* [@aknuds1](https://github.com/aknuds1)
* [@zeckli](https://github.com/zeckli)

## Presentation

🎤 [Slides](https://docs.google.com/presentation/d/105KwT6ZmcneywGnvUyww5y-u_GHSY0FFQ0yIXZQf7Y0/edit#slide=id.g5c6a5171f6_0_276)

## Notes

### Browser should act as a single IPFS node rather than each app embedding a separate node
https://sharednode.ipfs.io/shared-ipfs.js when loaded creates a hidden iframe in the document and loads https://sharednode.ipfs.io/proxy.html. proxy.html spawns a shared worker, which has a JS-IPFS node in it. shared-ipfs.js directs all requests to proxy.html through the message port, which proxy.html forwards to the shared worker. js-ipfs serves the request and the response is routed back.

### Service Worker's are deactivated when they are not serving requests (& for good reasons)
We will generally use a shared worker, but service worker as a fallback where the former is not available. If using a service worker, we will ping it continuously to keep it alive.

### Safari does not support Shared Workers
See above.

### Sharing IPFS node across origins is quite an undertaking
This is solved by using shared or service workers (see above).

### Access control (which app gets to read what, or what the write quota should be ?)
For MFS we'll create root directories for corresponding origins, and serve all responses relative to origin.

### IPFS node needs a way to deal with [storage limits](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria#Storage_limits)
We can use `StorageManager.estimate` to estimate amount of storage left, and to trigger GC when necessary. In addition to that, we can use sharding to spread storage over several origins (potentially utilize IPFS cluster). Regarding sharding, we can use hidden sub iframes for different origins to assign shards to.
