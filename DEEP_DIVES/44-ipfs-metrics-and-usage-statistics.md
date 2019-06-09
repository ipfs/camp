# IPFS metrics and usage statistics
Open problems around metrics and usage statistics in IPFS can be grouped as follows:
- Collection Logistics
  - How to collect telemetry like application metrics and usage in a distributed world?
  - Is metric collection done by a separate kind of IPFS node? If so, who runs these collector nodes?
- Storage Logistics
  - Where do the collected metrics go?
  - How is the metrics datastore accessed? 
  - Who can access this metrics datastore? 
- Meaningful Statistics 
  - What information can we reliably extract from the network?
    - How to determine the distribution of a file across the network?
    - What is the average lifetime of a file on IPFS?
  - What statistics become meaningless or impossible to measure in the context of IPFS?
    - What is the download count of a file?
## Goal
If we are able to solve the above problems we will be able to learn a few things:
  - How are applications making use of IPFS features?
    - This enables the IPFS development team to better allocate their time and energy to features that help the applications that have built on top of IPFS.
  - How are those applications themselves being used?
  - To help enable certain distribution based use cases to florish on IPFS, they need to understand how their data is being distributed to measure their own impact, i.e. scientific research organisations, binary and library package managers.
## Requirements to consider
- Telemetry collection MUST allow for opting out, ideal though, it should be opt-in
- Metrics should be meaningful, or at least proxy for something meaningful, and if all else fails, it should be understood where certain metrics fall short in conveying meaning[^1]
- Increased traffic on the IPFS network, a certain amount is acceptable but there is a limit
## Where to learn about it
- https://github.com/ipfs/package-managers/issues/6
- https://github.com/ipfs/notes/issues/107
- https://github.com/ipfs/ipfs-gui/issues/33
- https://github.com/ipfs/go-ipfs/issues/5912
- https://github.com/ipfs/integration-mini-projects/issues/14
- https://github.com/whyrusleeping/ipfs-counter

[^1]: https://github.com/ipfs/integration-mini-projects/issues/14#issuecomment-495279240